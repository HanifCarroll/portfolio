---
title: "Escaneo de secretos"
section: guardrails
summary: "Detecta claves de API, contraseñas y tokens antes de que hagas commit o push."
---

## Qué es <!-- heading-id: what-it-is -->

Un escáner de secretos busca en tu código y en el historial de git cosas que parecen credenciales: claves de API, contraseñas de bases de datos, claves privadas y tokens de acceso. Si lo ejecutás como hook de pre-commit, impide el commit. Si lo ejecutás en CI, hace fallar el build. Si lo ejecutás en todo el historial, detecta secretos que se incorporaron en un commit y se «eliminaron», pero siguen en el repositorio.

## Cuándo lo necesitás <!-- heading-id: when-you-need-it -->

- Siempre, en cualquier repositorio con acceso a servicios reales.
- Los agentes trabajan en tu repositorio. Leen archivos `.env` y pueden pegar una clave real en una prueba, un fixture o un log.
- Estás por hacer público un repositorio o pasárselo a otro equipo.

Si se filtra un secreto, borrar la línea no alcanza. Sigue en el historial de git y es posible que alguien ya lo haya copiado. Rotá primero la clave y después eliminá las copias que quedaron.

## Opciones populares <!-- heading-id: popular-choices -->

- **Gitleaks**: escáner rápido de código abierto para repositorios e historiales de git. Es fácil ejecutarlo como hook de pre-commit o en CI.
- **TruffleHog**: escanea git, almacenamiento en la nube y otros recursos. Puede comprobar si una clave que encontró todavía funciona.
- **GitHub secret scanning and push protection**: viene incluido en GitHub. Bloquea los pushes que contienen formatos de token conocidos.
- **detect-secrets**: escáner de Yelp que mantiene un archivo de referencia para que solo revises los hallazgos nuevos.

## Qué pedirle a tu agente <!-- heading-id: what-to-tell-your-agent -->

> Agregá [Gitleaks] a este repositorio como hook de pre-commit y como paso de CI que escanee todo el historial de git. Informá los hallazgos sin imprimir los valores de los secretos. Asegurate de que git ignore `.env` y archivos similares, agregá un `.env.example` con valores de ejemplo y usá solo credenciales falsas en pruebas y fixtures.
