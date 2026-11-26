---
title: "Background jobs y workflows durables"
section: code
summary: "Ejecutan tareas lentas o de varios pasos fuera de la solicitud, con reintentos para que se completen aunque algo falle."
---

## Qué son <!-- heading-id: what-it-is -->

Algunas tareas no deberían ejecutarse mientras un usuario espera que cargue una página: mandar correos, procesar archivos subidos, hacer scraping, llamar a modelos de IA lentos, o cobrar con tarjeta y después aprovisionar una cuenta. Con una cola de jobs, esas tareas se ejecutan en segundo plano y se vuelven a intentar cuando fallan. Un workflow durable también divide un proceso largo en pasos y guarda el avance después de cada uno. Si hay una caída o un deploy, la ejecución se reanuda donde se detuvo en vez de empezar de nuevo o ejecutar un paso dos veces.

## Cuándo los necesitás <!-- heading-id: when-you-need-it -->

- Una solicitud supera el tiempo límite porque ejecuta demasiadas tareas.
- Hay que ejecutar tareas en horarios programados, como importaciones nocturnas o correos de recordatorio.
- Un proceso tiene varios pasos que llaman a servicios externos y, si falla en un paso intermedio, deja el sistema en un estado incorrecto.
- Una ejecución de un agente de IA tarda minutos, no segundos.

La mayoría de los bugs acá se debe a los reintentos. Suponé que cada paso puede ejecutarse más de una vez y hacelo idempotente, es decir, seguro de repetir: verificá si ya se mandó el correo o ya se hizo el cobro antes de hacerlo de nuevo.

## Opciones populares <!-- heading-id: popular-choices -->

- **Trigger.dev**: background jobs y tareas largas en TypeScript de código abierto, con reintentos, programación y un dashboard.
- **Inngest**: funciones durables que se activan por eventos. Inngest reintenta los pasos que fallan y guarda el progreso de cada uno. Las funciones se ejecutan en tu plataforma serverless actual.
- **Cloudflare Workflows and Queues**: workflows durables de varios pasos y colas de mensajes incluidos en Cloudflare Workers.
- **Temporal**: una herramienta potente para ejecuciones durables. Se usa para procesos complejos y críticos para el negocio.
- **BullMQ**: cola de jobs para Node.js que usa Redis. Es simple y fácil de entender si ya usás Redis.
- **Graphile Worker**: cola de jobs que se ejecuta en Postgres, así que no necesitás otro servicio.

## Qué pedirle a tu agente <!-- heading-id: what-to-tell-your-agent -->

> Sacá [el envío de correos de bienvenida y el procesamiento de archivos subidos] de la solicitud y ejecutalos como background jobs con [Trigger.dev / Inngest / Cloudflare Workflows]. Dividí cada proceso en pasos con nombre. Reintentá los pasos fallidos con backoff y hacé que sea seguro ejecutar cada paso dos veces. Agregá un job programado para [la importación nocturna]. Mostrame dónde consultar las ejecuciones fallidas.
