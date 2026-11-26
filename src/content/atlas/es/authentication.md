---
title: "Autenticación"
section: code
summary: "Permite que los usuarios inicien sesión, mantengan la sesión iniciada y accedan solo a lo que tienen permitido."
---

## Qué es <!-- heading-id: what-it-is -->

Con la autenticación verificás la identidad de un usuario mediante contraseñas, magic links, inicio de sesión con cuentas de redes sociales, passkeys o códigos de dos factores. Suele incluir sesiones, restablecimiento de contraseñas, verificación de correo y gestión de organizaciones o roles.

## Cuándo la necesitás <!-- heading-id: when-you-need-it -->

- Tu aplicación tiene cuentas de usuario.
- Necesitás equipos, roles o invitaciones.
- Tu producto expone una API o un servidor MCP donde otras aplicaciones o agentes inician sesión.

No dejes que un agente escriba la autenticación desde cero. Es fácil cometer errores difíciles de detectar y esos errores pueden salir caros. Elegí una biblioteca y pedile al agente que la integre.

## Opciones populares <!-- heading-id: popular-choices -->

- **Better Auth**: biblioteca de autenticación en TypeScript que no depende de un framework. Tiene más de 50 plugins, incluidos passkeys, 2FA, organizaciones, un proveedor OAuth y autenticación de MCP. Se ejecuta en tu aplicación con tu propia base de datos.
- **Clerk**: autenticación alojada con una interfaz de inicio de sesión ya armada y gestión de usuarios. Es la opción más rápida de configurar y se vuelve paga a medida que crece el uso.
- **Auth.js**: la opción de código abierto que existe desde hace años. Antes se llamaba NextAuth.
- **Supabase Auth**: viene incluido en Supabase si ese es tu backend.

## Qué pedirle a tu agente <!-- heading-id: what-to-tell-your-agent -->

> Agregá autenticación con [Better Auth] y usá la base de datos que ya tenemos. Admití [correo y contraseña, inicio de sesión con Google y passkeys]. Protegé todas las rutas debajo de [/app] en el servidor, no solo en la interfaz. Escribí pruebas que verifiquen que se rechazan una solicitud sin autenticar y una solicitud de otro usuario.
