---
title: "Validación de esquemas en runtime"
section: code
summary: "Verifica que los datos que entran a tu aplicación tengan la estructura que esperás en el momento en que llegan."
---

## Qué es <!-- heading-id: what-it-is -->

Los tipos no existen cuando se ejecuta tu código. Un validador de esquemas verifica los datos reales contra un esquema en runtime: una respuesta de API, un formulario enviado, un webhook o una salida JSON de un LLM. En TypeScript, el mismo esquema también genera el tipo estático, así que solo describís la estructura una vez.

## Cuándo la necesitás <!-- heading-id: when-you-need-it -->

- Los datos cruzan un límite de confianza: entradas de usuarios, APIs de terceros, archivos, variables de entorno o salidas de modelos.
- Tuviste un bug porque un campo que dabas por presente era `undefined`.
- Estás escribiendo a mano verificaciones como `typeof x === "object" && "id" in x`.

Los agentes suelen agregar verificaciones defensivas en muchas partes del código. Una buena regla para ellos: validá una sola vez en el límite y después pasá los valores tipados al código interno sin volver a desconfiar de esos valores.

## Opciones populares <!-- heading-id: popular-choices -->

- **Zod**: validación de esquemas diseñada para TypeScript. Definís un esquema una sola vez para validar datos en runtime e inferir su tipo de TypeScript. Es la opción más común y los SDKs para LLM aceptan esquemas de Zod para salida estructurada.
- **Valibot**: alternativa modular con un bundle mucho más chico. Sirve para frontends.
- **Effect Schema**: parte de Effect. Codifica y decodifica, y se integra con aplicaciones que ya usan Effect.
- **Pydantic**: la opción estándar para Python.

## Qué pedirle a tu agente <!-- heading-id: what-to-tell-your-agent -->

> Usá [Zod] para validar cada dato que entra a la aplicación: cuerpos de solicitudes, query params, variables de entorno, respuestas de APIs de terceros y salidas de LLM. Definí cada esquema una vez junto al código que controla el límite e inferí los tipos a partir del esquema. No vuelvas a validar valores que ya se parsearon.
