// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://danielcoboreinoso.github.io',
	base: '/blog-astro-2',
	integrations: [mdx(), sitemap()],
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Manrope',
			cssVariable: '--font-manrope',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/manrope-variable.woff2'],
						weight: '400 800',
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],
});
