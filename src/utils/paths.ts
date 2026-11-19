// Devuelve una ruta interna respetando el `base` configurado en Astro
// (necesario para que los enlaces funcionen en GitHub Pages).
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function withBase(path: string): string {
	const normalized = path === '/' ? '/' : path.startsWith('/') ? path : `/${path}`;
	const withTrailingSlash = /\.[a-z0-9]+$/i.test(normalized) || normalized.endsWith('/') ? normalized : `${normalized}/`;
	const fullPath = withTrailingSlash === '/' ? `${base}/` : `${base}${withTrailingSlash}`;
	return fullPath;
}
