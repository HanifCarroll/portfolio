---
title: "Pagos y facturación"
section: code
summary: "Cobrá, gestioná suscripciones y sincronizá tu aplicación con lo que pagó cada cliente."
---

## Qué son <!-- heading-id: what-it-is -->

Un proveedor de pagos procesa tarjetas y gestiona páginas de checkout, facturas, impuestos y suscripciones. Tu aplicación tiene que responder a lo que pase ahí. El proveedor manda webhooks con eventos como «checkout completado» o «suscripción cancelada», y tu aplicación actualiza a qué tiene acceso cada usuario. Algunos proveedores actúan como merchant of record y también se ocupan del impuesto sobre las ventas y el IVA en tu nombre.

## Cuándo los necesitás <!-- heading-id: when-you-need-it -->

- Cobrás por tu producto mediante compras únicas, suscripciones, créditos o según el uso.
- Los clientes pueden subir o bajar de plan, cancelar o tener un pago rechazado, y tu aplicación tiene que mantener el estado correcto en todos esos casos.

Lo difícil son los webhooks, no la página de checkout. Los eventos pueden llegar dos veces, tarde o fuera de orden. Verificá la firma de cada webhook y guardá el ID del evento para no volver a procesar los duplicados. Definí el acceso a partir del estado más reciente, no del último evento que llegó. Nunca confíes en un precio o un plan que venga del navegador.

## Opciones populares <!-- heading-id: popular-choices -->

- **Stripe**: la opción por defecto. Checkout, Billing para suscripciones, precios según el uso y Stripe CLI para probar webhooks en local.
- **Paddle**: merchant of record que gestiona el impuesto sobre las ventas y el IVA en todo el mundo para ventas de software.
- **Lemon Squeezy**: merchant of record para desarrolladores independientes y productos digitales. Ahora es parte de Stripe.
- **Polar**: merchant of record de código abierto para desarrolladores que venden software, suscripciones y planes según el uso.

## Qué pedirle a tu agente <!-- heading-id: what-to-tell-your-agent -->

> Agregá facturación [por suscripción] con [Stripe] y usá Checkout alojado. Procesá estos webhooks: [checkout completed, invoice paid, subscription updated, subscription deleted]. Verificá la firma de cada webhook, guardá los IDs de los eventos procesados para ignorar los duplicados y definí el acceso de cada cliente según el estado actual de su suscripción. Escribí pruebas que vuelvan a enviar eventos duplicados y fuera de orden. Usá Stripe CLI para reenviar webhooks durante el desarrollo.
