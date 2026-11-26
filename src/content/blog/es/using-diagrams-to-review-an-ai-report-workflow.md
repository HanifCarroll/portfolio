---
title: "Cómo ayudar a los agentes de IA a detectar trabajo innecesario con diagramas"
subtitle: "Le pedí a un agente que dibujara el flujo de generación de informes de Casamo. Después usé esos diagramas para decidir dónde buscar trabajo innecesario en el código."
description: "Le pedí a un agente que dibujara el flujo de generación de informes de Casamo. Después usé esos diagramas para decidir dónde buscar trabajo innecesario en el código."
pubDate: "2026-10-11"
tags: ["AI workflows", "Architecture", "Casamo"]
ctaVariant: systemsBuild
hidden: false
---

Casamo analiza varias propiedades a la vez. Cuando termina de analizarlas, ordena los resultados, prepara un informe para cada propiedad seleccionada, traduce los títulos, agrega recorridos a pie opcionales y publica todo en un solo informe. Quería saber si los pasos posteriores al análisis también se ejecutaban en paralelo o si se hacían de a una propiedad por vez.

Para ver el sistema completo antes de leer funciones individuales, le pedí a un agente que dibujara el proceso de generación de informes en BPMN y en Excalidraw, además de un diagrama de arquitectura. En parte quería comparar formatos, pero los diagramas también me sirvieron para empezar a revisar la eficiencia del proceso. En la primera revisión, el agente había revisado el código directamente. Le pedí que empezara de nuevo por los diagramas: que revisara el diseño, anotara qué trabajo podía ser innecesario y verificara cada posibilidad en el código.

A partir de esa revisión hice dos cambios. Ahora los informes finales se preparan en paralelo y, durante el escaneo, ya no se vuelve a leer la evidencia guardada si no cambió. En una prueba de rendimiento sin conexión, el segundo cambio redujo un 30 % las lecturas del almacenamiento y un 26 % las sentencias de base de datos. Al revisar el código también descarté algunos cambios que parecían necesarios al ver los diagramas.

## Qué se veía en los diagramas <!-- heading-id: what-the-drawings-showed -->

Con Casamo podés comparar alojamientos amoblados a partir de los datos de los avisos, las fotos, las reseñas y otra evidencia. Una persona manda una solicitud de viaje desde la aplicación pública y un Cloudflare Worker privado ejecuta el escaneo. Dentro del Worker, un coordinador gestiona el escaneo e inicia un Workflow hijo para analizar cada propiedad.

En el escaneo se guardan dos tipos de datos. En D1, la base de datos, se registra el estado actual: qué tareas se están ejecutando, qué ejecución tomó cada tarea, qué tareas se pueden volver a intentar y si el informe ya se publicó. En R2, el almacenamiento de objetos, se guardan la evidencia y los informes terminados. Nunca se modifican después de guardarlos. Con esa separación, en un paso posterior se puede consultar de dónde salió una conclusión, y un escaneo interrumpido puede reanudarse desde el punto en que se detuvo.

<figure class="workflow-map">
  <a href="/images/blog/using-diagrams-to-review-an-ai-report-workflow/architecture-before.svg" target="_blank" rel="noopener" data-image-link>
    <img src="/images/blog/using-diagrams-to-review-an-ai-report-workflow/architecture-before.svg" alt="Arquitectura de Casamo antes de los cambios" loading="lazy" />
  </a>
  <figcaption>La arquitectura antes de estos cambios. Los títulos se traducen con Google Places y los recorridos a pie se calculan con Mapbox.</figcaption>
</figure>

En el diagrama del proceso se ve que los análisis en paralelo de las propiedades se completan antes de ordenar los resultados, preparar los informes y publicar el informe final. Una vez que se define la selección de propiedades, ¿cuáles de esos pasos dependen unos de otros?

<figure class="workflow-map">
  <a href="/images/blog/using-diagrams-to-review-an-ai-report-workflow/report-process-before.svg" target="_blank" rel="noopener" data-image-link>
    <img src="/images/blog/using-diagrams-to-review-an-ai-report-workflow/report-process-before.svg" alt="Proceso original de generación de informes de Casamo exportado desde bpmn.io" loading="lazy" />
  </a>
  <figcaption>La exportación original de BPMN. El paso «Prepare evidence-backed property reports» («Preparar informes de propiedades con evidencia») está contraído, así que no se ve qué pasa adentro.</figcaption>
</figure>

El diagrama de arquitectura me llevó a hacer otra pregunta. Había muchas flechas entre el coordinador, los Workflows de cada propiedad y D1/R2, así que valía la pena revisar el acceso a los datos. Las flechas no indican cuántas lecturas se hacen ni si los datos cambiaron entre lecturas, así que el agente tuvo que verificarlo en el código.

## La preparación final se hacía de a una propiedad por vez <!-- heading-id: final-preparation-ran-one-pick-at-a-time -->

En el código vi que, durante la preparación de los informes, se ejecutaba una tarea por vez. Un planificador seleccionaba la siguiente tarea de recorrido a pie o de informe, el coordinador la ejecutaba y, recién cuando terminaba, el planificador seleccionaba otra. Así que, aunque todos los análisis de propiedades terminaran al mismo tiempo, los informes se preparaban uno después del otro.

Parte de esa espera es necesaria. Casamo publica un informe completo con una selección fija de propiedades. Para publicarlo, hay que esperar a que estén listas todas. Pero preparar el informe de una propiedad nunca dependió de otra.

Ahora el coordinador inicia las tareas independientes juntas, en grupos que respetan los límites de concurrencia y recursos del escaneo. Cada tarea guarda su resultado en cuanto termina. Si hay una interrupción, solo se vuelven a ejecutar las tareas que no terminaron. Si una tarea está a la espera de otro intento o ya está asignada a otra ejecución, el resto del grupo puede avanzar.

Si una tarea falla, las otras del grupo terminan antes de que se informe la falla. En el siguiente intento se reutilizan los resultados que esas tareas guardaron. Antes de publicar, el coordinador verifica que ninguna otra ejecución haya tomado el control del escaneo y que todas las propiedades seleccionadas estén listas.

## La traducción y los recorridos a pie se pueden hacer en paralelo <!-- heading-id: translation-and-walking-routes-can-overlap -->

Antes se calculaban los recorridos a pie antes de preparar los informes, que es cuando se traducen los títulos. Los recorridos son parte de la presentación y no afectan qué propiedades se seleccionan. Para traducir los títulos solo hace falta la evidencia ya recopilada de cada propiedad. Ninguna de las dos tareas tiene que esperar a la otra.

Ahora los recorridos a pie se calculan al mismo tiempo que se preparan los informes. Cuando terminan los dos pasos, el sistema combina cada recorrido con el informe correspondiente y muestra las propiedades en el orden en que quedaron clasificadas. El límite de tiempo para los recorridos es el mismo: se usan los que terminan antes del límite, no se inician solicitudes nuevas después, y para las propiedades sin recorrido se muestra la distancia en línea recta.

También evalué publicar el informe de inmediato y agregar los recorridos en una actualización. Pero la idea es que el informe de Casamo esté completo al publicarse, así que todavía hay que esperar a que estén listas todas las propiedades seleccionadas.

<figure class="workflow-map">
  <a href="/images/blog/using-diagrams-to-review-an-ai-report-workflow/finalization-before-after.svg" target="_blank" rel="noopener" data-image-link>
    <img src="/images/blog/using-diagrams-to-review-an-ai-report-workflow/finalization-before-after.svg" alt="Preparación de los informes finales antes y después de los cambios" loading="lazy" />
  </a>
  <figcaption>La preparación de los informes finales antes y después, con el detalle del paso que estaba contraído en el BPMN original.</figcaption>
</figure>

El cambio también tenía que contemplar los escaneos que se habían interrumpido cuando todavía se calculaban los recorridos primero. Si un informe se preparó con el orden anterior y no cambiaron la propiedad seleccionada, su posición, su evaluación ni su evidencia, el sistema lo reutiliza. Así, al reanudar un escaneo, no se repite el trabajo que ya se completó.

## Cómo leer la misma evidencia una sola vez <!-- heading-id: reading-the-same-evidence-once -->

El segundo cambio surgió de revisar lo que representaban las flechas que iban a D1/R2. Cada vez que se planificaba el siguiente paso para una propiedad, el sistema cargaba los registros de todas las propiedades para encontrar el que necesitaba, volvía a leer los registros de tareas y los resultados de las tareas ya terminadas, y volvía a armar evidencia que no había cambiado. Hasta guardar un archivo que ya existía podía generar otra lectura y descompresión para verificarlo.

Ahora, durante la planificación, el sistema consulta directamente el registro de la propiedad y usa una referencia a la evidencia ya guardada en vez de volver a armarla. Cada ciclo de planificación o tarea también tiene una caché chica que guarda hasta 128 entradas y 2 MiB. Si se pide la misma evidencia dos veces durante ese ciclo, la segunda solicitud usa la copia que ya se leyó y validó. Cada parte del código que la solicita recibe su propia copia decodificada, así que si modifica esa copia no afecta a las demás. Al terminar el ciclo, el sistema descarta la caché. En el siguiente ciclo vuelve a leer de D1/R2.

Solo se guarda en caché la evidencia que nunca cambia. Para los datos que sí pueden cambiar, como qué ejecución tomó una tarea o cuándo se puede volver a intentar, el sistema consulta la base de datos en cada lectura. La asignación de una tarea a una ejecución puede haber vencido desde la última lectura.

## Los cambios que descarté <!-- heading-id: what-didnt-turn-into-a-fix -->

Al revisar el código descarté algunos cambios que parecían necesarios al ver los diagramas. En el diagrama del proceso parecía que el coordinador consultaba el estado todo el tiempo. En realidad, espera a que los Workflows hijos notifiquen que terminaron y solo consulta cada tanto para detectar notificaciones perdidas. No había consultas constantes que eliminar.

El paso contraído del análisis de propiedades daba a entender que se hacía una auditoría completa de cada propiedad antes de poder descartarla con una verificación rápida. En el código, la evidencia que se recopila de una propiedad ya depende de lo que se encontró hasta ese momento. Vale la pena revisar por separado cómo se procesan las propiedades cuyos precios todavía no se pueden comparar.

El envío de correos ya estaba separado de la publicación del informe. Los Workers separados, los Workflows hijos, la base de datos y el almacenamiento de objetos tienen cada uno una función clara. No encontré nada en el código que indicara que convenía unirlos o que la base de datos limitara el rendimiento.

## La prueba de rendimiento sin conexión <!-- heading-id: the-offline-benchmark -->

Probé el cambio de reutilización de evidencia con una propiedad ficticia de Airbnb, con cuatro fotos, el primer paso del análisis completo y dos grupos de fotos pendientes de analizar. Después de una ejecución de calentamiento, ejecuté cinco ciclos de planificación con cada versión. Usé Cloudflare D1/R2 en local, sin servicios ni modelos externos.

| Medida                          | Antes  | Después | Reducción |
| ------------------------------- | -----: | ------: | --------: |
| Solicitudes GET a R2            |    115 |      80 |   30,43 % |
| Bytes comprimidos leídos de R2  | 56.660 |  33.505 |   40,87 % |
| Sentencias preparadas de D1     |    310 |     230 |   25,81 % |

Las dos versiones terminaron con la misma evidencia y los mismos registros de tareas, así que la reducción no cambió los resultados.

## Empezar por los diagramas <!-- heading-id: starting-from-the-drawings -->

Al empezar por los diagramas, cambiaron las preguntas de la revisión. Si empezás por el código, revisás una función por vez, y ninguno de los dos problemas se veía en una sola función. Solo podés ver que la preparación se hace en serie si seguís el trabajo desde el análisis de las propiedades hasta la publicación. Y solo notás las lecturas repetidas si observás cuántas veces pasa la misma evidencia por la misma conexión.

También era fácil sacar conclusiones de más a partir de los diagramas. Descarté varios cambios cuando el agente revisó el código. Algunas esperas y lecturas nuevas que parecían innecesarias tenían un motivo: para publicar hay que esperar a que estén listas todas las propiedades, y en cada lectura hay que verificar qué ejecución tiene asignada la tarea. Usé los diagramas para decidir qué buscar y el código para decidir qué cambiar.
