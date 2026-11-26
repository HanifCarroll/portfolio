---
title: "Infraestructura desde el código"
section: production
summary: "Declara bases de datos, colas y servicios en el código para que la misma configuración se ejecute en local y en la nube."
---

## Qué es <!-- heading-id: what-it-is -->

En vez de configurar todo con clics en la consola de la nube o escribir archivos de configuración separados, declarás la infraestructura en el código: bases de datos, colas, buckets de almacenamiento, cron jobs y secretos. La herramienta aprovisiona recursos equivalentes en local para desarrollar y en tu cuenta de nube cuando hacés el deploy.

## Cuándo la necesitás <!-- heading-id: when-you-need-it -->

- Tu aplicación necesita más que un servidor y una base de datos.
- El entorno de desarrollo local no coincide con producción y los bugs solo aparecen después del deploy.
- Configurar un entorno nuevo lleva un día de trabajo manual.

Los agentes no pueden usar consolas en la nube con clics de forma confiable, pero sí pueden leer y editar código. Si definís la infraestructura en el código, un agente puede inspeccionarla, cambiarla y revisarla como cualquier otra parte del código.

## Opciones populares <!-- heading-id: popular-choices -->

- **Encore**: declara APIs, bases de datos, Pub/Sub, cachés, cron jobs y secretos como valores tipados en TypeScript o Go. Los ejecuta en local y los aprovisiona en tu cuenta de AWS o GCP. Incluye un servidor MCP local para que los agentes puedan inspeccionar esquemas, llamar a endpoints y leer traces.
- **SST**: define infraestructura de AWS y Cloudflare en TypeScript junto al código de tu aplicación, con un modo de desarrollo local en vivo.
- **Pulumi**: infraestructura como código de propósito general en TypeScript, Python, Go y otros lenguajes, para cualquier nube.
- **Terraform / OpenTofu**: el estándar declarativo de uso establecido, escrito en HCL.

## Qué pedirle a tu agente <!-- heading-id: what-to-tell-your-agent -->

> Definí nuestra infraestructura con [Encore / SST] en vez de configurarla a mano. Declará en el código la base de datos, [la cola, el bucket de almacenamiento y el cron job] y los secretos. Hacé que `[dev command]` inicie todo en local y documentá el comando de deploy en AGENTS.md. No guardes valores de secretos en el repositorio.
