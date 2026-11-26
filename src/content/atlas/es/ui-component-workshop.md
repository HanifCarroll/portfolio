---
title: "Entorno para desarrollar componentes de UI"
section: guardrails
summary: "Un lugar para desarrollar y verificar componentes de UI en cada estado sin ejecutar toda la aplicación."
---

## Qué es <!-- heading-id: what-it-is -->

Un entorno para componentes renderiza cada componente de UI por separado en todos sus estados: sin datos, en carga, con error, con texto largo o con muchos elementos. Cada estado se guarda como una «story». Podés verlo, probarlo y documentarlo sin navegar por la aplicación real para llegar a ese estado.

## Cuándo lo necesitás <!-- heading-id: when-you-need-it -->

- Un componente tiene estados que cuesta reproducir en la aplicación en ejecución, como un error después de un timeout.
- Tu equipo o tu agente vuelve a desarrollar componentes casi iguales a otros que ya existen.
- Querés hacer verificaciones visuales y de accesibilidad en cada componente.

Los agentes se benefician de dos formas. Con ese entorno pueden desarrollar y probar rápido un componente de forma aislada. También tienen un catálogo de lo que ya existe para reutilizar componentes en vez de volver a desarrollarlos.

## Opciones populares <!-- heading-id: popular-choices -->

- **Storybook**: el estándar. Con los addons de a11y y Vitest, cada story también se ejecuta como una verificación de accesibilidad y una prueba.
- **Ladle**: alternativa más liviana y rápida basada en Vite que lee el mismo formato de stories.
- **Histoire**: entorno basado en Vite para Vue y Svelte.

## Qué pedirle a tu agente <!-- heading-id: what-to-tell-your-agent -->

> Agregá Storybook a este proyecto con los addons de a11y y Vitest. Escribí stories para nuestros componentes actuales que cubran los estados por defecto, en carga, sin datos y con error. Cuando desarrolles un componente nuevo, escribí primero sus stories y desarrollalo en Storybook. Antes de crear un componente, verificá en Storybook si ya hay uno que hace lo que necesitás.
