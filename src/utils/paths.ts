// Devuelve una ruta interna respetando el `base` configurado en Astro
// (necesario para que los enlaces funcionen en GitHub Pages).
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function withBase(path: string): string {
	if (path === '/') return base || '/';
	return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}
