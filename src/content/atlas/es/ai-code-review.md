---
title: "Revisión de código con IA"
section: guardrails
summary: "Un agente aparte que revisa los cambios con la especificación y tus estándares antes de que los revise una persona."
---

## Qué es <!-- heading-id: what-it-is -->

Un agente revisor con IA lee un diff sin partir del análisis de quien lo escribió e informa problemas: requisitos que faltan, bugs, problemas de seguridad, pruebas insuficientes y código que no usa funciones auxiliares que ya existen. Se ejecuta en una sesión o un servicio independiente del agente que escribió el código para que el razonamiento del autor no condicione la revisión.

## Cuándo la necesitás <!-- heading-id: when-you-need-it -->

- Los agentes generan más código del que podés leer línea por línea.
- Trabajás por tu cuenta y no tenés un colega que detecte lo que no viste.
- En las revisiones aparecen los mismos tipos de problemas una y otra vez.

Verificá dos cosas por separado. ¿El cambio hace todo lo que pide la especificación, sin agregar ni omitir nada? ¿El código en sí está bien hecho? Tomá el resumen del autor como afirmaciones sin verificar que hay que contrastar con el código. Para cambios que implican riesgo, asignales tareas distintas a los revisores (seguridad, integridad de los datos, pruebas) en vez de hacer varias revisiones generales que repitan el mismo trabajo.

## Opciones populares <!-- heading-id: popular-choices -->

- **Claude Code GitHub Action / Codex GitHub Action**: ejecutá los mismos agentes de programación para que revisen pull requests.
- **CodeRabbit**: revisor de PRs alojado que genera comentarios por línea y resúmenes.
- **PR-Agent (Qodo)**: herramienta de código abierto para revisar y describir PRs que podés alojar vos.
- **Una skill de revisión o `REVIEW.md`**: tus propios criterios, que usa un agente en una sesión nueva antes de que abras el PR.

## Qué pedirle a tu agente <!-- heading-id: what-to-tell-your-agent -->

> Después de implementar los cambios, iniciá una revisión nueva sin incluir tus notas. Dale al revisor la especificación, AGENTS.md y el diff. Tiene que informar por separado los requisitos que no se cumplieron o que se agregaron sin que nadie los pidiera, y los problemas de calidad de código con archivo y línea. Tratá el resumen de implementación como afirmaciones que hay que verificar. Después corregí vos los hallazgos que aceptes y volvé a ejecutar las verificaciones.
