import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [sveltekit()],

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},

	server: {
		fs: {
			allow: ['./public', './src', './static']
		}
	},

	build: {
		minify: 'esbuild',
		esbuild: {
			minifySyntax: true,
			minifyWhitespace: true,
			minifyIdentifiers: true
		},
		sourcemap: true
	}
});
