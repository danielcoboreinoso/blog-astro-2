---
title: 'CSS moderno: variables, grid y contenedores'
description: 'Tres herramientas de CSS que hacen tus estilos más limpios y adaptables.'
pubDate: 'Oct 22 2026'
heroImage: '../../assets/blog-placeholder-4.jpg'
---

El CSS de hoy tiene poco que ver con el de hace unos años. Ya no necesitamos librerías para casi nada: el propio lenguaje cubre la mayoría de necesidades. Estas son tres de mis herramientas favoritas.

## Variables personalizadas

Las custom properties permiten centralizar colores, espaciados o tipografías:

```css
:root {
  --color-accent: #2337ff;
  --spacing: 1rem;
}

.boton {
  color: var(--color-accent);
  padding: var(--spacing);
}
```

Cambiar un valor en un solo lugar actualiza todo el sitio. Además, se pueden redefinir por contexto, ideal para temas claros y oscuros.

## Grid para layouts bidimensionales

`display: grid` brilla cuando controlas filas y columnas a la vez:

```css
.galeria {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}
```

Ese patrón crea una cuadrícula adaptable sin escribir una sola media query.

## Consultas de contenedor

Con `@container` el diseño responde al tamaño del **componente**, no al de la ventana:

```css
.tarjeta {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .tarjeta h2 { font-size: 1.5rem; }
}
```

Es perfecto para componentes reutilizables que viven en contextos distintos. Si aún no las has usado, te recomiendo darles una oportunidad: cambian la forma de pensar el diseño responsive.
