---
title: "Tracing y gestión de prompts para LLM"
section: ai
summary: "Registra cada llamada a un modelo con su prompt, resultado, costo y latencia para que puedas depurar las funciones de IA."
---

## Qué es <!-- heading-id: what-it-is -->

Con LLM tracing registrás cada paso de una función de IA: el prompt que se mandó, la respuesta del modelo, las llamadas a herramientas, los documentos recuperados, los tokens usados, el costo y el tiempo que llevó. Los pasos se agrupan en un trace para que puedas ver una ejecución completa del agente de principio a fin. La mayoría de las herramientas también guarda los prompts con versiones fuera del código para que puedas cambiarlos y compararlos.

## Cuándo lo necesitás <!-- heading-id: when-you-need-it -->

- Un usuario informa una respuesta incorrecta y no podés ver qué datos recibió el modelo.
- La ejecución de un agente tarda demasiado o cuesta demasiado y no sabés qué paso lo causa.
- Estás cambiando los prompts y querés saber si mejoraron los resultados o empeoraron.

Con la [telemetría](/es/atlas/telemetry/) común podés ver si una solicitud fue lenta. Con LLM tracing podés ver por qué el modelo dio esa respuesta.

## Opciones populares <!-- heading-id: popular-choices -->

- **Langfuse**: plataforma de código abierto para desarrollar con LLM, con tracing, gestión de prompts, evals y datasets. Está basada en OpenTelemetry y podés alojarla vos o usarla como servicio en la nube.
- **AI SDK telemetry**: Vercel AI SDK emite spans de OpenTelemetry por cada llamada. Langfuse, Phoenix y otras herramientas pueden recopilarlos con unas pocas líneas de configuración.
- **Arize Phoenix**: tracing y evaluación de código abierto, también basado en OpenTelemetry. Se ejecuta en local con un comando.
- **LangSmith**: plataforma alojada de LangChain. Funciona sin LangChain, pero se integra mejor con ese framework.
- **Braintrust**: plataforma alojada para evals y experimentos con prompts, con tracing.

## Qué pedirle a tu agente <!-- heading-id: what-to-tell-your-agent -->

> Agregá LLM tracing con [Langfuse]. Registrá cada llamada a un modelo, cada llamada a una herramienta y cada paso de retrieval. Agrupá los pasos de una solicitud de usuario en un solo trace. Etiquetá los traces con el ID del usuario y el nombre de la función. Asegurate de que los traces no incluyan claves de API ni datos sensibles de usuarios.
