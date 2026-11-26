---
title: "¿Qué es la gestión de procesos de negocio? Un ejemplo de alta de clientes de SaaS"
description: "Seguí un ejemplo de alta de clientes de SaaS por las seis etapas del ciclo de BPM, desde identificar demoras hasta probar un proceso mejor."
pubDate: "2026-10-08"
tags: ["business process management", "SaaS", "operations"]
---

¿Alguna vez esperaste dos días hábiles enteros para que alguien configurara una herramienta, aunque configurarla llevara menos de dos horas?

Cuando nadie verifica el traspaso del trabajo entre áreas, se acumulan demoras que no se ven. La <button type="button" class="definition-term" data-definition="Disciplina que consiste en identificar, descubrir, analizar, rediseñar, implementar y monitorear procesos de negocio para mejorar la forma en que una organización les entrega resultados útiles a sus clientes.">gestión de procesos de negocio (BPM)</button> consiste en mapear, analizar y cambiar estas secuencias de principio a fin para que el cliente reciba un resultado útil de manera constante.

Para ver cómo se aplica BPM, veamos un caso hipotético de una empresa de SaaS de gestión de proyectos que corrige su proceso de alta de clientes. El alta es el <button type="button" class="definition-term" data-definition="Conjunto de eventos, actividades y decisiones relacionados en los que participan personas o sistemas y elementos físicos o de información, y que en conjunto producen un resultado útil para al menos un cliente.">proceso de negocio</button> que se gestiona en este caso. BPM es el método que se usa para mejorarlo.

<pre class="bpm-diagram">flowchart TD
    ID[&quot;1. Identificación del proceso&quot;] --&gt; D[&quot;2. Descubrimiento del proceso&quot;]
    D --&gt; A[&quot;3. Análisis del proceso&quot;]
    A &lt;--&gt; R[&quot;4. Rediseño del proceso&quot;]
    R --&gt; I[&quot;5. Implementación del proceso&quot;]
    I --&gt; M[&quot;6. Monitoreo del proceso&quot;]
    M --&gt; D</pre>

## 1. Identificación del proceso: elegí el proceso y a la persona responsable <!-- heading-id: 1-process-identification-selecting-the-workflow-and-assigning-ownership -->

Para mejorar el <button type="button" class="definition-term" data-definition="En qué medida un proceso cumple sus objetivos, según criterios como el tiempo, el costo, la calidad y la flexibilidad.">desempeño</button> operativo, primero se identifica el proceso: se elige uno dentro de la <button type="button" class="definition-term" data-definition="Mapa de los procesos de negocio de una organización y sus relaciones, que se usa para definir el alcance y priorizar mejoras.">arquitectura de procesos</button> de la empresa y se definen sus límites operativos.

En la empresa hipotética, los clientes nuevos mandan planillas con 50 o más tareas de proyecto para que el equipo las importe a su espacio de trabajo. Cuando se acumularon las quejas por demoras en la configuración, la empresa decidió investigar el alta de clientes. El alta ocurre justo entre Ventas, que cierra el trato, y Soporte continuo, que asiste al cliente a largo plazo.

Al principio, la empresa supuso que el alta terminaba cuando el especialista técnico importaba la planilla. Si daba el proceso por terminado ahí, quedaba un caso sin revisar: si las tareas quedaban asignadas a nombres ambiguos, la importación estaba completa en términos técnicos, pero el cliente todavía no podía usar el espacio de trabajo.

<figure>
  <img src="/blog/bpm-lifecycle-saas-onboarding/onboarding-boundaries.png" width="1536" height="1024" loading="lazy" alt="El alta empieza con una solicitud y una planilla, y termina cuando el cliente prueba la configuración con éxito y confirma que puede usar el proyecto." />
</figure>

Para gestionar el flujo de trabajo, el equipo estableció tres reglas básicas:

- Alcance definido: el alta empieza cuando un cliente manda una solicitud de configuración y una planilla. Termina solo cuando el cliente confirma que puede actualizar una tarea en un proyecto que funciona.

- Designación de un <button type="button" class="definition-term" data-definition="La persona que responde por el desempeño y la mejora continua de un proceso entero, incluidos los traspasos entre áreas.">responsable del proceso</button>: como el alta pasa por dos áreas, Éxito del cliente e Implementación técnica, la empresa nombró responsable del proceso a la persona a cargo de Éxito del cliente. Si nadie responde por todo el proceso, cada área mejora sus propias tareas chicas, pero nadie se hace cargo de la espera total del cliente.

- Métricas objetivo: el equipo fijó un objetivo principal de desempeño. Quería bajar el <button type="button" class="definition-term" data-definition="Tiempo que pasa desde el inicio de una instancia del proceso hasta que termina, incluidas las actividades y las esperas. En este ejemplo, se cuentan las horas hábiles acordadas.">tiempo de ciclo</button> total a un promedio de 10 horas hábiles o menos y mantener baja la cantidad de errores de configuración posteriores a la importación.

## 2. Descubrimiento del proceso: mapeá cómo se hace el trabajo en la práctica <!-- heading-id: 2-process-discovery-mapping-how-work-really-happens -->

Para entender cómo se trabaja en la práctica durante el <button type="button" class="definition-term" data-definition="Reunir evidencia sobre cómo funciona un proceso hoy y documentarla en un modelo del proceso actual.">descubrimiento del proceso</button>, el <button type="button" class="definition-term" data-definition="Persona que investiga cómo funciona un proceso, lo representa en un modelo, analiza problemas y ayuda a diseñar y evaluar mejoras con quienes participan.">analista de procesos</button> entrevistó al equipo, revisó los registros de auditoría y observó los traspasos entre Éxito del cliente y los especialistas de Implementación para armar un <button type="button" class="definition-term" data-definition="Representación de cómo funciona un proceso en la práctica hoy, incluidas las actividades, las decisiones, los traspasos y las excepciones.">modelo fiel del proceso actual</button>.

Durante el descubrimiento, el analista encontró una secuencia que se repetía cuando el trabajo pasaba de un área a la otra:

<pre class="bpm-diagram">flowchart TD
    A[&quot;El cliente manda la solicitud y la planilla&quot;] --&gt; B[&quot;Éxito del cliente reenvía los datos&quot;]
    B --&gt;|Espera en la cola del especialista| C[&quot;El especialista revisa la información&quot;]
    C --&gt; D{&quot;¿Alcanza la información?&quot;}
    D --&gt;|No| E[&quot;Éxito del cliente pide aclaraciones&quot;]
    E --&gt; F[&quot;El cliente aclara los datos&quot;]
    F --&gt;|Vuelve a la cola del especialista| C
    D --&gt;|Sí| G[&quot;El especialista configura el proyecto e importa las tareas&quot;]
    G --&gt; H[&quot;El cliente revisa la configuración y recibe instrucciones&quot;]
    H --&gt; I[&quot;Se actualiza una tarea y se confirma el alta&quot;]</pre>

BPM usa el <button type="button" class="definition-term" data-definition="Analizar cómo la interacción entre las partes de un sistema influye en el comportamiento y los resultados del sistema completo.">pensamiento sistémico</button>: examina cómo interactúan las áreas para entender el desempeño del proceso completo. El equipo de Éxito del cliente reenviaba las planillas sin verificar si los nombres de las personas asignadas a las tareas, como «Alex», correspondían a cuentas de usuario confirmadas. El especialista de Implementación solo encontraba esos datos ambiguos después de que la solicitud había esperado en su cola. Para completar los datos, había que mandarle una consulta al cliente. Una vez que respondía, la solicitud volvía al final de la cola del especialista y esperaba otra vez.

## 3. Análisis del proceso: medí el tiempo perdido <!-- heading-id: 3-process-analysis-quantifying-the-waste -->

Con el modelo del proceso actual ya armado, el analista evaluó datos históricos de desempeño durante el <button type="button" class="definition-term" data-definition="Examinar un proceso para identificar y priorizar problemas, investigar sus causas y evaluar sus efectos con evidencia cualitativa y cuantitativa.">análisis del proceso</button> para determinar qué demoras justificaban un cambio en el flujo de trabajo.

En una auditoría de 20 solicitudes de alta típicas, el analista vio una gran diferencia entre el tiempo de trabajo activo y el tiempo de espera:

<figure class="not-prose my-[2em] font-sans" aria-label="Tiempo de ciclo promedio ilustrativo: 16 horas hábiles, con 2 horas de actividad y 14 horas de espera.">
  <div class="mb-4 text-[1.2rem] text-[#152235]">16 horas hábiles por solicitud</div>
  <div class="flex h-8 overflow-hidden rounded-[5px]" aria-hidden="true"><span class="w-[12.5%] bg-[#274c77]"></span><span class="w-[87.5%] bg-[#f8d978]"></span></div>
  <div class="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-base text-[#152235]"><span class="inline-flex items-center gap-2"><i class="size-3 rounded-[2px] bg-[#274c77]" aria-hidden="true"></i>2 horas de actividad</span><span class="inline-flex items-center gap-2"><i class="size-3 rounded-[2px] bg-[#f8d978]" aria-hidden="true"></i>14 horas de espera</span></div>
  <div class="mt-7 text-[1rem] text-[#274c77]">Cómo se reparten las 14 horas de espera</div>
  <dl class="mt-3 mb-0 text-base leading-[1.5]">
    <div class="grid grid-cols-[minmax(0,1fr)_auto] gap-4 py-[0.45rem]"><dt>Espera hasta la primera revisión del especialista</dt><dd class="ps-[1.625em] text-[#274c77] tabular-nums">2 horas</dd></div>
    <div class="grid grid-cols-[minmax(0,1fr)_auto] gap-4 py-[0.45rem]"><dt>Demora hasta que Éxito del cliente transmite la pregunta</dt><dd class="ps-[1.625em] text-[#274c77] tabular-nums">3 horas</dd></div>
    <div class="grid grid-cols-[minmax(0,1fr)_auto] gap-4 py-[0.45rem]"><dt>Espera de la respuesta del cliente</dt><dd class="ps-[1.625em] text-[#274c77] tabular-nums">3 horas</dd></div>
    <div class="grid grid-cols-[minmax(0,1fr)_auto] gap-4 py-[0.45rem]"><dt>Segunda espera en la cola del especialista</dt><dd class="ps-[1.625em] text-[#274c77] tabular-nums">6 horas</dd></div>
  </dl>
  <figcaption class="mt-3 font-sans text-base leading-[1.55] text-ink-muted">Promedios ilustrativos de 20 solicitudes. El tiempo de actividad incluye el trabajo del personal y del cliente.</figcaption>
</figure>

A partir de los datos, el analista llegó a dos conclusiones clave:

1. El problema principal es la espera: de un ciclo de 16 horas, 14 horas (87,5 %) transcurrían en colas o cadenas de correos sin que nadie trabajara en la solicitud.

2. Transmitir preguntas y volver a poner solicitudes en cola provoca demoras: transmitir las preguntas (3 horas) y esperar por segunda vez en la cola (6 horas) sumaban 9 de las 14 horas de espera.

Acelerar la importación de datos en sí casi no cambiaría el resultado. La gran mayoría de la demora ocurría antes de que empezara la configuración técnica. La prioridad era clara: evitar la segunda espera en la cola del especialista.

## 4. Rediseño del proceso: diseñá el proceso nuevo <!-- heading-id: 4-process-redesign-designing-the-to-be-solution -->

Durante el <button type="button" class="definition-term" data-definition="Desarrollar y evaluar cambios en un proceso para resolver los problemas detectados y cumplir los objetivos de mejora.">rediseño del proceso</button>, el equipo propuso mejoras y las documentó en un <button type="button" class="definition-term" data-definition="Representación de cómo debería funcionar un proceso después de aplicar las mejoras propuestas, incluidos los cambios en actividades, responsabilidades y traspasos.">modelo del proceso propuesto</button>.

En vez de completar datos cuando las solicitudes ya estaban en la cola del especialista, el equipo propuso verificar la información en un paso anterior. Éxito del cliente iba a hacer una revisión más amplia con una lista de verificación estándar antes de reenviar el archivo.

Como cada planilla tiene más de 50 tareas asignadas a personas de todo el equipo, el personal tiene que comprobar qué cuentas corresponden a nombres ambiguos como «Alex» usando los correos de invitación y los roles del espacio de trabajo. Éxito del cliente dedica unos 75 minutos a esta revisión. El especialista ahorra 15 minutos al dejar de repetir revisiones, así que el equipo estima un aumento neto de 60 minutos de trabajo del personal por solicitud.

<pre class="bpm-diagram">flowchart TD
    A[&quot;El cliente manda la solicitud y la planilla&quot;] --&gt; B[&quot;Éxito del cliente verifica los datos con una lista&quot;]
    B --&gt; C{&quot;¿Alcanza la información?&quot;}
    C --&gt;|No| D[&quot;Éxito del cliente aclara los datos con el cliente&quot;]
    D --&gt; B
    C --&gt;|Sí| E[&quot;Éxito del cliente reenvía los datos revisados&quot;]
    E --&gt;|Espera en la cola del especialista| F[&quot;El especialista configura el proyecto e importa las tareas&quot;]
    F --&gt; G[&quot;El cliente revisa la configuración y recibe instrucciones&quot;]
    G --&gt; H[&quot;Se actualiza una tarea y se confirma el alta&quot;]</pre>

### Comparación del proceso actual con el propuesto <!-- heading-id: evaluating-the-tradeoffs-as-is-vs-to-be -->

Al evaluar cada opción de rediseño, hay que considerar qué se gana y qué se pierde en velocidad, costo, calidad y esfuerzo.

| Métrica por solicitud | Proceso actual | Proceso propuesto | Impacto neto |
| --- | --- | --- | --- |
| Tiempo de trabajo activo | 2 horas | 3 horas | Aumento neto estimado de 1 hora por la verificación previa |
| Tiempo total de espera | 14 horas | 5 horas | 9 horas menos al eliminar el traspaso de preguntas y la segunda espera |
| Tiempo de ciclo total | 16 horas hábiles | 8 horas hábiles | Reducción estimada del 50 % en el tiempo total |

Éxito del cliente dedica más tiempo a verificar las cuentas. El objetivo de eliminar las 9 horas de traspaso de preguntas y de segunda espera es reducir a la mitad el tiempo de ciclo total estimado.

## 5. Implementación del proceso: cambiá cómo trabajan las personas y qué hacen las herramientas <!-- heading-id: 5-process-implementation-executing-organizational--technical-change -->

Un modelo en papel no cambia los resultados del negocio por sí solo. Durante la <button type="button" class="definition-term" data-definition="Poner en uso un proceso rediseñado mediante cambios en las responsabilidades, las prácticas y la tecnología de apoyo.">implementación del proceso</button>, el equipo aplica el diseño propuesto al trabajo diario de dos maneras:

1. <button type="button" class="definition-term" data-definition="Preparar y acompañar a las personas para que adopten nuevas responsabilidades, prácticas y formas de trabajar.">Gestión del cambio organizacional</button>: los cambios en el proceso alteran las rutinas establecidas. La persona responsable del proceso tiene que capacitar a Éxito del cliente en el uso de la lista nueva, explicar por qué importa verificar antes y acompañar al personal durante el cambio.

2. <button type="button" class="definition-term" data-definition="Usar software para ejecutar o coordinar actividades de un proceso, como validar información, asignar tareas o enviar notificaciones.">Automatización del proceso</button> e infraestructura: actualizar las herramientas para que se pueda seguir el flujo nuevo. La empresa agregó campos obligatorios de la lista de verificación en el espacio de trabajo compartido. Así, el personal no podía pasar una tarea de configuración al especialista hasta confirmar que todas las cuentas correspondían a las personas correctas.

> Sobre la automatización: si automatizás una secuencia con fallas, solo hacés más rápido un proceso que desperdicia tiempo. El equipo corrigió primero el orden del traspaso y después configuró el software para exigir que se cumplieran las reglas nuevas.

## 6. Monitoreo del proceso: comprobá que el proceso nuevo funcione <!-- heading-id: 6-process-monitoring-tracking-results-and-testing-conformance -->

Cuando el equipo empieza a usar el flujo rediseñado, comienza el <button type="button" class="definition-term" data-definition="Reunir y analizar datos de un proceso en uso para evaluar su desempeño, comprobar si se sigue el procedimiento e identificar otras mejoras necesarias.">monitoreo del proceso</button>. La persona responsable reúne datos operativos para evaluar dos aspectos clave:

- <button type="button" class="definition-term" data-definition="En qué medida un proceso, tal como se ejecuta, sigue el diseño previsto o el procedimiento acordado.">Cumplimiento del procedimiento</button>: ¿el equipo sigue el procedimiento acordado en la práctica?

- Desempeño: ¿el proceso alcanza los objetivos de velocidad, esfuerzo y calidad?

### Resultados de la prueba piloto con 20 solicitudes <!-- heading-id: pilot-results-across-20-requests -->

La empresa probó el proceso rediseñado con un grupo piloto de 20 solicitudes de alta comparables:

| Métrica de desempeño | Antes del cambio | Resultados de la prueba | Resultado operativo |
| --- | --- | --- | --- |
| Tiempo de ciclo promedio | 16 horas hábiles | 9 horas hábiles | Alcanzaron el objetivo de 10 horas en promedio. Completaron 18 de las 20 solicitudes en menos de 10 horas. |
| Tiempo total de espera | 14 horas hábiles | 6 horas hábiles | Eliminaron la segunda espera en la cola. |
| Configuraciones que necesitaron correcciones | 2 de 20 | 1 de 20 | Hubo menos correcciones de configuración en este grupo piloto. |
| Tiempo de trabajo del personal | 90 minutos | 150 minutos | El trabajo remunerado del personal aumentó 60 minutos netos. |

Diferencia entre el tiempo de trabajo del personal y el tiempo de trabajo activo: el «tiempo de trabajo del personal» (150 minutos) mide el tiempo remunerado de los empleados. El «tiempo de trabajo activo» total (3 horas) incluye 30 minutos adicionales de verificación independiente por parte del cliente. Por ejemplo, el cliente comprueba que puede entrar al espacio de trabajo y prueba actualizar tareas.

### ¿Valió la pena el cambio? <!-- heading-id: evaluating-the-business-tradeoff -->

En los registros de auditoría se confirmó que el personal completó la lista de verificación del software para 20 de las 20 solicitudes del piloto. En una revisión puntual de 5 configuraciones se comprobó que las cuentas correspondían a las personas correctas.

En la prueba quedó clara la diferencia entre el beneficio y el costo operativo: el tiempo de ciclo promedio bajó de 16 a 9 horas, pero Éxito del cliente tuvo que dedicar 75 minutos adicionales a revisar los datos. En total, el trabajo de la empresa aumentó 60 minutos netos por configuración.

Como Éxito del cliente tenía tiempo para hacer los 75 minutos adicionales de verificación sin contratar más personal, la persona responsable decidió que reducir el tiempo de ciclo promedio de dieciséis a nueve horas justificaba el trabajo extra. Mantuvo en uso el proceso rediseñado y empezó otra vuelta del <button type="button" class="definition-term" data-definition="Secuencia que se repite para gestionar y mejorar procesos de negocio: identificación, descubrimiento, análisis, rediseño, implementación y monitoreo.">ciclo de BPM</button> para simplificar la lista de verificación. Así se ve que BPM es un ciclo de mejora continua.

## Revisá tus propios procesos <!-- heading-id: look-at-your-own-processes -->

Para aplicar el ciclo de BPM a un flujo de trabajo de tu organización, empezá con tres preguntas simples:

1. Límites: ¿dónde empieza en la práctica la solicitud del cliente y qué señal final confirma que recibió un resultado que puede usar?

2. Traspasos: ¿en qué traspaso entre equipos quedan solicitudes sin atender o vuelven a un paso anterior para pedir aclaraciones?

3. Costos y beneficios: ¿qué cambio podría reducir una demora en tu flujo de trabajo y qué esfuerzo o riesgo adicional implicaría?

## Referencia del ciclo de BPM <!-- heading-id: bpm-lifecycle-reference -->

Este ejemplo sigue el ciclo de seis etapas descrito en [Fundamentals of Business Process Management (en inglés)](https://doi.org/10.1007/978-3-662-56509-4_1).

| Etapa | Información principal de partida | Resultados principales | Objetivo |
| --- | --- | --- | --- |
| 1. Identificación | Objetivos estratégicos y problemas operativos | Arquitectura de procesos, límites, responsable y métricas | Alcance, selección y supervisión |
| 2. Descubrimiento | Entrevistas con las personas involucradas, registros y observación | Modelo del proceso actual | Mapear cómo se trabaja hoy |
| 3. Análisis | Modelo actual y datos de desempeño | Lista de problemas por prioridad y mediciones de demoras | Identificar las causas de las pérdidas |
| 4. Rediseño | Lista de problemas y objetivos de desempeño | Modelo del proceso propuesto | Diseñar flujos de trabajo más simples |
| 5. Implementación | Modelo propuesto y reglas operativas | Proceso listo para usar, personal capacitado y herramientas configuradas | Gestión del cambio y configuración técnica |
| 6. Monitoreo | Datos de ejecución y registros de auditoría | Resultados de desempeño y cumplimiento | Evaluación y mejoras continuas |
