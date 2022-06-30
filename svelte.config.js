import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		prerender: {
			default: true,
		},

		paths: {
			base: dev ? '' : '/site',
		},

		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	}
};

export default config;
