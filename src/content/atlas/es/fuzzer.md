---
title: "Fuzzer"
section: tests
summary: "Prueba tu código con una gran cantidad de entradas generadas, muchas con formato inválido, para detectar caídas."
---

## Qué es <!-- heading-id: what-it-is -->

Un fuzzer prueba tu código con una gran cantidad de entradas generadas, muchas con formato inválido, y detecta caídas, bloqueos y aserciones que no se cumplen. Los fuzzers guiados por cobertura registran qué partes del código se ejecutan con cada entrada. Después modifican las entradas que ejecutaron partes nuevas, así que en cada ronda pueden probar más caminos.

Un fuzzer se parece a las [pruebas basadas en propiedades](/es/atlas/property-based-testing/). Las pruebas de propiedades comprueban que se cumple una regla con entradas aleatorias. Los fuzzers se ejecutan más tiempo y buscan entradas que provoquen cualquier tipo de falla.

## Cuándo lo necesitás <!-- heading-id: when-you-need-it -->

- Tu código procesa entradas que no controlás: archivos subidos, texto de usuarios, webhooks o protocolos de red.
- Exponés una API y querés saber qué pasa si alguien hace solicitudes que tu cliente nunca haría.
- Descubrís que el bug que te informaron se debe a una entrada poco común que nadie pensó probar.
- Un agente escribió un parser o un validador y sus pruebas solo cubren los casos que consideró.

Ese último caso es el que más importa cuando los agentes escriben código. Escriben pruebas para las entradas que tuvieron en cuenta. Con un fuzzer podés encontrar entradas que ni vos ni el agente consideraron.

## Opciones populares <!-- heading-id: popular-choices -->

Fuzzers a nivel de código (prueban directamente una función):

- **Jazzer.js**: fuzzer para Node.js guiado por cobertura que se ejecuta dentro del proceso. Se integra con Jest.
- **Atheris**: fuzzer para Python de Google guiado por cobertura.
- **Go native fuzzing**: incluido en `go test -fuzz`. No hay nada que instalar.
- **cargo-fuzz**: la herramienta estándar de fuzzing para Rust.
- **libFuzzer**: fuzzer de LLVM para C y C++ guiado por cobertura, que se ejecuta dentro del proceso. Está incluido en Clang, así que para definir un fuzz target necesitás una sola función y una opción del compilador.
- **AFL++**: la opción más completa para C, C++ y binarios compilados. Da buenos resultados en benchmarks de fuzzing.

Fuzzers para API (prueban un servicio en ejecución a través de HTTP):

- **Schemathesis**: genera solicitudes a partir de un esquema de OpenAPI o GraphQL, incluidos casos límite y flujos con estado. Se ejecuta desde la CLI, pytest o CI. Es la opción más fácil para empezar si tenés una especificación de OpenAPI.
- **RESTler**: fuzzer de Microsoft para APIs REST con estado. Aprende qué solicitudes dependen de otras, como crear un recurso antes de eliminarlo.
- **WuppieFuzz**: fuzzer de TNO para APIs REST, basado en LibAFL. Genera secuencias de solicitudes a partir de una especificación de OpenAPI y usa la cobertura para detectar bugs en partes del código a las que cuesta llegar.

Fuzzing continuo:

- **OSS-Fuzz**: servicio gratis de Google que ejecuta fuzzing en proyectos de código abierto a toda hora y registra bugs.

## Qué pedirle a tu agente <!-- heading-id: what-to-tell-your-agent -->

> Agregá fuzz testing a este proyecto. Identificá las funciones que procesan o validan entradas no confiables y escribí un fuzz target para cada una con [Jazzer.js / Atheris / Go native fuzzing]. Si el proyecto tiene una especificación de OpenAPI, agregá también una ejecución de Schemathesis contra el servidor local. Agregá a CI un job corto de fuzzing con un límite de tiempo, programá una ejecución nocturna más larga y guardá las entradas que provoquen caídas como pruebas de regresión.
