---
title: "Cómo trabajo"
description: "Uso agentes de programación desde hace unos tres años y en el último año generaron casi todo mi código. Eso cambió mi forma de trabajar. Paso menos tiempo escribiendo código y más tiempo entendiendo el problema, decidiendo qué conviene desarrollar y comprobando que funcione."
---

Hace poco le pedí a un agente que analizara los registros de mis sesiones del último año. Eran unas 3.400 sesiones entre trabajos para clientes y productos propios. Vi que repetía los mismos hábitos en distintos proyectos.

## Primero entiendo el trabajo <!-- heading-id: i-start-by-understanding-the-work -->

Una de las cosas que más escribo es «No cambies nada todavía». Antes de que un agente cambie el código, le pido que describa el problema. Si la descripción es incorrecta, la corrección también lo va a ser. Es mucho más fácil encontrar el error en la descripción que en el código.

Con mis clientes hago lo mismo. Los dueños de negocios suelen pedirme una función o una app en particular. Antes de desarrollarla, quiero entender qué tarea tendría que facilitar. Mientras estudiaba gestión de procesos de negocio, trabajé con un ejemplo sobre cómo digitalizar un proceso de aprobación lento. Mi respuesta fue que quizás no sirviera. Si la persona que revisaba las solicitudes tenía demasiado trabajo, no iba a decidir más rápido solo por usar formularios digitales en vez de papel. Lo primero sería averiguar por qué había que esperar.

También aprendí a probar un proceso en una conversación antes de diseñar una interfaz. En mi sistema para crear contenido, hice todos los pasos con un agente durante un tiempo antes de decidir qué funciones necesitaba incluir en la aplicación. Había armado una interfaz demasiado pronto y no podía usarla como quería, aunque no sabía explicar por qué. Ahora espero a entender el proceso antes de diseñar la interfaz.

## Corrijo lo que causa el problema <!-- heading-id: i-fix-the-cause -->

Cuando se repite el mismo error, dejo de pedir otra corrección y busco la causa. A veces resulta que alguien agregó código nuevo sin quitar el código viejo que ya no hacía falta.

Ahora escribir código cuesta poco. Con un agente, corregir lo que causó el error suele llevar casi el mismo tiempo que hacer un arreglo rápido. Si el error se repite, corregirlo varias veces suele costar más que resolver la causa.

Eso no significa preparar el sistema para un volumen que todavía no tiene. En las pruebas de carga de [Genrupt](/es/projects/genrupt/), el plan que generó el agente incluía más infraestructura de la que necesitábamos. Dejé una sola base de datos y un servicio de almacenamiento. Un solo servidor puede procesar muchas solicitudes. Antes de agregar otro, prefiero revisar si nuestro código demora las respuestas.

## Pruebo en el producto real <!-- heading-id: i-test-in-the-real-product -->

Les pido a los agentes que abran la aplicación real en un navegador o simulador, repitan las acciones de un usuario y sigan hasta completar la tarea. Para probar una herramienta que procesa videos, quería que usaran grabaciones reales de personas hablando, no ejemplos generados.

También reviso qué comprobó realmente el agente. Cuando leo un resumen que parece exhaustivo, le pregunto al agente cómo obtuvo esos resultados. Una vez descubrí que un informe sobre mi historial de sesiones se basaba solo en el primer mensaje de cada conversación.

## Pruebo las funciones con IA a partir de errores reales <!-- heading-id: i-test-ai-features-against-real-failures -->

En [Palabruno](/es/projects/palabruno/), una app para leer en español, el fundador me mandó un documento con muchos ejemplos de grupos de palabras mal armados o mal traducidos. Lo más rápido habría sido corregir esos ejemplos. Pero si solo corregíamos los casos que él había encontrado, el lector podía dar otro resultado incorrecto cuando el fundador probara el próximo texto.

Convertimos cada ejemplo en un caso de prueba con una etiqueta, agrupamos los errores según el patrón gramatical que los causaba y corregimos un patrón entero por vez. Después de cada cambio repetimos todas las pruebas y probamos el lector con un conjunto de textos reales de estructura menos regular. Así podíamos comprobar si el lector daba los resultados que el fundador esperaba también con otros textos.

El diseño cambió después de esas pruebas. Al principio, el sistema hacía una sola consulta grande a un modelo para separar las palabras, analizar la gramática, generar las explicaciones y corregir el resultado. Cada vez se usaban más reglas para corregir la respuesta del modelo. Ahora el sistema separa el texto en palabras y un analizador gramatical genera una estructura posible. El sistema aplica reglas para delimitar cada frase y hace una consulta más pequeña al modelo para generar una explicación por vez. Un validador comprueba el resultado. Cada paso se puede probar por separado. El modelo solo genera las explicaciones.

En [Casamo](/es/projects/casamo/), antes de cambiar el modelo que analiza fotos de alojamientos, armamos un conjunto de fotos reales con etiquetas para probarlo. También empiezo a medir el costo de las funciones con IA temprano, porque necesito saber cuánto me cuesta la IA por usuario antes de fijar límites o precios razonables.

## Me pregunto para qué sirve cada parte <!-- heading-id: i-question-what-each-part-is-for -->

Cuando reviso un producto, muchas veces empiezo por preguntar si algo hace falta. En una herramienta que armé para mí, la pantalla que abría a la mañana tenía una fila de botones que no necesitaba. La aplicación tenía que ejecutar las búsquedas antes de que me despertara. Así, cuando abriera la aplicación, ya tendría nuevos contactos para revisar. Revisarlos y escribirles también tenían que ser pasos separados. Cuando reviso contactos, quiero hacerlo rápido: leo uno, lo acepto y paso al siguiente. Puedo decidir qué mensaje mandar más adelante, cuando me siente a escribirlo.

En vez de mirar cientos de fotos, un viajero puede usar Casamo para comprobar si un alojamiento cumple sus requisitos. Si el sistema no indica si se cumple algún requisito, el viajero tiene que comprobarlo por su cuenta. Las personas que prueban la versión beta me ayudan a encontrar estos problemas. Cuando una persona no entendió qué significaban nuestras etiquetas, agregamos definiciones cortas al lado de cada una. Cuando varias pensaron que Casamo era un sitio inmobiliario, revisé la página de inicio para explicar mejor para qué sirve.

Cada vez más de los programas que desarrollo los usan tanto agentes como personas. Cuando hice que los agentes de IA pudieran usar Genrupt directamente, le pedí a un agente que hiciera tres tareas reales y después me contara cómo le había resultado. Al diseñar una herramienta, una de las primeras cosas que me pregunto es si la va a usar un agente o una persona. De eso depende qué información tiene que devolver y qué decisiones conviene dejarle a quien la usa.

## Cómo trabajo con agentes <!-- heading-id: how-i-run-agents -->

En la mayoría de los cambios grandes sigo los mismos pasos:

- **Un plan escrito.** El agente escribe el plan en un archivo y lo va actualizando para conservar la información cuando la conversación dura mucho.
- **Trabajo en paralelo cuando las tareas son independientes.** Los agentes trabajan por separado en las tareas independientes y cada uno me avisa cuando termina.
- **Una revisión independiente.** Otro agente comprueba que el trabajo cumpla el plan e indica exactamente qué líneas hay que cambiar. Si encuentra problemas, se corrigen y otro agente vuelve a revisar el trabajo.
- **Una última revisión antes de guardar los cambios.** Los agentes hacen revisiones separadas para detectar código repetido, código más difícil de leer de lo necesario y trabajo que no hace falta hacer.

Elijo el modelo según la tarea. Para programar algo sencillo puedo usar uno más rápido y barato. Para tareas que requieren criterio, como planificar o revisar, uso uno más capaz.

Cuando un agente trabaja durante horas en un objetivo, configuro un recordatorio para que pare cada tanto y compruebe si está completando tareas necesarias o creando herramientas de verificación que no necesita.

También uso el historial de sesiones para consultar decisiones y pruebas anteriores. Armé herramientas para buscar en él. Así, en una sesión nueva, un agente puede consultar las decisiones y las pruebas de una sesión anterior y usar esa información en otro proyecto.

## Qué estoy aprendiendo <!-- heading-id: what-im-learning -->

Lo que más me interesa es cómo funcionan las organizaciones en la práctica y en qué parte de su trabajo les puede servir el software. Estoy siguiendo una lista de lecturas. Primero leo sobre pensamiento sistémico, después sobre cómo se relacionan las personas, los procesos y los datos. La última parte es sobre arquitectura de software. Voy tomando [notas](/es/notes/) mientras leo.
