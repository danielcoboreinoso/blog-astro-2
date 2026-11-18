---
title: 'JavaScript: async/await sin dolor'
description: 'Entiende las promesas y escribe código asíncrono legible con async/await.'
pubDate: 'Oct 29 2026'
heroImage: '../../assets/blog-placeholder-2.jpg'
---

Trabajar con operaciones asíncronas es parte del día a día en desarrollo web: peticiones a APIs, lectura de archivos, temporizadores... Durante mucho tiempo esto se resolvía con callbacks anidadas, pero hoy contamos con `async/await`.

## Promesas, la base

Una `Promise` representa un valor que estará disponible en el futuro:

```js
fetch('/api/posts')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

Funciona, pero encadenar `.then()` se vuelve difícil de leer cuando la lógica crece.

## La misma idea con async/await

```js
async function cargarPosts() {
  try {
    const response = await fetch('/api/posts');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```

El código se lee de arriba abajo como si fuera síncrono, pero sigue sin bloquear el hilo principal. La palabra clave `await` solo se puede usar dentro de una función declarada con `async`.

## Un consejo práctico

Si varias promesas no dependen unas de otras, lánzalas en paralelo con `Promise.all` en lugar de esperarlas una por una:

```js
const [usuario, posts] = await Promise.all([
  fetch('/api/usuario').then((r) => r.json()),
  fetch('/api/posts').then((r) => r.json()),
]);
```

Es un pequeño cambio que mejora bastante el rendimiento. Dominar bien este concepto te ahorrará más de un dolor de cabeza.
