---
title: "Base de datos y migraciones"
section: code
summary: "Guardá los datos de tu aplicación y modificá su estructura de forma segura a medida que la aplicación crece."
---

## Qué son <!-- heading-id: what-it-is -->

En la base de datos se guardan los datos permanentes de tu aplicación. Las migraciones son archivos chicos con versiones que modifican la estructura en un orden definido, por ejemplo, al agregar una columna o una tabla. Se guardan en el repositorio junto con el código para que todos los entornos, desde tu computadora hasta producción, tengan el mismo esquema. Con un ORM o un query builder, tu código puede leer y escribir datos con tipos que coinciden con ese esquema.

## Cuándo las necesitás <!-- heading-id: when-you-need-it -->

- Tu aplicación guarda datos que tienen que seguir disponibles después de un reinicio.
- Más de un entorno o más de una persona trabaja con la misma base de datos.
- Cambiaste a mano una tabla en producción y después no te acordabas de qué habías hecho.

Los agentes escriben migraciones rápido y una migración incorrecta puede destruir datos. Revisalas como cualquier otro cambio riesgoso. Preferí los cambios que agregan antes de eliminar y hacé una copia de seguridad antes de ejecutar cualquiera que borre o reescriba datos.

## Opciones populares <!-- heading-id: popular-choices -->

- **Postgres**: la opción relacional por defecto. Supabase, Neon y muchos otros proveedores ofrecen alojamiento.
- **SQLite / Cloudflare D1 / Turso**: SQLite en producción. Simple, rápido y barato, especialmente en el edge.
- **Supabase**: Postgres alojado con autenticación, almacenamiento, actualizaciones en tiempo real y su propia CLI de migraciones.
- **Drizzle ORM**: ORM liviano para TypeScript con consultas similares a SQL y migraciones generadas automáticamente.
- **Prisma**: ORM popular para TypeScript con un archivo de esquema, cliente generado y migraciones.
- **Atlas**: migraciones declarativas de esquema para muchas bases de datos, con linting que marca cambios destructivos.
- **PGlite**: Postgres compilado a WebAssembly. Se ejecuta dentro del proceso para que sea fácil hacer pruebas rápidas con una base de datos real.

## Qué pedirle a tu agente <!-- heading-id: what-to-tell-your-agent -->

> Configurá [Postgres] con [Drizzle] y guardá las migraciones con versiones en el repositorio. Generá una migración para cada cambio de esquema en vez de modificar la base de datos a mano y nunca cambies una migración que ya se ejecutó. Hacé que los cambios de esquema sean compatibles con las versiones anteriores: primero agregá, después migrá los datos y más adelante eliminá. Ejecutá las pruebas con una base de datos real, usando [PGlite / un contenedor de prueba], no mocks.
