---
title: "Telemetría (traces, métricas y logs)"
section: production
summary: "Registra qué hace tu sistema mientras se ejecuta para que las personas y los agentes puedan ver por qué falló algo."
---

## Qué es <!-- heading-id: what-it-is -->

La telemetría son los datos que tu aplicación genera sobre su propia ejecución. Los logs registran eventos. Las métricas cuentan cosas a lo largo del tiempo, como la frecuencia de las solicitudes o los errores. Con los traces podés seguir una solicitud a medida que pasa por tus servicios y ver cuánto tardó cada parte. Las herramientas de seguimiento de errores agrupan las caídas y adjuntan el stack trace.

## Cuándo la necesitás <!-- heading-id: when-you-need-it -->

- Algo está lento o falla en producción y no sabés en qué parte.
- Estás depurando con `console.log`, volviendo a desplegar y esperando.
- Querés que un agente pueda diagnosticar problemas sin ayuda.

Un agente que puede leer logs y traces puede encontrar la causa de un bug en un solo intento. Sin esos datos, tenés que copiar vos los resultados de un lado al otro. [Más sobre cómo darles a los agentes herramientas para verificar su propio trabajo](/es/blog/give-ai-agents-tools-to-verify-their-own-work/).

## Opciones populares <!-- heading-id: popular-choices -->

- **OpenTelemetry SDK + Grafana Cloud**: OpenTelemetry es el estándar independiente del proveedor para recopilar traces, métricas y logs. Grafana Cloud aloja esos datos y tiene un plan gratuito.
- **Sentry**: seguimiento de errores con stack traces y releases, además de tracing de rendimiento.
- **Honeycomb**: buena opción para explorar traces y eventos con mucho detalle.
- **Archivos de logs estructurados**: para trabajar en local, es muy útil guardar logs JSON en un archivo que el agente pueda leer con `tail`.

## Qué pedirle a tu agente <!-- heading-id: what-to-tell-your-agent -->

> Agregá tracing con OpenTelemetry y logs estructurados a esta aplicación. Exportalos a [Grafana Cloud]. Registrá traces de las solicitudes entrantes, las consultas a la base de datos y las llamadas salientes a APIs. En desarrollo, escribí los logs también en `logs/app.log` para que puedas leerlos mientras depurás. Nunca registres secretos ni datos personales.
