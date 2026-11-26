---
title: "No dejes que el modelo de lenguaje decida qué cuenta como una palabra"
subtitle: "Qué decidir en código y qué delegar al modelo"
pubDate: "2026-05-21"
description: "Al desarrollar una aplicación de lectura para estudiantes de español, aprendí qué decisiones delegar a un modelo de lenguaje y cuáles dejar en el código. La diferencia es más clara de lo que pensaba."
hidden: true
ctaVariant: systemsBuild
---

Estoy armando una aplicación de lectura para estudiantes de español. Abrís un cuento, tocás cualquier palabra y una ficha muestra el significado en inglés, una nota breve de gramática y cómo pronunciarla. Lo difícil no son las fichas. Es decidir qué parte del texto corresponde a un toque.

«Se lo dije» son tres palabras escritas y una sola idea. «Había viajado» son dos palabras escritas, pero por lo general el estudiante solo quiere una explicación de la primera. «Cambio climático» son dos palabras que juntas significan una sola cosa. Si definís mal esos límites, la aplicación parece funcionar mal aunque cada ficha, leída por separado, sea correcta.

En la primera versión de la lógica de agrupación, le pasaba el texto en español a un modelo de lenguaje (LLM) y le pedía que resolviera todo. Ese fue el error.

## El error que mostró el problema <!-- heading-id: the-bug-that-gave-it-away -->

Un profesor que probaba la aplicación tocó «había» en «había viajado». En la ficha aparecía «had traveled», que es el significado de las dos palabras juntas, no de la que tocó. En la misma sesión tocó «cambio climático» y recibió dos fichas separadas, «change» y «climatic», cuando tendría que haber recibido una sola para «climate change». Dos errores que parecían opuestos en un intervalo de quince segundos.

Había dedicado demasiado tiempo a corregir estos errores oración por oración. Cada vez que un profesor me avisaba de un caso, agregaba otra regla para esa frase o forma verbal. La lista de correcciones crecía sin que el comportamiento de la aplicación fuera más predecible. En los cuentos nuevos aparecían otras versiones del mismo problema y las reglas que había escrito para el último cuento casi nunca servían para el siguiente.

![Dos tipos de error: una ficha explica más de lo que se tocó y una frase se divide en dos fichas](/blog/llm-word-boundaries/two-failure-modes.png)

## La primera versión y sus problemas <!-- heading-id: the-first-version-and-what-was-wrong-with-it -->

En el flujo original, le mandaba todo el cuento en español a un LLM y le pedía cuatro cosas a la vez: agrupar las palabras en partes que se pudieran tocar, redactar una ficha para cada parte, etiquetar la gramática y corregir lo que acababa de generar. Después se ejecutaban muchas reglas escritas a mano para detectar los errores obvios.

Me servía que los LLM procesan bien el lenguaje y que podía describir la tarea entera en un párrafo. Cuando funcionaba, el resultado era tan bueno que los errores parecían casos poco comunes que podía corregir de a uno.

Dos cosas seguían fallando de manera sistemática.

El modelo no era consistente al separar el texto. Una misma frase en dos cuentos distintos aparecía agrupada de manera diferente sin que yo pudiera explicarle al profesor por qué. A veces «estaba leyendo» era una parte y a veces eran dos. No podía prometer un comportamiento que no podía reproducir.

El texto de la ficha no coincidía con la frase que supuestamente explicaba, y no había ningún paso para detectar la diferencia. El modelo generaba la frase y la ficha en el mismo paso. Una vez que tenía el resultado, la única comprobación que podía hacer era «¿esto parece correcto?». Esa revisión alcanza para alrededor de un párrafo.

## Dos tipos de decisiones <!-- heading-id: the-reframe -->

Había mezclado dos tipos de decisiones en una sola llamada al modelo.

El primer tipo tiene que ver con la estructura. ¿Dónde termina una parte que podés tocar y dónde empieza la siguiente? Para un mismo texto, necesitás una sola respuesta correcta, la misma cada vez, y una razón que puedas dar cuando un profesor te pregunte por qué.

El segundo tipo tiene que ver con el contenido. Para una frase específica en español, ¿cuál es la explicación breve en inglés más clara para un estudiante de este nivel? Hay más de una respuesta válida. Dos personas que escriben bien podrían redactar fichas distintas y las dos estarían bien.

Los LLM sirven para el contenido. No siempre dan malos resultados en las decisiones de estructura, pero sí en los aspectos que importan acá: no podés reproducir la respuesta, no podés auditarla y no podés limitarla a una regla con la que un profesor esté de acuerdo.

Las decisiones de estructura se toman en código que podés leer completo: un diccionario de frases conocidas, un analizador gramatical que indica qué palabras dependen de cuáles y una lista ordenada de reglas con nombre. Una vez que fijás esas decisiones, podés mandarle una frase por vez al modelo y pedirle una ficha solo para esa frase. Con los límites ya fijados, el modelo no puede agrupar palabras de frases que se procesan por separado.

![Diagrama en dos carriles: el código usa un diccionario, gramática y reglas ordenadas para pasar partes de texto ya fijadas a través de un límite de confianza al modelo, que redacta una ficha](/blog/llm-word-boundaries/two-lanes-trust-boundary.png)

## Qué hace el flujo nuevo <!-- heading-id: what-the-new-pipeline-actually-does -->

Cinco pasos en orden.

Primero, dividí el texto visible en las partes más chicas que tengan sentido. En general son palabras sueltas más los signos de puntuación. El resto del sistema trabaja con esas partes.

Segundo, analizá el texto con un analizador gramatical de español que ya exista. Devuelve la categoría gramatical, la forma de diccionario y de qué otras palabras depende cada palabra. El resultado sirve de referencia. Ningún paso posterior está obligado a seguirlo. Solo aporta más información para aplicar las reglas del paso siguiente.

Tercero, aplicá una lista ordenada de reglas a ese resultado. Las expresiones fijas conocidas, como «cambio climático», quedan en una sola parte. Los tiempos compuestos, como «había viajado», quedan en dos partes separadas pero relacionadas. Así, en la ficha de «había» se puede explicar que es el auxiliar del participio que está al lado. Los pronombres unidos a verbos, como en «dímelo», se vuelven a separar en pantalla: «di», «me», «lo». Cada regla tiene un nombre, una categoría del documento de referencia del profesor y un caso de prueba.

Cuarto, fijá el resultado. Ningún paso posterior puede unir, dividir ni mover una parte del texto que se puede tocar.

Quinto, generá las fichas. Para cada parte ya fijada, llamá al LLM con esa parte, sus rasgos gramaticales y un poco del texto que la rodea para resolver ambigüedades. El modelo genera una ficha. Un validador compara la ficha con la frase. Si la ficha le atribuye un significado que no tiene, por ejemplo, si traduce una palabra de al lado, explica un verbo conjugado como si fuera un infinitivo o trata parte de un nombre propio como una palabra independiente, el sistema vuelve a intentar con una instrucción más específica o usa una entrada de diccionario seleccionada de antemano.

El resultado queda guardado en un registro. Para cada parte que podés tocar en pantalla, podés ver qué regla fijó el límite, qué evidencia usó, qué decía la ficha y de dónde salió el texto. Cuando un profesor informa un error, ahora puedo consultar una fila del registro en vez de adivinar.

## Qué cambió en la práctica <!-- heading-id: what-changed-in-practice -->

Dejamos de acumular correcciones por oración. Un cuento nuevo no trae nuevos errores de separación salvo que incluya una categoría para la que todavía no escribimos una regla. Ese es un problema distinto que podemos identificar y resolver.

Podemos escribir casos de prueba con etiquetas puestas a mano (en este párrafo tienen que existir estas partes y no estas otras) y ejecutarlos con cada cambio. Las pruebas detectan errores que vuelven a aparecer antes de que los vea un profesor.

El costo del LLM bajó porque dejamos de mandar cuentos completos y empezamos a mandar frases individuales con límites fijos. La mayoría de las fichas ahora se genera con una fracción de los tokens del flujo anterior.

Todavía se generan fichas incorrectas, pero el validador detecta el error que más notaban los profesores: fichas que atribuyen a la frase un significado que incluye más de lo que se tocó.

Y cuando un profesor pregunta por qué una parte se comporta de cierta manera al tocarla, puedo responder en una oración en vez de abrir el depurador.

## Qué podés aplicar a otros proyectos <!-- heading-id: the-part-that-generalizes -->

Si estás desarrollando con un LLM y la lista de errores crece con cada ejemplo, comprobá si le pediste al modelo que tome una decisión de estructura y una de contenido en la misma llamada.

Estructura: dónde termina una parte y empieza otra, qué elemento es cuál, a qué campo del esquema corresponde esto y qué tipo tiene.

Contenido: escribí esto, resumí aquello, explicá esto con palabras simples y elegí un nombre que le guste a una persona.

Pasá las decisiones de estructura al código, aunque ese código consista en tablas de consulta y reglas ordenadas con nombre. Mandale al modelo la menor cantidad de información que necesite para generar el contenido. Validá lo que devuelve comparándolo con lo que le mandaste, no según si te suena correcto. Vas a escribir más código, llamar menos al modelo y obtener resultados más predecibles.

![Antes: una sola llamada al LLM con demasiadas tareas y reglas de corrección mezcladas. Después: dividir en partes, analizar la gramática, aplicar reglas en orden, fijar límites, generar una ficha con el modelo y validarla](/blog/llm-word-boundaries/before-after-pipeline.png)

El principio es simple, pero aplicarlo lleva trabajo. La mayor parte de lo que reescribí fue código que no parece impresionante en un artículo: un archivo de diccionario, una lista de reglas con nombre y un validador. Pero ese código fue lo que más ayudó a resolver el problema. Sigo usando el LLM para la parte que solo un modelo de lenguaje resuelve tan bien. Ahora lo uso con límites definidos.
