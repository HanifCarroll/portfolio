---
title: "Archivo de instrucciones para agentes (AGENTS.md)"
section: agent
summary: "Un archivo en tu repositorio con instrucciones para que los agentes de programación sepan cómo funciona el proyecto y cómo verificar su trabajo."
---

## Qué es <!-- heading-id: what-it-is -->

`AGENTS.md` (o `CLAUDE.md` para Claude Code) es un archivo Markdown en la raíz de tu repositorio que los agentes de programación leen al comienzo de cada sesión. Incluye lo que necesitaría saber alguien que empieza a trabajar en el proyecto: cómo ejecutarlo, probarlo y verificar los tipos, dónde están los archivos, qué convenciones tiene que seguir y qué errores tiene que evitar. En repositorios más grandes se agregan archivos en subcarpetas con instrucciones que solo se aplican ahí.

## Cuándo lo necesitás <!-- heading-id: when-you-need-it -->

- Un agente repite el mismo error, como ejecutar el comando de pruebas equivocado o guardar archivos donde no corresponde.
- Los agentes vuelven a escribir funciones auxiliares que ya existen porque no saben dónde encontrarlas.
- Al principio de cada sesión, volvés a explicar el proyecto.

Mantené el archivo corto y actualizado. Poné ahí los datos que no suelen cambiar y los comandos. Pasá los procedimientos largos a [skills](/es/atlas/agent-skills/) que solo se cargan cuando hacen falta. Para una regla que el agente nunca puede romper, es mejor usar [una regla de lint o una verificación](/es/atlas/architecture-checks/) que escribir una oración en este archivo.

## Opciones populares <!-- heading-id: popular-choices -->

- **AGENTS.md**: archivo con un nombre que reconocen Codex, Cursor, opencode, Amp y muchos otros para leer las instrucciones.
- **CLAUDE.md**: el equivalente de Claude Code. En muchos repositorios se mantiene uno de los dos archivos y se crea un enlace del otro a ese archivo.
- **Kiro steering files**: archivos separados `product.md`, `tech.md` y `structure.md`, que se cargan en cada sesión.
- **Referencia: [AGENTS.md de opencode (en inglés)](https://github.com/anomalyco/opencode/blob/dev/AGENTS.md)**: ejemplo de un archivo de instrucciones grande y bien mantenido.

## Qué pedirle a tu agente <!-- heading-id: what-to-tell-your-agent -->

> Escribí un AGENTS.md para este repositorio. Incluí los comandos exactos para instalar, ejecutar, probar, hacer lint y verificar tipos, una explicación breve de dónde están los archivos, las funciones auxiliares y los componentes compartidos que hay que reutilizar, y las convenciones que seguimos. Que tenga menos de [150] líneas. Cada vez que te corrija algo que se pueda repetir, proponé qué agregar a este archivo.
