---
title: "Cómo mapear un proceso de negocio: un ejemplo antes y después"
seoTitle: "Cómo mapear un proceso de servicio antes y después de un cambio"
description: "Un ejemplo completo de cómo mapear un proceso en una empresa de servicios: de pedidos repartidos entre varios canales y copias en planillas a un registro compartido por trabajo."
pubDate: "2026-07-27"
tags:
  - business process mapping
  - workflow mapping
  - business systems
  - service operations
ctaVariant: general
---

Un mapa útil de un proceso de negocio muestra cómo se hace un trabajo desde un punto de partida claro hasta un resultado concreto. Identificá las personas, las herramientas, los pasos, las decisiones, los traspasos, las esperas y los registros. Dibujá el flujo actual tal como se hace en la práctica. Después, diseñá una versión mejor a partir del cambio más chico que resuelva el problema principal.

En este artículo, sigo un ejemplo desde la primera solicitud de un cliente hasta el informe semanal de operaciones. Entro en más detalle que en un diagrama de flujo general porque las partes difíciles de un negocio de servicios que está creciendo suelen aparecer entre los pasos: alguien copia una solicitud del correo a una planilla, una aprobación queda pendiente en un chat o una novedad de un trabajo a domicilio nunca se incluye en el informe.

Para mostrar un caso concreto, uso una empresa de servicios ficticia llamada Meridian Facility Services. Es el mismo caso que usé en el [proyecto One Tuesday](/es/projects/one-tuesday/).

<figure class="workflow-map workflow-editorial">
  <picture>
    <source media="(max-width: 768px)" srcset="/blog/business-process-mapping-examples/current-state-editorial-768.webp" width="768" height="1536" />
    <img src="/blog/business-process-mapping-examples/current-state-editorial.webp" width="1536" height="768" loading="eager" decoding="async" alt="Ilustración explicativa generada de un flujo de trabajo a domicilio simulado. Las solicitudes llegan por correo, teléfono o chat. Se copian fichas amarillas separadas en una planilla, durante la espera de la aprobación, en un tablero de asignación, en una actualización de un técnico y en un informe semanal. Las conexiones interrumpidas indican cada traspaso manual." />
  </picture>
  <figcaption><strong>Qué muestra la imagen:</strong> hay varias copias de una solicitud que no se actualizan entre sí. La aprobación queda pendiente en el chat, en cada traspaso se interrumpe el paso de información y para preparar el informe hay que copiar los datos una vez más.</figcaption>
</figure>

## ¿Qué debería incluir un mapa de procesos útil? <!-- heading-id: what-should-a-useful-business-process-map-include -->

Un mapa útil incluye suficientes detalles para responder nueve preguntas:

1. **Inicio:** ¿qué evento inicia el flujo de trabajo?
2. **Resultado:** ¿qué tiene que pasar para dar el trabajo por terminado?
3. **Personas:** ¿quién hace el trabajo, quién lo aprueba y quién necesita el resultado?
4. **Herramientas:** ¿en qué casillas de correo, formularios, chats, planillas y sistemas se registra o se hace el trabajo?
5. **Pasos:** ¿qué pasa primero y qué pasa después?
6. **Decisiones:** ¿en qué puntos puede seguir el trabajo por otro camino?
7. **Traspasos:** ¿en qué puntos se le pasa la responsabilidad o la información a otra persona?
8. **Esperas y fallas:** ¿dónde puede quedar en espera el trabajo, perderse, duplicarse o pasar incompleto al siguiente paso?
9. **Registro:** ¿dónde debería buscar alguien quién es responsable ahora, cuál es el estado y qué hay que hacer después?

La lista es parecida a la definición práctica de la [American Society for Quality](https://asq.org/quality-resources/process-analysis-tools), que indica que un diagrama de flujo puede incluir entradas y resultados, decisiones, personas, tiempos y mediciones. En su [guía sobre el mapeo de procesos](https://www.ibm.com/think/topics/process-mapping), IBM también recomienda mostrar quién se ocupa de cada tarea y los plazos previstos, y después validar el mapa con quienes hacen el trabajo antes de proponer cambios.

No hace falta usar toda la notación de Business Process Model and Notation para que el mapa sea útil. Para la mayoría de las conversaciones sobre el trabajo alcanza con rectángulos para las tareas, rombos para las decisiones, flechas para el orden y carriles para las responsabilidades. El objetivo es poder hablar de cómo se trabaja, no impresionar a nadie con la notación.

## ¿Cuándo conviene mapear un flujo de trabajo? <!-- heading-id: when-should-you-map-a-workflow -->

Mapeá un flujo cuando se repita el mismo problema operativo y todavía no esté claro por qué. Algunos indicios comunes:

- Los clientes piden novedades porque nadie puede consultar un estado confiable.
- El equipo usa la planilla como lista, pero consulta las decisiones en el chat o depende de lo que alguien recuerda.
- El personal vuelve a escribir los mismos datos en formularios, correos e informes.
- Las aprobaciones dependen de que una persona con experiencia se acuerde de mandar recordatorios.
- Para preparar el informe semanal, hay que volver a pedir los datos y comparar lo que se anotó en distintos lugares.
- El equipo está considerando automatizar o desarrollar software a medida antes de acordar cómo debería funcionar el proceso.

En vez de empezar por toda la empresa, elegí un flujo que se repita y cuyo inicio y resultado puedas identificar: de una solicitud a un trabajo agendado, de un interesado a una propuesta firmada, de una solicitud de compra a una orden aprobada o de un trabajo terminado a una factura.

La [guía actual de Atlassian para mapear procesos](https://www.atlassian.com/work-management/project-management/process-mapping) recomienda entrevistar a quienes hacen el trabajo para que el mapa represente el proceso real en vez de la versión oficial. Si solo dibujás el procedimiento escrito, no vas a encontrar esa planilla privada, ese mensaje de chat o esa excepción que alguien se acuerda de aplicar para que el trabajo pueda continuar.

## Ejemplo del proceso de servicio actual <!-- heading-id: business-process-mapping-example-the-current-service-workflow -->

La empresa del ejemplo hace unos 45 trabajos a domicilio en una semana típica. Las solicitudes pueden empezar por correo, teléfono, WhatsApp o un formulario web. Una persona de coordinación carga una fila por solicitud en la planilla. El dueño aprueba los presupuestos más grandes, una persona asigna el trabajo y el equipo que va a domicilio avisa cuando termina.

El flujo empieza cuando un cliente hace una solicitud. Termina cuando el equipo completa el trabajo, se guarda la evidencia y el trabajo figura correctamente en el informe semanal.

<figure class="workflow-map">
  <picture>
    <source media="(max-width: 640px)" srcset="/blog/business-process-mapping-examples/current-state-workflow-mobile.svg" />
    <img src="/blog/business-process-mapping-examples/current-state-workflow.svg" width="1200" height="900" loading="lazy" decoding="async" alt="Modelo del flujo de servicio actual. Las solicitudes llegan por correo, teléfono, WhatsApp o un formulario web. La persona de coordinación las vuelve a escribir en una planilla y pide los datos que faltan. El dueño recibe los presupuestos grandes en el chat, donde quedan pendientes hasta su aprobación. La persona que asigna el trabajo usa la planilla y lo que recuerda. El equipo a domicilio manda por chat la evidencia de que terminó el trabajo. La persona de coordinación actualiza a mano la planilla y el informe semanal." />
  </picture>
  <figcaption><strong>Flujo actual.</strong> El mapa muestra dónde las solicitudes quedan pendientes, dónde se registran en distintas herramientas y dónde se copian al informe.</figcaption>
</figure>

### Los pasos del mapa <!-- heading-id: the-steps-behind-the-map -->

1. **La solicitud entra por uno de cuatro canales.** Cada canal conserva el mensaje original del cliente, pero pide datos distintos.
2. **La persona de coordinación agrega una fila a la planilla.** Interpreta la solicitud, copia los datos útiles y decide cómo describir el trabajo.
3. **La persona de coordinación pide los datos que faltan por el canal original.** La fila ya está en la planilla, pero el trabajo queda pendiente mientras la persona de coordinación y el cliente se mandan mensajes.
4. **El dueño recibe los presupuestos grandes por chat.** La decisión y su contexto quedan fuera de la planilla. En el ejemplo no se define un plazo ni quién se hace cargo si el dueño no está disponible.
5. **La persona encargada asigna el trabajo.** Consulta la planilla y usa lo que recuerda sobre las zonas, las habilidades, la cantidad de trabajo en curso y las excepciones.
6. **El equipo avisa por chat que terminó.** Manda fotos y notas por mensaje en vez de actualizar el registro del trabajo.
7. **La persona de coordinación actualiza la planilla y prepara el informe semanal.** Armar el informe exige copiar a mano lo que pasó en vez de consultar el estado actual.

La planilla no es necesariamente el problema. Puede ser un buen primer registro compartido. El problema es que no contiene todas las decisiones necesarias para confiar en el estado que figura ahí. El equipo tiene que compararlo con los correos, el chat y lo que recuerda cada persona.

## Cómo encontrar la demora principal en un mapa de procesos <!-- heading-id: how-to-find-the-bottleneck-in-a-process-map -->

Buscá dónde se da alguna de estas situaciones:

- **El trabajo queda pendiente sin responsable ni plazo.** En este ejemplo, un presupuesto puede quedar sin respuesta en el chat hasta que la persona de coordinación vuelva a preguntar.
- **Alguien copia información entre herramientas.** Para la solicitud, la aprobación, la evidencia del trabajo terminado y el informe, alguien tiene que pasar el estado de un lugar a otro a mano.
- **Una persona corrige el proceso a partir de lo que recuerda.** La persona a cargo de asignar los trabajos sabe qué técnico puede hacer cada uno, pero nadie más puede consultar la regla.
- **Alguien responde la misma pregunta varias veces.** Tanto «¿quién se ocupa de esto?» como «¿en qué estado está?» requieren mandar un mensaje en vez de consultar un registro.
- **El equipo arma el informe por separado.** Si tiene que reconstruir lo que pasó en la semana cada viernes, el registro operativo está incompleto.

Después preguntá cuál de esos problemas tiene la mayor consecuencia para el negocio. Copiar datos durante cinco minutos puede ser molesto sin causar daño. Si nadie es responsable de una aprobación, se pueden demorar los ingresos, la comunicación con el cliente y todos los pasos siguientes. Con el mapa podés distinguir entre el trabajo visible y lo que no podés saber con certeza.

En este flujo simulado, el problema principal no es la cantidad de solicitudes. Es que no hay un registro confiable por trabajo donde se pueda ver quién lo tiene a cargo, en qué estado está y qué hay que hacer después. Por eso el equipo tiene que insistir para conseguir aprobaciones, asignar trabajos de memoria, preguntar por el estado varias veces y armar informes a mano.

## El flujo de trabajo mejorado <!-- heading-id: the-improved-workflow -->

El cambio principal es usar un registro por trabajo. Todas las personas consultan y actualizan ese registro en vez de mantener su propia copia de la información.

<figure id="completed-worksheet-example" class="workflow-map">
  <picture>
    <source media="(max-width: 640px)" srcset="/blog/business-process-mapping-examples/workflow-changes-mobile.svg" />
    <img src="/blog/business-process-mapping-examples/workflow-changes.svg" width="1200" height="900" loading="lazy" decoding="async" alt="Cuatro cambios entre el flujo actual y el mejorado. Se usa el mismo formato para recibir solicitudes en distintos canales. El estado que antes se repartía entre la planilla, el chat y la memoria se guarda en un registro compartido por trabajo. Se asigna un responsable y un plazo a las aprobaciones pendientes en el chat. En vez de rehacer el informe semanal a mano, el equipo consulta una vista del estado de los trabajos." />
  </picture>
  <figcaption><strong>Qué cambia.</strong> Con el flujo mejorado, el equipo reduce cuatro fuentes de incertidumbre sin tener que automatizar todos los pasos.</figcaption>
</figure>

El flujo rediseñado se hace así:

1. **Conservá los canales actuales de solicitud al principio.** Pedí los mismos datos obligatorios con un formulario o a través de la persona de coordinación, sin importar por dónde llegó la solicitud.
2. **Validá los datos antes de seguir.** Si falta la dirección, el tipo de servicio, el horario o algún dato de contacto, se detecta al recibir la solicitud, antes de registrar un trabajo incompleto.
3. **Creá un registro por trabajo.** Guardá un ID que no cambie, quién es responsable ahora, el estado, la próxima acción, el plazo, el estado de aprobación y la evidencia del trabajo terminado.
4. **Mandá a aprobación solo las excepciones.** Los trabajos habituales siguen su curso. Los presupuestos por encima del monto acordado se mandan a una persona designada para aprobarlos, con un plazo visible y una alternativa si no puede hacerlo.
5. **Definí las reglas de asignación.** Las reglas por zona y habilidad pueden sugerir quién se ocupa. La persona que asigna el trabajo sigue a cargo de distribuir la carga y resolver casos poco comunes.
6. **Registrá el cierre en el registro compartido.** El equipo cambia el estado y adjunta la evidencia requerida al mismo registro.
7. **Consultá el informe a partir del estado operativo.** Ya podés ver qué trabajos están terminados, pendientes, fuera de plazo o sin asignar. Para el informe ya no hay que volver a preguntar por el estado de cada trabajo.

Podrías usar una herramienta de gestión del trabajo, una planilla estructurada con formularios y reglas, una base de datos simple o software a medida. En el mapa no elegís la herramienta, sino qué tiene que permitir hacer.

## Elegí el cambio útil más chico <!-- heading-id: choose-the-smallest-useful-change -->

En este ejemplo, el cambio útil más chico es un registro compartido por trabajo con cuatro campos obligatorios:

- quién es responsable ahora
- estado actual
- próxima acción
- cuándo vence esa acción

Acordá con el equipo qué estados se pueden usar y quién puede cambiarlos. Probá el flujo así durante un tiempo corto. El equipo va a detectar pronto qué estados faltan, dónde no se sabe quién es responsable y qué excepciones no quedaron en el diagrama.

Después, considerá agregar:

- validación al recibir solicitudes
- recordatorios de aprobación y un procedimiento para pedirle a alguien más que intervenga
- sugerencias de asignación
- avisos de estado para clientes
- informes automáticos

El orden importa porque al automatizar una regla podés aplicarla más rápido, pero eso no corrige una regla en la que el equipo todavía no está de acuerdo. En su [método para mapear procesos](https://www.ibm.com/think/topics/process-mapping), IBM recomienda probar los cambios con un grupo más chico antes de aplicarlos a más gente. Así, un negocio que está creciendo puede evitar comprar o construir algo a partir de una suposición que no probó.

## Una plantilla para mapear procesos <!-- heading-id: a-process-mapping-template-you-can-use -->

Armá el mapa en pantalla o en papel. También podés usar un pizarrón o un documento compartido. Antes de dibujar los pasos, empezá por estas preguntas:

<figure class="workflow-map">
  <picture>
    <source media="(max-width: 640px)" srcset="/blog/business-process-mapping-examples/meridian-worksheet-preview-mobile.webp" width="720" height="1280" />
    <img src="/blog/business-process-mapping-examples/meridian-worksheet-preview.webp" width="1400" height="900" loading="lazy" decoding="async" alt="Planilla completa para mapear el flujo simulado de Meridian Facility Services. Define los límites desde la solicitud hasta el informe, enumera las personas y herramientas, indica que el problema principal es no contar con un estado confiable y propone un registro compartido por trabajo como primer cambio útil." />
  </picture>
  <figcaption><strong>Ejemplo de una plantilla completa.</strong> En una sola página del ejemplo de Meridian podés ver los límites del flujo, las personas, las herramientas, el problema principal y el primer cambio útil.</figcaption>
</figure>

1. **Nombrá el flujo:** usá un nombre que indique el inicio y el resultado, como «de la solicitud del cliente al trabajo a domicilio terminado».
2. **Definí los límites:** anotá exactamente qué evento lo inicia y qué condición indica que terminó.
3. **Enumerá los roles:** incluí a todas las personas que crean, cambian, aprueban, reciben o informan sobre el trabajo.
4. **Enumerá las herramientas y los registros:** incluí las planillas no oficiales, las notas privadas, las casillas de correo y los canales de chat.
5. **Repasá un caso reciente:** preguntá qué pasó después, quién actuó, qué necesitó y dónde lo registró.
6. **Agregá las decisiones y las excepciones:** indicá qué pasa cuando faltan datos, una aprobación se demora o la persona responsable no está disponible.
7. **Marcá cada traspaso y cada espera:** anotá la persona responsable, el tiempo previsto y la evidencia de que se completó el traspaso.
8. **Identificá dónde consultar un estado confiable:** preguntá dónde buscaría una persona nueva del equipo quién es responsable ahora y qué hay que hacer después. Si no hay una respuesta confiable, anotalo.
9. **Elegí un cambio:** anotá el cambio más chico, qué suposición pone a prueba y qué vas a revisar después de la prueba.
10. **Validá el mapa:** revisalo con quienes hacen cada parte del trabajo en la práctica.

Mantené separados el mapa del proceso actual y el del proceso futuro. Si los mezclás, el equipo va a reemplazar «lo que pasa» por «lo que debería pasar» sin decirlo, y ya no se van a ver los motivos para cambiar el proceso.

## Cómo lo usé en un proyecto para un cliente <!-- heading-id: how-this-connects-to-real-consulting-work -->

Para el [Desarmadero Operations Prototype](/es/projects/desarmadero-operations-prototype/), en una llamada inicial me describieron cómo funcionaba un desarmadero de autos que usaba hojas de presupuestos en papel, WhatsApp, Excel y lo que cada persona recordaba. Con esa información armé un documento de requisitos de producto, una especificación funcional y un prototipo navegable con vistas por rol para ventas, liberación de pagos, asignación de desarme y búsquedas en el predio.

Con el prototipo, el cliente pudo revisar algo concreto antes de decidir el alcance del desarrollo completo.

Si querés experimentar la diferencia entre los dos flujos, [probá el proyecto One Tuesday](/es/projects/one-tuesday/). Podés ver cómo la empresa ficticia atiende la misma demanda con el flujo anterior y con el rediseñado.
