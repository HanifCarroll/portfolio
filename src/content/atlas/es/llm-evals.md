---
title: "Evals para LLM"
section: ai
summary: "Pruebas automáticas para funciones de IA que puntúan los resultados según ejemplos y criterios."
---

## Qué son <!-- heading-id: what-it-is -->

Una eval es una prueba para un sistema no determinista. Juntás un conjunto de entradas, muchas veces del uso real, y después puntuás las salidas. El puntaje puede salir del código (¿se puede parsear el JSON?, ¿está la respuesta en la fuente?), de un modelo que evalúa la salida (¿la respuesta coincide con el documento?) o de una revisión humana.

## Cuándo las necesitás <!-- heading-id: when-you-need-it -->

- Estás por cambiar un prompt, un modelo o la configuración de retrieval y no sabés si van a empeorar los resultados.
- «Parecía funcionar bien cuando lo probé» es la única verificación de calidad de tu función de IA.
- Estás desarrollando un sistema RAG o un agente y necesitás saber dónde falla: en retrieval, en el razonamiento o en el uso de herramientas.

Las evals cumplen en las funciones de IA la misma función que las pruebas en el código. Sin evals, cada vez que cambiás un prompt tenés que adivinar el efecto.

## Opciones populares <!-- heading-id: popular-choices -->

- **DeepEval**: framework de estilo pytest para evaluar aplicaciones con LLM. Tiene métricas de retrieval en RAG, alucinaciones, uso de herramientas, tareas completadas por agentes y conversaciones de varios turnos.
- **Promptfoo**: evals definidas por configuración que se ejecutan desde la línea de comandos y permiten comparar prompts y modelos. También permite hacer red-teaming de seguridad.
- **Langfuse / Braintrust**: ejecutá evals con datasets junto con tus [traces](/es/atlas/llm-tracing/) para convertir fallas de producción en casos de prueba.
- **Suites de prompt injection**: conjuntos de casos de evaluación con instrucciones maliciosas ocultas en documentos, páginas web o resultados de herramientas para comprobar que el modelo no las siga. Podés generarlas con Promptfoo.
- **Conjuntos de prueba fijos**: guardá las entradas, incluidos los documentos recuperados y los resultados de herramientas. Así, cuando vuelvas a ejecutar las pruebas, vas a evaluar el cambio en el prompt o modelo y no cambios en los datos.
- **Autoevals**: biblioteca de código abierto de Braintrust con funciones de puntuación ya armadas.

## Qué pedirle a tu agente <!-- heading-id: what-to-tell-your-agent -->

> Configurá evals para [el asistente de soporte] con [DeepEval / Promptfoo]. Armá un dataset de 30–50 ejemplos reales, con fallas conocidas. Puntuá [la fidelidad a la fuente, la relevancia de la respuesta y el uso correcto de herramientas]. Incluí casos de prompt injection. Si usás un modelo para puntuar, agregá casos de control con respuestas conocidas para verificar al propio evaluador. Agregá un comando para ejecutar las evals y ejecutalo antes de cualquier cambio en los prompts, los modelos o el retrieval.
