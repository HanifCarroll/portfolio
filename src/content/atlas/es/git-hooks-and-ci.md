---
title: "Git hooks y controles de CI"
section: guardrails
summary: "Ejecutan tus verificaciones automáticamente antes de cada commit y merge para que no se incorpore código que falla."
---

## Qué son <!-- heading-id: what-it-is -->

Los git hooks ejecutan scripts en momentos como el commit o el push. Un hook de pre-commit puede dar formato a los archivos modificados, ejecutar el linter y verificar los tipos. CI ejecuta todas las verificaciones (pruebas, builds, [controles de arquitectura](/es/atlas/architecture-checks/) y [evals](/es/atlas/llm-evals/)) en cada pull request e impide el merge si algo falla. Muchos agentes de programación también tienen sus propios hooks para ejecutar verificaciones después de cada edición o antes de terminar.

## Cuándo los necesitás <!-- heading-id: when-you-need-it -->

- Un agente dice que terminó, pero falla el build.
- Ya tenés verificaciones, pero se ejecutan solo cuando alguien se acuerda.
- Querés dejar que los agentes trabajen más tiempo sin revisar cada paso.

Con los hooks, el agente recibe resultados de las verificaciones enseguida mientras trabaja. Las verificaciones de CI son obligatorias. Hacé que ambos sean lo bastante rápidos para que nadie quiera desactivarlos.

## Opciones populares <!-- heading-id: popular-choices -->

- **Husky + lint-staged**: la configuración habitual de JavaScript para git hooks que solo verifican los archivos en staging.
- **Lefthook**: gestor rápido de hooks que no depende de un lenguaje y ejecuta comandos en paralelo.
- **pre-commit / prek**: framework de hooks del ecosistema de Python con una biblioteca grande de hooks, y prek, una versión reescrita más rápida que se puede usar como reemplazo directo.
- **GitHub Actions**: la opción de CI por defecto para repositorios de GitHub.
- **Hooks de agente**: Claude Code, Codex y otros pueden ejecutar comandos después de editar o antes de terminar.

## Qué pedirle a tu agente <!-- heading-id: what-to-tell-your-agent -->

> Agregá un hook de pre-commit con [Lefthook / Husky] que dé formato a los archivos modificados, ejecute el linter y verifique sus tipos. Agregá un workflow de CI que ejecute todas las pruebas, el build y las verificaciones propias en cada pull request, y hacé que sea obligatorio para el merge. Hacé que el hook de pre-commit tarde menos de [10] segundos.
