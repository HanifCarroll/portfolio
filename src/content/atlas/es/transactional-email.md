---
title: "Correo transaccional"
section: production
summary: "Manda los correos que genera tu aplicación, como enlaces de inicio de sesión, recibos y alertas, para que lleguen a sus destinatarios."
---

## Qué es <!-- heading-id: what-it-is -->

Los correos transaccionales son los que tu aplicación manda a una persona por algo que hizo: verificá tu correo, restablecé tu contraseña, acá está tu recibo o tu informe está listo. Un proveedor de correo los manda, gestiona los rebotes y los reclamos, y te da los registros DNS (SPF, DKIM, DMARC) para que no terminen en spam. Con herramientas de plantillas de correo podés armar esos mensajes con componentes en vez de escribir tablas HTML a mano.

## Cuándo lo necesitás <!-- heading-id: when-you-need-it -->

- Tu aplicación tiene registro, enlaces de inicio de sesión, restablecimiento de contraseñas, recibos o notificaciones.
- Tus correos terminan en spam o no sabés si se entregaron.

Separá el correo transaccional del correo de marketing. Usá un dominio o subdominio de envío propio para que una campaña de marketing no perjudique la entrega de los enlaces de inicio de sesión.

## Opciones populares <!-- heading-id: popular-choices -->

- **Resend**: API de correo para desarrolladores con buen soporte para TypeScript. La hizo el equipo que desarrolló React Email.
- **Postmark**: conocido por la entrega rápida y confiable de correo específicamente transaccional.
- **Amazon SES**: muy barato cuando mandás muchos correos, pero requiere más configuración.
- **Cloudflare Email Sending**: mandá correos desde Cloudflare Workers.
- **React Email**: armá plantillas de correo como componentes de React que se renderizan bien en clientes de correo comunes.

## Qué pedirle a tu agente <!-- heading-id: what-to-tell-your-agent -->

> Configurá el correo transaccional con [Resend / Postmark] en un subdominio [mail.example.com] y pasame los registros SPF, DKIM y DMARC que tengo que agregar. Armá plantillas con [React Email] para [enlace de inicio de sesión, recibo, restablecimiento de contraseña]. Mandá correos desde un [background job](/es/atlas/background-jobs/) con reintentos. En desarrollo, registrá los correos en los logs en vez de mandarlos.
