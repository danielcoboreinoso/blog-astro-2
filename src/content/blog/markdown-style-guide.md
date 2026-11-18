---
title: 'Guía de estilo Markdown'
description: 'Ejemplos de la sintaxis básica de Markdown que puedes usar al escribir en Astro.'
pubDate: 'Nov 12 2026'
heroImage: '../../assets/blog-placeholder-1.jpg'
---

Esta es una guía rápida con la sintaxis de Markdown que puedes usar en los artículos del blog.

## Encabezados

Los elementos `<h1>` a `<h6>` representan seis niveles de encabezado. `<h1>` es el nivel más alto y `<h6>` el más bajo.

# H1

## H2

### H3

#### H4

##### H5

###### H6

## Párrafo

Un párrafo se escribe simplemente como texto. Si dejas una línea en blanco entre dos bloques, se convierten en párrafos separados. Puedes usar **negrita**, _cursiva_ y `código en línea` sin esfuerzo.

## Imágenes

### Sintaxis

```markdown
![Texto alternativo](./ruta/completa/o/relativa/de/la/imagen)
```

### Resultado

![imagen de ejemplo](../../assets/blog-placeholder-about.jpg)

## Citas

El elemento de cita representa contenido procedente de otra fuente:

> No te comuniques compartiendo memoria, comparte memoria comunicándote.<br>
> — <cite>Rob Pike</cite>

También puedes usar Markdown dentro de una cita:

> **Importante**: las citas admiten _cursiva_, **negrita** y `código`.

## Tablas

### Sintaxis

```markdown
| Cursiva   | Negrita  | Código |
| --------- | -------- | ------ |
| _cursiva_ | **negra** | `code` |
```

### Resultado

| Cursiva   | Negrita  | Código |
| --------- | -------- | ------ |
| _cursiva_ | **negra** | `code` |

## Bloques de código

Usa tres backticks para crear un bloque de código. Añadiendo el nombre del lenguaje después de los primeros backticks obtienes resaltado de sintaxis:

```js
function saludar(nombre) {
  console.log(`Hola, ${nombre}!`);
}
```

## Listas

### Lista ordenada

1. Primer elemento
2. Segundo elemento
3. Tercer elemento

### Lista sin ordenar

- Elemento
- Otro elemento
- Y otro más

### Lista anidada

- Fruta
  - Manzana
  - Naranja
  - Plátano
- Lácteos
  - Leche
  - Queso

## Otros elementos

Puedes usar HTML directamente cuando lo necesites: <abbr title="Graphics Interchange Format">GIF</abbr>, H<sub>2</sub>O, X<sup>n</sup>, <kbd>Ctrl</kbd> + <kbd>C</kbd> o <mark>texto resaltado</mark>.
