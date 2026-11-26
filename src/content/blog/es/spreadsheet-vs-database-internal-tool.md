---
title: "Planilla o base de datos: cuándo un negocio en crecimiento necesita una herramienta interna"
seoTitle: "Planilla o base de datos: cuándo necesitás una herramienta interna"
description: "Decidí si te conviene seguir con tu planilla, agregar controles, usar un CRM, un sistema de stock o una plataforma de gestión del trabajo, o desarrollar software a medida."
pubDate: "2026-07-28"
tags:
  - spreadsheet vs database
  - internal tools
  - business systems
  - operations
ctaVariant: general
---

Seguí con la planilla si una persona o un equipo chico puede mantenerla, el trabajo se puede organizar en una lista principal y los errores son fáciles de detectar. Agregá controles si los problemas principales son los datos cargados de forma inconsistente, la falta de responsables claros o los cambios por accidente. Pasá el trabajo a un programa que ya exista, como un CRM, un sistema de stock, una plataforma de gestión del trabajo o una aplicación para servicios a domicilio, cuando varias personas necesiten registros vinculados, permisos, historial y distintas vistas de los mismos datos. Desarrollá software a medida solo cuando el flujo sea lo bastante estable, específico y costoso como para que los productos que ya existen obliguen al equipo a trabajar de otra manera para compensar sus limitaciones.

La cantidad de filas no basta para decidir. Una planilla grande puede seguir sirviendo para hacer análisis, mientras que una planilla de 200 filas para seguir trabajos puede fallar si la aprobación real está en un chat, solo alguien se acuerda de quién está a cargo y no todos los roles deberían ver o cambiar los mismos campos.

## Una base de datos y una herramienta interna resuelven problemas distintos <!-- heading-id: a-database-and-an-internal-tool-solve-different-problems -->

Una planilla reúne datos, cálculos y una interfaz flexible en una sola grilla. Por eso podés empezar rápido, revisar los datos con facilidad y usarlos para hacer análisis.

Una base de datos organiza los registros y sus relaciones. Un cliente puede tener varios pedidos. Un pedido puede incluir varias piezas. Cada pieza puede corresponder a un vehículo del que se saca y a una ubicación del predio. Las bases de datos relacionales usan identificadores estables para conservar esas relaciones sin repetir los datos de clientes, pedidos o vehículos en varias filas. En [la introducción de Google Cloud a las bases de datos relacionales](https://cloud.google.com/learn/what-is-a-relational-database) se explican con claridad las tablas, las claves primarias y las relaciones.

Una herramienta interna reúne la interfaz y el flujo de trabajo que usa el equipo para trabajar con esos datos. Puede usar una base de datos, una planilla, la plataforma de un proveedor o varios sistemas conectados. La interfaz podría mostrarle a quien vende un formulario de venta, a quien supervisa una lista de aprobaciones pendientes y a quien trabaja fuera de la oficina solo las tareas que tiene asignadas. [La documentación de Power Apps de Microsoft](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-data-sources) distingue las dos partes: una aplicación puede leer y escribir registros mientras los datos siguen en Excel, una lista, SQL u otra fuente.

Entonces, la pregunta no es «¿planilla o aplicación?». Es esta: ¿dónde conviene guardar los registros y qué debería usar el equipo para hacer el trabajo?

<figure id="linked-records-example" class="workflow-map workflow-editorial">
  <picture>
    <source media="(max-width: 640px)" srcset="/blog/spreadsheet-vs-database-internal-tool/auto-yard-records-mobile.webp" width="768" height="1201" />
    <img src="/blog/spreadsheet-vs-database-internal-tool/auto-yard-records.webp" width="1536" height="1024" loading="eager" decoding="async" alt="Ilustración editorial del trabajo en un desarmadero. Un cliente y un vendedor hablan de un alternador en el mostrador, una persona verifica el pago en caja y un operario usa una tablet junto a los vehículos de los que se sacan las piezas. Las tarjetas amarillas del mismo pedido vinculan la venta, el pago, la pieza y el trabajo asignado." />
  </picture>
  <figcaption><strong>Qué mirar:</strong> una venta vincula a un cliente, un pago, una pieza, el vehículo del que se saca, una ubicación del predio y el operario asignado. La herramienta que elijas tiene que conservar esas relaciones y mostrarle a cada persona qué tiene que hacer después.</figcaption>
</figure>

## Cuatro opciones posibles <!-- heading-id: four-realistic-options -->

Por lo general, conviene hacer el cambio más chico que te permita trabajar de forma confiable. Tenés cuatro opciones. No hace falta pasar directamente de Excel o Google Sheets a software a medida.

<figure id="four-options" class="workflow-map">
  <picture>
    <source media="(max-width: 640px)" srcset="/blog/spreadsheet-vs-database-internal-tool/four-options-mobile.svg" />
    <img src="/blog/spreadsheet-vs-database-internal-tool/four-options.svg" width="1200" height="720" loading="lazy" decoding="async" alt="Guía para elegir entre cuatro opciones. Seguí con la planilla si un equipo chico puede manejar una lista principal. Definí un responsable y agregá validaciones, formularios y protección de la lógica si necesitás más control. Usá software de gestión que ya exista si necesitás registros vinculados, permisos, vistas e historial. Desarrollá software a medida si un flujo estable requiere acciones por rol, aprobaciones, manejo de excepciones o trabajo fuera de la oficina que los productos existentes no pueden cubrir a un costo razonable." />
  </picture>
  <figcaption><strong>Cómo decidir.</strong> Cambiá solo si con la opción actual no podés cubrir las necesidades de coordinación y control del flujo o manejar las consecuencias del trabajo. El volumen de datos es uno de los factores, pero no determina cuándo cambiar.</figcaption>
</figure>

### 1. Seguí con la planilla <!-- heading-id: 1-keep-the-spreadsheet -->

Seguí usándola si una persona o un equipo chico se ocupa del archivo, el trabajo se puede organizar en una lista principal y la flexibilidad importa más que el control estricto. Suele ser una buena opción para proyecciones, análisis puntuales, seguimiento temporal de proyectos y registros de bajo riesgo.

También podés usar una planilla para entender qué necesita el flujo. El equipo puede agregar un campo, probar un estado o cambiar un cálculo sin esperar una nueva versión del software. Si reemplazás esa flexibilidad demasiado pronto, convertís un proceso que todavía cambia en una aplicación costosa.

El límite aparece cuando la grilla deja de registrar el estado completo del trabajo. Si alguien que supervisa tiene que leer la fila, revisar una conversación en un chat, preguntar quién dio la aprobación y acordarse de qué excepción se aplica, la planilla es solo una parte del sistema.

### 2. Agregá controles a la planilla <!-- heading-id: 2-add-controls-to-the-spreadsheet -->

Agregá controles si el flujo todavía se puede organizar en una grilla compartida, pero el equipo puede cargar datos incompletos, cambiar fórmulas o usar nombres distintos para el mismo estado. Asignale el archivo a una sola persona responsable, definí los estados permitidos, hacé obligatorios los campos necesarios para el paso siguiente, protegé las fórmulas, separá la carga de datos de los informes y usá un formulario cuando la edición libre provoque errores.

Las planillas actuales ofrecen más controles de lo que se suele pensar. En Excel podés restringir lo que se ingresa con [reglas de validación de datos](https://support.microsoft.com/en-us/excel/get-started/apply-data-validation-to-cells). Microsoft 365 permite [editar en conjunto, revisar cambios y consultar el historial de versiones](https://support.microsoft.com/en-US/Excel/get-started/collaborate-on-excel-workbooks-at-the-same-time-with-co-authoring). Con esas funciones podés evitar más problemas de lo que parece sin cambiar de plataforma.

Los límites también importan. Proteger celdas no equivale a usar una aplicación con funciones específicas para cada rol. Además, en algunos casos es posible eludir la validación al pegar datos, rellenar celdas, usar fórmulas o ejecutar macros. Con estos controles podés hacer más confiable una planilla adecuada para el trabajo, pero no podés gestionar cualquier operación en una grilla.

### 3. Pasá el trabajo a un programa que ya exista <!-- heading-id: 3-move-the-work-into-existing-software -->

Elegí un programa que ya exista si el negocio necesita registros vinculados y varias personas necesitan distintas vistas de los mismos datos. Podés usar una base de datos sin código, un sistema de gestión de clientes, un sistema de stock, una plataforma de gestión del trabajo, una aplicación para servicios a domicilio u otro producto hecho para esa tarea.

Esta opción sirve cuando:

- los clientes, trabajos, pedidos, piezas, ubicaciones o facturas tienen que mantener relaciones estables
- varias personas editan a la vez y necesitan un solo registro actualizado
- necesitás permisos para controlar quién puede ver o cambiar ciertos datos
- necesitás formularios y campos obligatorios para impedir que avance un trabajo incompleto
- el equipo necesita historial de cambios, vistas filtradas, recordatorios o automatizaciones básicas
- necesitás generar los informes a partir de los registros del trabajo en vez de volver a reunir los datos por separado cada viernes

Lo que tenés que evaluar es cuánto se ajusta el producto al trabajo. El producto tiene su propia terminología, estados, permisos e interfaz. Si el flujo es mayormente estándar, adoptar esas convenciones suele costar menos que desarrollar software. Si el equipo tiene que exportar datos, registrar excepciones en el chat o armar planillas paralelas porque no puede registrar en el producto cómo se hace el trabajo, el precio de la suscripción no refleja todo el costo operativo.

### 4. Desarrollá software a medida para el flujo <!-- heading-id: 4-build-custom-software-for-the-workflow -->

Desarrollá software cuando el flujo sea lo bastante estable como para especificarlo, lo bastante importante como para mantenerlo y lo bastante particular como para que los productos que probaste no cubran una necesidad que cuesta atender. Es más fácil justificar el desarrollo a medida cuando lo que aporta valor es la interfaz y lo que se puede hacer con los registros:

- cada rol necesita una acción siguiente distinta, no otra vista de la misma tabla
- no se puede avanzar hasta que se complete una aprobación, un pago o una verificación
- las excepciones necesitan pasos y responsables claros, y una forma de derivarlas
- el personal que trabaja fuera de la oficina necesita una interfaz móvil rápida con pocas acciones
- el trabajo requiere conectar varios sistemas que no se pueden reemplazar por un solo producto
- los errores, las demoras, la carga duplicada de datos o la coordinación manual generan costos o riesgos recurrentes

Desarrollar software a medida implica otras responsabilidades: analizar las necesidades, diseñar, desarrollar, ocuparse de la seguridad, migrar los datos, capacitar al equipo, mantener el software y asignar un responsable de los cambios futuros. Una molestia recurrente no alcanza. El negocio debería poder identificar el flujo, la limitación, las personas afectadas, la consecuencia y por qué no pudo resolver el problema con configuración o con un producto que ya existe.

## Cuándo deja de alcanzar una planilla <!-- heading-id: when-has-a-spreadsheet-stopped-being-enough -->

Una planilla deja de alcanzar cuando el equipo no puede confiar en el estado actual del trabajo sin consultar a otra persona o a otro sistema. Las señales más claras aparecen en el trabajo cotidiano:

- **Responsabilidad:** nadie sabe quién está a cargo ahora ni a quién le toca actuar después.
- **Versión:** hay copias, exportaciones y pestañas privadas con respuestas distintas que parecen válidas.
- **Relaciones:** el equipo repite datos de clientes, pedidos, productos, activos o ubicaciones y tiene que mantenerlos sincronizados a mano.
- **Permisos:** cada rol debería ver o modificar datos distintos, pero muchas personas tienen acceso al archivo.
- **Validación:** los campos obligatorios y los estados permitidos dependen de que el equipo se acuerde de las reglas.
- **Historial:** un cambio en una celda no indica quién lo aprobó, por qué se hizo ni cuál era el estado anterior.
- **Excepciones:** los casos poco comunes se manejan fuera del proceso principal y solo quedan en chats, correos o en la memoria de alguien.
- **Aprobaciones:** el trabajo puede avanzar antes de que la persona indicada apruebe el pago, el precio, el riesgo o el alcance.
- **Uso fuera de la oficina:** el personal que usa el celular necesita hacer una acción y completar unos pocos campos, no manejar una grilla ancha.
- **Informes:** para armar el informe semanal hay que volver a copiar y revisar datos y preguntar en qué estado está el trabajo.
- **Dependencia:** una persona con experiencia tiene que corregir el flujo porque es la única que conoce las reglas que no quedaron escritas.
- **Consecuencia:** si falta un registro o tiene un error, se demoran los ingresos, la comunicación con clientes, el cumplimiento de requisitos, las tareas de seguridad o el trabajo posterior.

Una señal puede justificar un cambio si la consecuencia es importante. Varias señales leves también pueden justificarlo en conjunto. La pregunta es si con la herramienta actual el equipo puede seguir y verificar el flujo acordado con más facilidad o si tiene que compensar sus limitaciones todos los días.

## Un ejemplo del prototipo de operaciones para un desarmadero <!-- heading-id: a-worked-decision-from-the-desarmadero-operations-prototype -->

El [Desarmadero Operations Prototype](/es/projects/desarmadero-operations-prototype/) empezó con una llamada real para conocer el trabajo de un desarmadero. Para saber cómo funcionaba el negocio, había que consultar presupuestos en papel, WhatsApp, Excel y lo que recordaba el equipo. Con lo que aprendí en esa llamada, preparé un documento de requisitos del producto, una especificación funcional y un prototipo navegable con una interfaz para cada rol. El prototipo es una muestra de trabajo para validar el flujo propuesto. No se puso en uso como sistema de gestión de la operación ni demuestra resultados medidos en el negocio.

Estos eran los datos importantes sobre el trabajo:

- se podía hacer una venta en el mostrador antes de sacar la pieza del vehículo
- el equipo no podía empezar el trabajo de desarme hasta que se registrara el pago
- el pedido tenía que vincular al cliente, el vehículo, las piezas y el estado del pago
- una persona a cargo asignaba las tareas de desarme
- el operario que desarmaba los vehículos necesitaba una vista móvil que solo mostrara el trabajo que tenía asignado
- el equipo necesitaba encontrar los vehículos en un predio con 301 posiciones
- administración, ventas, caja, supervisión de desarme y los operarios de desarme tenían responsabilidades distintas

Para entender la situación, no servía contar filas. El problema era mantener la coherencia entre los registros vinculados y las acciones de cada rol desde la venta hasta el pago, la asignación, el retiro de la pieza y el cierre del trabajo.

### Cómo se aplican las cuatro opciones <!-- heading-id: how-the-four-options-apply -->

**Seguir con la planilla:** Excel podía seguir sirviendo para hacer análisis, importar datos o llevar un registro bien definido. No alcanzaba para representar todo el flujo de trabajo descrito en la llamada porque seguía habiendo datos esenciales sobre el estado del trabajo en papeles, mensajes y en la memoria del equipo.

**Agregar controles a la planilla:** con campos obligatorios, nombres para los estados, una sola persona responsable y una forma estructurada de cargar datos, se podían probar partes del modelo a bajo costo. Sería un primer cambio razonable si al equipo todavía le faltaba acordar la terminología o identificar excepciones.

**Usar un programa que ya exista:** un producto de gestión de stock, gestión del trabajo o servicios a domicilio sería la opción indicada si permitiera registrar clientes, ventas, pagos, piezas, los vehículos de los que se sacan, ubicaciones, asignaciones y permisos por rol sin obligar al equipo a llevar un registro paralelo. Esa comparación se tiene que hacer antes de desarrollar el sistema que se va a usar en el negocio.

**Desarrollar software a medida:** con el prototipo probé si las pantallas para cada rol, el requisito de pago para avanzar, un mapa del predio con buscador y la asignación de tareas de desarme desde el celular se ajustaban al trabajo real. Valía la pena hacer el prototipo para definir el alcance con algo concreto. No demostró que el software a medida fuera la única opción aceptable para usar en el negocio.

Esa es la utilidad práctica de un prototipo: el equipo puede revisar cómo funcionaría lo que hoy da por supuesto antes de comprometerse con una inversión grande.

## Diez preguntas para elegir <!-- heading-id: spreadsheet-existing-software-or-custom-software-use-this-decision-aid -->

Empezá por [hacer un mapa de un flujo de trabajo recurrente](/es/blog/business-process-mapping-examples/) con algo claro que lo inicie y un resultado concreto. Después anotá quién participa, qué herramientas usan, cuándo pasa el trabajo de una persona a otra, dónde esperan, qué decisiones toman y cuál sería el primer cambio. No elijas el software de antemano.

Después, respondé estas preguntas con un ejemplo reciente del trabajo:

1. **¿Dónde podés consultar el estado actual y confiar en que es correcto?** ¿Una persona nueva en el equipo puede encontrarlo sin preguntarle a nadie?
2. **¿Quién está a cargo de la próxima acción?** ¿Queda registrado quién es o el equipo lo deduce por costumbre?
3. **¿Qué registros tienen que seguir vinculados?** Anotá los clientes, trabajos, pedidos, productos, activos, pagos, ubicaciones o aprobaciones que intervienen.
4. **¿Quién puede ver y cambiar cada parte?** Anotá dónde dar acceso a todo el archivo es demasiado y dónde no alcanza con dar acceso de lectura.
5. **¿Qué requisitos se tienen que cumplir para que el trabajo avance?** Enumerá los campos obligatorios, los estados permitidos, las reglas de aprobación y la evidencia necesaria.
6. **¿Qué excepciones se manejan fuera del sistema principal?** Buscá conversaciones en chats, búsquedas en el correo, notas privadas y cosas que el equipo solo recuerda de memoria.
7. **¿Dónde se hace el trabajo?** Una persona que trabaja fuera de la oficina con el celular necesita una interfaz distinta de la que usa un analista en un escritorio.
8. **¿Cuánto cuesta un error o una demora?** Tené en cuenta la confianza de los clientes, el dinero, el trabajo que hay que rehacer, el tiempo que lleva armar informes, el cumplimiento de requisitos y la espera para quienes siguen con el trabajo.
9. **¿Qué tan estable es el flujo?** Si el proceso cambia todas las semanas, primero hay que entenderlo mejor y probar ajustes de configuración antes de escribir código a medida.
10. **¿Qué productos existentes probaste con estos requisitos?** Registrá qué requisito exacto no cubren en vez de dar por hecho que ningún producto de ese tipo sirve.

Usá las respuestas así:

- **Seguí con la planilla** si el equipo confía en el estado registrado, sabe quién está a cargo, maneja los datos en una sola lista en su mayor parte, puede seguir dando acceso amplio y detecta errores a bajo costo.
- **Agregá controles a la planilla** si lo que más falta es hacer obligatorios algunos campos, unificar los estados, controlar la carga de datos, evitar cambios por accidente o acordar una sola vista.
- **Elegí software de gestión que ya exista** si en distintas partes del flujo el equipo necesita registros vinculados, trabajar al mismo tiempo, asignar permisos, consultar el historial, usar vistas por rol o generar informes confiables.
- **Considerá el software a medida** si el flujo es estable, la consecuencia recurrente es importante y los productos que probaste no cubren las acciones, aprobaciones, excepciones, integraciones o formas de trabajar fuera de la oficina que necesitás a un costo total razonable.

También podés combinar las opciones. Podés guardar los registros en una base de datos, mostrarle al equipo qué hacer cada día en una herramienta interna y seguir usando una planilla para análisis puntuales. Es más útil definir bien para qué sirve cada herramienta que usar una sola aplicación para todos los trabajos.

## Elegí el cambio más chico que permita volver a confiar en el flujo <!-- heading-id: choose-the-smallest-change-that-restores-trust -->

Empezá por lo que no está funcionando. Si el equipo no puede confiar en el estado registrado, definí quién está a cargo, qué estados se permiten, qué acción sigue y cuándo hay que hacerla antes de cambiar de plataforma. Si los datos de registros relacionados dejan de coincidir, probá si vincularlos resuelve el problema. Si cada rol necesita acciones distintas, armá un prototipo de la interfaz. Si podés configurar un producto estándar para cubrir el flujo, usalo.

Desarrollá software a medida solo cuando el equipo pueda explicar qué parte del trabajo tiene que ser más fácil, segura o barata de hacer con ese software. Así decidís según lo que necesita la operación, no por lo atractivo que parezca usar software nuevo.
