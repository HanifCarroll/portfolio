---
title: "Cómo trabajo"
description: "Uso agentes de programación desde hace unos tres años y en el último año escribieron casi todo mi código. Eso cambió mi forma de trabajar. Paso menos tiempo escribiendo código y más tiempo entendiendo el problema, decidiendo qué conviene desarrollar y comprobando que funcione."
---

Hace poco le pedí a un agente que leyera los registros de mis sesiones del último año. Eran unas 3.400 sesiones entre trabajos para clientes y productos propios. Vi que repetía los mismos hábitos en distintos proyectos.

## Primero entiendo el trabajo <!-- heading-id: i-start-by-understanding-the-work -->

Una de las cosas que más escribo es «No cambies nada todavía». Antes de que un agente cambie el código, quiero que me explique el problema. Si lo entendió mal, también va a resolverlo mal. Es mucho más fácil encontrar el error en su explicación que en su código.

Con mis clientes hago lo mismo. Los dueños de negocios suelen pedirme una función o una app en particular. Antes de desarrollarla, quiero entender qué tarea tendría que facilitar. Mientras estudiaba gestión de procesos de negocio, trabajé con un ejemplo sobre cómo digitalizar un proceso de aprobación lento. Mi respuesta fue que quizás no sirviera. Si la demora se debía a que la persona que revisaba las solicitudes tenía demasiado trabajo, pasar los formularios del papel al sistema no iba a acelerar las decisiones. Lo primero sería averiguar por qué había que esperar.

También aprendí a probar un proceso en una conversación antes de diseñar una interfaz. En mi sistema para crear contenido, hice todo el recorrido con un agente durante un tiempo antes de decidir qué tenía que hacer la aplicación. Había armado una interfaz demasiado pronto y me limitaba, aunque no sabía explicar por qué. Ahora espero a entender el proceso antes de diseñar la interfaz.

## Resuelvo la causa <!-- heading-id: i-fix-the-cause -->

Cuando vuelve a aparecer el mismo error, dejo de pedir otra corrección y pregunto por qué se repite. A veces resulta que alguien agregó código nuevo sin quitar el código viejo que ya no hacía falta.

Ahora escribir código cuesta poco. Con un agente, corregir la causa suele llevar casi el mismo tiempo que hacer un arreglo rápido. A la larga, ese arreglo suele salir más caro porque el problema vuelve.

Eso no significa preparar el sistema para un volumen que todavía no tiene. En las pruebas de carga de [Genrupt](/projects/genrupt/), el agente propuso más infraestructura de la que necesitábamos. Dejé una sola base de datos y un servicio de almacenamiento. Un solo servidor puede atender muchas solicitudes. Antes de agregar otro, prefiero revisar si algo de nuestro código está haciendo más lento el sistema.

## Pruebo en el producto real <!-- heading-id: i-test-in-the-real-product -->

Les pido a los agentes que abran la aplicación real en un navegador o simulador, hagan el mismo recorrido que haría una persona y sigan hasta completar la tarea. Para probar una herramienta que procesa videos, quería que usaran grabaciones reales de personas hablando, no ejemplos generados.

También reviso qué comprobó realmente el agente. Cuando me pasa un resumen que parece exhaustivo, le pregunto cómo llegó a esas conclusiones. Una vez descubrí que un informe sobre mi historial de sesiones se basaba solo en el primer mensaje de cada conversación.

## Pruebo las funciones con IA a partir de errores reales <!-- heading-id: i-test-ai-features-against-real-failures -->

En [Palabruno](/projects/palabruno/), una app para leer en español, el fundador me mandó un documento con muchos ejemplos de grupos de palabras mal armados o mal traducidos. Lo más rápido habría sido corregir esos ejemplos. Pero si solo resolvíamos los casos que él había encontrado, el próximo texto podía fallar de otra manera.

Convertimos cada ejemplo en un caso de prueba con una etiqueta, agrupamos los errores según el patrón gramatical que los causaba y corregimos un patrón entero por vez. Después de cada cambio volvimos a correr todas las pruebas y un conjunto de textos reales con estructuras menos prolijas. Queríamos confirmar que el resultado se acercaba a lo que el fundador buscaba y que no funcionaba solo con sus ejemplos.

Ese trabajo cambió el diseño. Al principio, una sola consulta a un modelo decidía cómo separar las palabras, analizaba la gramática, armaba las explicaciones y corregía el resultado. Cada vez agregábamos más reglas para arreglar lo que devolvía. Ahora el sistema separa el texto en palabras, un analizador gramatical propone una estructura, unas reglas deciden dónde empieza y termina cada frase, una consulta más chica al modelo escribe una explicación por vez y un validador revisa el resultado. Puedo probar cada paso por separado y el modelo tiene una sola tarea bien definida.

En [Casamo](/projects/casamo/), antes de cambiar el modelo que revisa fotos de alojamientos, armamos un conjunto de fotos reales con etiquetas para probarlo. También empiezo a medir el costo de las funciones con IA temprano, porque necesito saber cuánto cuesta atender a cada usuario antes de fijar límites o precios razonables.

## Me pregunto para qué sirve cada parte <!-- heading-id: i-question-what-each-part-is-for -->

Cuando reviso un producto, muchas veces empiezo por preguntar si algo hace falta. En una herramienta que armé para mí, la pantalla que abría a la mañana tenía una fila de botones que no necesitaba. Las búsquedas tenían que correr antes de que me despertara. Así, cuando abriera la aplicación, ya tendría nuevos contactos para revisar. Revisarlos y escribirles también tenían que ser pasos separados. Cuando reviso contactos, quiero hacerlo rápido: leo uno, lo acepto y paso al siguiente. Puedo decidir qué mensaje mandar más adelante, cuando me siente a escribirlo.

Casamo hace la revisión que, de otra manera, le llevaría a un viajero mirar cientos de fotos de alojamientos. Si el sistema no puede confirmar ni descartar algo, el viajero lo tiene que revisar por su cuenta. Las personas que prueban el producto me ayudan a encontrar estos problemas. Cuando una persona no entendió qué significaban nuestras etiquetas, agregamos definiciones cortas al lado de cada una. Cuando varias pensaron que Casamo era un sitio inmobiliario, revisé la página de inicio para explicar mejor para qué sirve.

Cada vez más de los programas que desarrollo los usan tanto agentes como personas. Cuando hice que los agentes de IA pudieran usar Genrupt directamente, le pedí a un agente que hiciera tres tareas reales y después me contara cómo le había resultado. Al diseñar una herramienta, una de las primeras cosas que me pregunto es si la va a usar un agente o una persona. De eso depende qué información tiene que devolver y qué decisiones conviene dejarle a quien la usa.

## Cómo trabajo con agentes <!-- heading-id: how-i-run-agents -->

En la mayoría de los cambios grandes sigo los mismos pasos:

- **Un plan escrito.** El agente escribe el plan en un archivo y lo va actualizando para no perder información cuando la conversación se alarga.
- **Trabajo en paralelo cuando las tareas son independientes.** Reparto las tareas entre varios agentes y cada uno me avisa cuando termina.
- **Una revisión independiente.** Otro agente comprueba que el trabajo cumpla el plan y señala las líneas exactas que hay que cambiar. Si encuentra problemas, los corrijo y le pido a un agente nuevo que vuelva a revisar.
- **Una última revisión antes de guardar los cambios.** En cada revisión busco algo distinto: código repetido, código más difícil de leer de lo necesario o tareas que no hace falta realizar.

Elijo el modelo según la tarea. Para programar algo sencillo puedo usar uno más rápido y barato. Para tareas que requieren criterio, como planificar o revisar, uso uno más capaz.

Cuando un agente trabaja durante horas en un objetivo, configuro un recordatorio para que pare cada tanto y se pregunte si sigue avanzando o si está armando herramientas de verificación que no ayudan a completar la tarea.

El historial de sesiones también me sirve de memoria. Armé herramientas para buscar en él. Así, en una sesión nueva un agente puede encontrar lo que decidí o probé antes y aprovechar en otro proyecto lo que aprendí en el anterior.

## Qué estoy aprendiendo <!-- heading-id: what-im-learning -->

Lo que más me interesa es cómo funcionan las organizaciones en la práctica y en qué parte de su trabajo les puede servir el software. Estoy siguiendo una lista de lecturas que arranca con pensamiento sistémico, sigue con la relación entre las personas, los procesos y los datos y termina con arquitectura de software. Voy tomando [notas](/notes/) mientras leo.
