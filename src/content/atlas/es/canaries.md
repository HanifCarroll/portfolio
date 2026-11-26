---
title: "Canaries y pruebas sintéticas"
section: production
summary: "Pruebas con scripts que siguen verificando tu aplicación real después del deploy para avisarte de las fallas antes de que las noten los usuarios."
---

## Qué son <!-- heading-id: what-it-is -->

Una prueba sintética es un script que usa tu aplicación ya desplegada como lo haría un usuario: inicia sesión, hace una búsqueda, completa un checkout. Se ejecuta en horarios programados o después de cada deploy, en staging o producción, y te manda una alerta si falla. Un canary release es una idea relacionada: publicá primero una versión nueva para una parte chica del tráfico y verificá si hay errores antes de habilitarla para todos.

## Cuándo los necesitás <!-- heading-id: when-you-need-it -->

- Las pruebas pasan en CI, pero la aplicación falla en producción por la configuración, los secretos, un servicio externo o datos que solo existen ahí.
- Los flujos importantes, como iniciar sesión, pagar o ejecutar un agente de IA, fallan durante horas sin que nadie lo note.
- Hacés deploys seguido, sobre todo cuando los agentes publican muchos cambios chicos.

Limitá las pruebas sintéticas a unos pocos recorridos críticos. Dales cuentas y datos de prueba propios para que nunca afecten a clientes reales.

## Opciones populares <!-- heading-id: popular-choices -->

- **Checkly**: ejecuta scripts de Playwright y pruebas de API en horarios programados desde muchas regiones. La configuración se define como código en tu repositorio.
- **Playwright programado**: ejecutá tus pruebas end-to-end existentes contra staging o producción con un cron en CI.
- **Datadog Synthetic Monitoring / Grafana Synthetic Monitoring**: pruebas sintéticas junto al resto de tu [telemetría](/es/atlas/telemetry/).
- **Uptime Kuma**: monitoreo de disponibilidad que alojás vos, para endpoints y verificaciones simples.
- **Publicaciones graduales**: usá [feature flags](/es/atlas/feature-flags/) o los deploys por porcentaje de tu plataforma para publicar primero para un grupo chico.

## Qué pedirle a tu agente <!-- heading-id: what-to-tell-your-agent -->

> Agregá pruebas sintéticas para [el inicio de sesión, el checkout y el dashboard principal] con [Checkly / Playwright programado]. Ejecutalas después de cada deploy a staging y cada [15 minutos] en producción, con cuentas de prueba dedicadas. Mandá una alerta a [canal] cuando una prueba falle dos veces seguidas e incluí una captura de pantalla y el trace.
