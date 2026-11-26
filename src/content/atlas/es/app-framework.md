---
title: "Framework de aplicación"
section: code
summary: "La base para manejar las rutas, el renderizado y el código del servidor de una aplicación web o móvil."
---

## Qué es <!-- heading-id: what-it-is -->

Un framework de aplicación ya incluye la estructura de una aplicación: páginas y rutas, renderizado del lado del servidor, carga de datos, formularios y endpoints de API. Vos escribís las funciones de tu aplicación. El framework incluye la implementación que todas las aplicaciones necesitan.

## Cuándo lo necesitás <!-- heading-id: when-you-need-it -->

- Estás empezando una aplicación web o móvil nueva.
- Tu aplicación actual tiene muchas páginas que conectaste a mano y volvés a implementar las rutas y la carga de datos una y otra vez.

Si usás agentes, te conviene más que antes elegir un framework conocido. Los agentes tienen muchos más ejemplos de código con frameworks populares, así que cometen menos errores al usarlos. Las convenciones de esos frameworks les indican a los agentes dónde va cada parte del código.

## Opciones populares <!-- heading-id: popular-choices -->

- **SvelteKit**: framework full-stack de Svelte con routing, SSR y endpoints de servidor. Poco código repetitivo y páginas rápidas.
- **Next.js**: el framework de React más usado. Es el que mejor conocen los agentes, algo que importa mucho.
- **TanStack Start**: framework full-stack de React basado en TanStack Router, con tipos verificados de un extremo al otro de las rutas.
- **Astro**: diseñado para sitios con mucho contenido. Por defecto, no envía JavaScript y podés agregar partes interactivas donde hagan falta.
- **Expo / React Native**: con React Native podés desarrollar aplicaciones nativas para iOS y Android con React. Expo agrega herramientas, módulos nativos precompilados y builds en la nube (EAS).

## Qué pedirle a tu agente <!-- heading-id: what-to-tell-your-agent -->

> Configurá una aplicación nueva con [SvelteKit] y TypeScript en modo estricto. Usá las convenciones del framework para las rutas, la carga de datos y los formularios en vez de agregar bibliotecas para eso. Escribí una sección en AGENTS.md con los comandos para ejecutar el servidor de desarrollo, las pruebas y la verificación de tipos.
