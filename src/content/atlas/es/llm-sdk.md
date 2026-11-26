---
title: "SDK para LLM"
section: ai
summary: "Una sola API para llamar a distintos modelos de IA, con tool calling y salida estructurada incluidos."
---

## Qué es <!-- heading-id: what-it-is -->

Un SDK para LLM se usa entre tu código y los proveedores de modelos, como OpenAI, Anthropic y Google. Con el SDK podés mandar prompts, recibir respuestas por streaming, invocar herramientas, recibir JSON estructurado y armar loops para agentes de la misma manera con cualquier modelo.

## Cuándo lo necesitás <!-- heading-id: when-you-need-it -->

- Tu producto llama a un LLM.
- Querés cambiar de modelo o comparar modelos sin reescribir tu código.
- Necesitás salida estructurada validada con un esquema o un modelo que invoque tus funciones.

Llamar directamente a la API de cada proveedor sirve para un prototipo. Se complica en cuanto necesitás streaming, reintentos, llamadas a herramientas y un segundo proveedor.

## Opciones populares <!-- heading-id: popular-choices -->

- **Vercel AI SDK**: kit de herramientas de código abierto para TypeScript con una sola API para varios proveedores de LLM, entre ellos OpenAI, Anthropic, Google, DeepSeek y modelos abiertos. Incluye generación de texto, salida estructurada, tool calling, agentes y hooks de UI para chats.
- **OpenAI Agents SDK**: framework de OpenAI para agentes con herramientas, transferencia de tareas entre agentes, guardrails y tracing. Está disponible para TypeScript y Python.
- **Mastra**: framework de agentes en TypeScript con workflows, memoria, RAG y evals incorporados.
- **LiteLLM**: SDK de Python y servidor proxy que ofrece más de 100 proveedores con el formato de API de OpenAI. Sirve como gateway central para registrar costos y aplicar límites de solicitudes.

## Qué pedirle a tu agente <!-- heading-id: what-to-tell-your-agent -->

> Usá [Vercel AI SDK] para todas las llamadas a modelos. Definí el modelo en un solo valor de configuración para que podamos cambiar de proveedor. Usá salida estructurada con un esquema de [Zod](/es/atlas/schema-validation/) siempre que necesitemos recibir datos en vez de texto en prosa. Manejá explícitamente los errores de los modelos y los timeouts.
