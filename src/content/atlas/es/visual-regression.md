---
title: "Pruebas de regresión visual"
section: tests
summary: "Detectan cambios visuales no intencionales al comparar capturas de pantalla con una referencia guardada."
---

## Qué son <!-- heading-id: what-it-is -->

Una prueba de regresión visual toma una captura de pantalla de una página o un componente y la compara con una referencia aprobada. Si cambian los píxeles, la prueba falla y muestra la diferencia. Aprobás los cambios intencionales y corregís el resto.

## Cuándo las necesitás <!-- heading-id: when-you-need-it -->

- Un cambio de CSS en un lugar rompió el diseño en otra parte y nadie lo notó durante una semana.
- Un agente «corrigió» un componente y cambió el espaciado, los colores o la alineación sin avisar.
- Tenés un sistema de diseño y querés que todos los componentes sigan respetándolo.

Las pruebas funcionales pasan mientras el botón funcione. No detectan si quedó fuera de la pantalla. Con la comparación de capturas detectás lo que no detectan las aserciones.

## Opciones populares <!-- heading-id: popular-choices -->

- **Playwright screenshots**: viene incluido en Playwright con `toHaveScreenshot()`. Sirve para proyectos chicos.
- **Chromatic**: del equipo de Storybook. Cada story se convierte en una referencia que se revisa en cada pull request.
- **Argos**: funciona con Playwright, Storybook, Vitest Browser Mode, Cypress y Puppeteer. Incluye una interfaz para revisar las diferencias.

## Qué pedirle a tu agente <!-- heading-id: what-to-tell-your-agent -->

> Agregá pruebas de regresión visual con [Playwright screenshots / Chromatic]. Cubrí [las páginas principales / todas las stories de Storybook] en anchos de escritorio y de celular. Ejecutalas en CI. Si una diferencia es intencional, actualizá la referencia en el mismo pull request y explicá el motivo en la descripción.
