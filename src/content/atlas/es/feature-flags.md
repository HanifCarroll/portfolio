---
title: "Feature flags"
section: production
summary: "Permiten activar y desactivar funciones sin hacer otro deploy y habilitarlas primero para unos pocos usuarios."
---

## Qué son <!-- heading-id: what-it-is -->

Una feature flag es una opción de activación que tu código verifica durante la ejecución: `if (flags.newCheckout) { ... }`. La cambiás desde un dashboard o un archivo de configuración en vez de publicar código nuevo. Podés aplicar una flag a usuarios específicos, a un porcentaje del tráfico o a un equipo interno.

## Cuándo las necesitás <!-- heading-id: when-you-need-it -->

- Querés hacer merge de trabajo sin terminar sin que los usuarios puedan verlo.
- Querés probar un cambio con el 5 % de los usuarios antes de que todos lo vean.
- Necesitás poder desactivar una función riesgosa sin hacer un deploy.
- Querés hacer una prueba A/B.

Las flags son útiles si usás agentes que publican muchos cambios chicos. Podés publicar cada cambio desactivado, verificarlo en producción y recién después activarlo.

## Opciones populares <!-- heading-id: popular-choices -->

- **PostHog**: flags y experimentos en la misma herramienta que usás para analytics.
- **GrowthBook**: flags de código abierto con un buen motor de experimentación y estadísticas.
- **Unleash**: servidor de flags de código abierto que podés alojar vos y que se usa desde hace años.
- **LaunchDarkly**: el estándar alojado para empresas grandes.
- **OpenFeature**: API de flags que no depende de un proveedor. Escribí el código para esa API y cambiá de proveedor más adelante si lo necesitás.

## Qué pedirle a tu agente <!-- heading-id: what-to-tell-your-agent -->

> Agregá feature flags con [PostHog / GrowthBook]. Creá una sola función auxiliar para consultar flags, de modo que haya una sola referencia al proveedor. Hacé que [el nuevo flujo de checkout] dependa de una flag llamada `new-checkout` y que esté desactivada por defecto. Cuando una flag ya esté activa para todos, eliminá la flag y el código del flujo anterior.
