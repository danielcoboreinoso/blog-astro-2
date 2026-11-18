---
title: 'Introducción a Astro: construye sitios rápidos'
description: 'Qué es Astro, por qué destaca y cómo crear tu primer proyecto paso a paso.'
pubDate: 'Oct 15 2026'
heroImage: '../../assets/blog-placeholder-3.jpg'
---

Astro es un generador de sitios estáticos que ha ganado mucha popularidad en los últimos años. Su idea principal es simple: **envía al navegador solo HTML y CSS**, y añade JavaScript únicamente cuando un componente lo necesita de verdad. El resultado son webs muy rápidas por defecto.

## ¿Por qué Astro?

- **Cero JavaScript por defecto.** No pagas el coste de un framework en el cliente si no lo usas.
- **Agnóstico de framework.** Puedes mezclar componentes de React, Vue, Svelte o los propios `.astro`.
- **Content Collections.** Los archivos Markdown o MDX se validan con un esquema y tienen tipos automáticos.
- **Integraciones listas.** RSS, sitemap, imágenes optimizadas y MDX se añaden con un par de comandos.

## Tu primer proyecto

Crear un proyecto es tan sencillo como ejecutar:

```bash
npm create astro@latest
```

El asistente te preguntará por el nombre, la plantilla y si quieres instalar dependencias y usar TypeScript. Yo elegí la plantilla de blog, que incluye todo lo necesario para empezar a escribir.

## La estructura que más importa

```text
src/
├── pages/      → cada archivo es una ruta
├── layouts/    → plantillas reutilizables
├── components/ → piezas de interfaz
├── content/    → artículos en Markdown/MDX
└── assets/     → imágenes y fuentes
```

Con eso ya tienes suficiente para publicar tu primer sitio. En próximos artículos hablaré de cómo desplegarlo en GitHub Pages y de cómo exprimir las Content Collections.
