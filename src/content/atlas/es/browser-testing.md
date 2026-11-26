---
title: "Pruebas de componentes y end-to-end"
section: tests
summary: "Prueban la interfaz en un navegador real, desde componentes individuales hasta recorridos de usuario completos."
---

## Qué son <!-- heading-id: what-it-is -->

Las pruebas en navegador ejecutan tu interfaz en un motor de navegador real en vez de un DOM simulado. Hay dos tipos:

- **Pruebas de componentes**: montan un componente con las props, los datos y las respuestas de red que elijas. Son rápidas y facilitan reproducir estados poco comunes.
- **Pruebas end-to-end (E2E)**: inician el stack completo (navegador, aplicación, servidor y base de datos) y ejecutan con clics un recorrido de usuario real.

## Cuándo las necesitás <!-- heading-id: when-you-need-it -->

- Aparecen bugs en el navegador que las pruebas unitarias no detectan.
- Querés probar estados de carga, sin datos, con errores y con listas enormes sin cargar datos de prueba en una base para cada uno. Usá pruebas de componentes.
- Algunos flujos no pueden fallar nunca: el registro, el checkout y la tarea principal para la que tus usuarios usan el producto. Usá pruebas E2E.

Una división razonable: pruebas unitarias para la lógica del negocio, pruebas de componentes para funciones importantes de la interfaz y unas pocas pruebas E2E para recorridos críticos. Las pruebas E2E son lentas y frágiles, así que no las uses para todo.

## Opciones populares <!-- heading-id: popular-choices -->

- **Vitest Browser Mode**: pruebas de componentes en un navegador real con los mismos imports y mocks que tus pruebas unitarias.
- **Playwright**: el estándar para pruebas E2E. Ejecuta Chromium, Firefox y WebKit, registra traces e incluye comparación de capturas de pantalla.
- **Storybook test runner**: convierte cada story de [Storybook](/es/atlas/ui-component-workshop/) en una prueba de componente.
- **MSW (Mock Service Worker)**: simula respuestas de red a nivel de la solicitud. Los mismos mocks sirven en pruebas unitarias, de componentes y E2E.
- **Cloudflare Vitest integration**: ejecuta las pruebas dentro del runtime real de Workers, con versiones locales de D1, KV, Durable Objects y queues.
- **PGlite**: Postgres ejecutado dentro del proceso, para pruebas rápidas con una base de datos real sin Docker.
- **Testcontainers**: inicia instancias reales de Postgres, Redis, Kafka y otros servicios en contenedores Docker descartables para las pruebas.

## Qué pedirle a tu agente <!-- heading-id: what-to-tell-your-agent -->

> Configurá tres niveles de pruebas: Vitest para lógica del negocio, Vitest Browser Mode para componentes de la interfaz (con MSW para las respuestas de red) y Playwright para [el registro, el checkout y el flujo principal del dashboard]. Incluí estados de carga, sin datos y con errores en las pruebas de componentes. Agregá a AGENTS.md los comandos de cada nivel y ejecutá los tres en CI.
