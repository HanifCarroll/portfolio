---
title: "Verificador de accesibilidad"
section: tests
summary: "Detecta automáticamente problemas de accesibilidad, como etiquetas ausentes, poco contraste y fallas en el acceso con el teclado."
---

## Qué es <!-- heading-id: what-it-is -->

Un verificador de accesibilidad analiza una página o un componente renderizado en busca de problemas que dificultan su uso con un lector de pantalla, con un teclado o con visión reducida. Señala, por ejemplo, imágenes sin texto alternativo, botones sin etiquetas, poco contraste de color y atributos ARIA no válidos.

## Cuándo lo necesitás <!-- heading-id: when-you-need-it -->

- Siempre, si hay personas que usan tu producto. Para muchos negocios, también es un requisito legal.
- Los agentes generan rápido tu interfaz y suelen omitir etiquetas y estados de foco si no hay una verificación.

Las verificaciones automáticas detectan buena parte de los problemas, pero no todos. Una persona todavía tiene que revisar la navegación con el teclado y el uso con un lector de pantalla.

## Opciones populares <!-- heading-id: popular-choices -->

- **axe-core**: motor de Deque para verificar automáticamente la accesibilidad web. Ejecutalo en CI con Playwright, Jest o herramientas similares. La mayoría de las otras herramientas se basan en él.
- **Storybook a11y addon**: ejecuta axe en cada story para verificar cada componente en cada estado.
- **Pa11y**: herramienta de línea de comandos que verifica una lista de URLs. Sirve para hacer una verificación rápida de un sitio en CI.
- **Lighthouse**: auditoría incluida en Chrome que genera, entre otras cosas, un puntaje de accesibilidad.

## Qué pedirle a tu agente <!-- heading-id: what-to-tell-your-agent -->

> Agregá verificaciones automáticas de accesibilidad con axe-core. Ejecutalo en nuestras pruebas de Playwright en [cada página principal] y con Storybook a11y addon en cada story. Hacé que falle CI si hay infracciones graves o críticas. Corregí las infracciones existentes y asegurate de que se pueda llegar a cada elemento interactivo y usarlo con el teclado.
