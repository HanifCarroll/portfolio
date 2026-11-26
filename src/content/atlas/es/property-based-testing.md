---
title: "Pruebas basadas en propiedades"
section: tests
summary: "Probá una regla con cientos de entradas generadas en vez de con unas pocas elegidas a mano."
---

## Qué son <!-- heading-id: what-it-is -->

Una prueba común verifica un ejemplo: `sort([3, 1, 2])` devuelve `[1, 2, 3]`. Una prueba basada en propiedades define una regla que siempre debería cumplirse, como «la salida está ordenada y contiene los mismos elementos que la entrada». La biblioteca genera cientos de entradas aleatorias para intentar encontrar una que no cumpla la regla. Cuando una falla, reduce la entrada al caso más chico que sigue fallando.

## Cuándo las necesitás <!-- heading-id: when-you-need-it -->

- Tu lógica tiene reglas que se cumplen con cualquier entrada: codificar y después decodificar devuelve el original, los totales nunca son negativos y un parser acepta todo lo que genera el printer.
- Siguen apareciendo bugs con entradas que nadie pensó en probar, como listas vacías, Unicode o números muy grandes.
- Querés pruebas que sigan siendo válidas si reescribís la implementación.

Esto importa más con agentes. Un agente escribe pruebas para los casos que consideró. Las pruebas basadas en propiedades verifican los casos que nadie consideró y sirven como contrato que cualquier reescritura tiene que cumplir.

## Opciones populares <!-- heading-id: popular-choices -->

- **fast-check**: pruebas basadas en propiedades para TypeScript. Genera entradas aleatorias y reduce las que fallan a casos mínimos. Funciona con Vitest y Jest.
- **Hypothesis**: la opción estándar para Python.
- **Workflow separado de CI**: ejecutá las pruebas de propiedades, de fuzzing y generadas a partir de la API en su propio job de CI, aparte de las verificaciones rápidas. Así pueden ejecutarse durante más tiempo y publicar los casos que fallen.
- **Schemathesis**: pruebas basadas en propiedades generadas a partir de un esquema OpenAPI o GraphQL para APIs completas. Mirá [Fuzzer](/es/atlas/fuzzer/).

## Qué pedirle a tu agente <!-- heading-id: what-to-tell-your-agent -->

> Agregá pruebas basadas en propiedades con [fast-check] para [la lógica de precios y fechas]. Para cada función, anotá las reglas que siempre deberían cumplirse. Después escribí una prueba basada en propiedades para cada regla. Cuando una prueba encuentre un caso que falla, agregá también ese caso como prueba común.
