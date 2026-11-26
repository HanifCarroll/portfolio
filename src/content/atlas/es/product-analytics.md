---
title: "Analytics de producto"
section: production
summary: "Muestra lo que la gente hace en tu producto para que puedas ver qué funciona."
---

## Qué es <!-- heading-id: what-it-is -->

Con analytics de producto registrás qué hace la gente en tu aplicación: qué páginas visita, en qué botones hace clic y en qué parte abandona el registro. Algunas herramientas también graban sesiones para que puedas reproducir una visita real.

## Cuándo lo necesitás <!-- heading-id: when-you-need-it -->

- Publicaste algo y no sabés si alguien usa la función nueva.
- La gente se registra, pero no vuelve, y no sabés dónde tiene problemas.
- Estás discutiendo qué desarrollar después a partir de opiniones y no de cómo se usa el producto.

Cuando los agentes abaratan el desarrollo, decidir qué desarrollar pasa a ser la parte costosa. Con analytics podés saber qué experimentos conviene mantener.

## Opciones populares <!-- heading-id: popular-choices -->

- **PostHog**: plataforma de código abierto con analytics de eventos, reproducción de sesiones, feature flags, experimentos y encuestas. Tiene un plan gratuito con límites amplios y podés alojarla vos.
- **Plausible**: analytics de páginas liviano sin cookies y con cuidado de la privacidad. Sirve si solo necesitás conocer el tráfico y de dónde vienen las visitas.
- **Google Analytics 4**: gratis y muy conocido. Sirve más para el tráfico de marketing que para el comportamiento dentro de la aplicación.
- **Microsoft Clarity**: mapas de calor y grabaciones de sesiones gratis.

## Qué pedirle a tu agente <!-- heading-id: what-to-tell-your-agent -->

> Agregá analytics de producto con [PostHog]. Registrá automáticamente las visitas a páginas y después agregá eventos con nombre para los pasos principales de nuestro flujo: [inicio del registro, registro completado, primer proyecto creado]. Guardá los nombres de los eventos en un solo archivo de constantes y no mandes datos personales, como direcciones de correo, en las propiedades de los eventos.
