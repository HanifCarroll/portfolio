---
title: "Reglas de lint propias y controles de arquitectura"
section: guardrails
summary: "Convierte las reglas de tu equipo en verificaciones que hacen fallar el build, con mensajes de error que le indican al agente cómo corregir los problemas."
---

## Qué es <!-- heading-id: what-it-is -->

Los linters y los verificadores de tipos detectan errores generales. Con reglas propias detectás los que importan en tu proyecto: «el código de UI no puede importar la capa de base de datos», «usá nuestra función auxiliar `fetchJson` en vez de llamar directamente a `fetch`» o «ningún archivo puede tener más de 500 líneas». Los controles de arquitectura hacen cumplir las reglas sobre qué módulos pueden depender de cuáles. El mensaje de error indica qué tiene que hacer el agente en su lugar.

## Cuándo los necesitás <!-- heading-id: when-you-need-it -->

- Escribís el mismo comentario en las revisiones una y otra vez.
- Un agente evita usar repetidamente una función auxiliar compartida o cruza un límite que querés mantener.
- Tenés una regla en AGENTS.md que los agentes todavía rompen a veces.

Hay tres formas de hacer cumplir una regla. Podés pedir que se respete en un prompt, detectar infracciones en la revisión o hacer que falle el build cuando se rompe. Solo la última funciona siempre. Con una regla que hace fallar el build, tus criterios quedan incorporados al repositorio.

## Opciones populares <!-- heading-id: popular-choices -->

- **ESLint / Oxlint / Biome**: linters de JavaScript y TypeScript. ESLint tiene el ecosistema más grande para reglas propias. Oxlint y Biome son mucho más rápidos.
- **ast-grep**: escribí reglas de búsqueda y reemplazo estructurales como patrones de código en muchos lenguajes, sin tener que armar un plugin completo de lint.
- **dependency-cruiser**: permite definir y verificar qué carpetas y paquetes pueden importar a cuáles.
- **Límites del lenguaje**: si separás paquetes, crates o módulos con visibilidad restringida, algunos diseños incorrectos no compilan.

## Qué pedirle a tu agente <!-- heading-id: what-to-tell-your-agent -->

> Convertí estas reglas en verificaciones automáticas: [el código de UI no puede importar desde `db/`; usá `lib/http` en vez de `fetch` directamente]. Usá [dependency-cruiser para los límites de importación y ast-grep o una regla de lint propia para el resto]. Cada mensaje de error tiene que indicar qué hacer en su lugar. Corregí las infracciones existentes o enumeralas como excepciones explícitas y agregá las verificaciones a CI.
