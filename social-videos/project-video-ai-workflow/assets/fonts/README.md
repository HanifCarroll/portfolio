# Bundled Font Assets

This reel uses repository-local Fontsource WOFF2 files so HyperFrames does not depend on host fonts or a network request during preview and render.

| Internal family           | Source package              | Package version | Bundled files                                                  | License                                                    |
| ------------------------- | --------------------------- | --------------- | -------------------------------------------------------------- | ---------------------------------------------------------- |
| `Portfolio EB Garamond`   | `@fontsource/eb-garamond`   | `5.2.7`         | `eb-garamond-latin-700-normal.woff2`                           | SIL Open Font License 1.1; see `LICENSE-eb-garamond.txt`   |
| `Portfolio IBM Plex Mono` | `@fontsource/ibm-plex-mono` | `5.2.7`         | `ibm-plex-mono-latin-700-normal.woff2`                         | SIL Open Font License 1.1; see `LICENSE-ibm-plex-mono.txt` |
| `Portfolio Inter`         | `@fontsource/inter`         | `5.2.8`         | `inter-latin-400-normal.woff2`, `inter-latin-700-normal.woff2` | SIL Open Font License 1.1; see `LICENSE-inter.txt`         |

The files were copied without modification from `node_modules/@fontsource/<family>/files/`. The receipt source digest includes the font bytes, this provenance note, and each license file.
