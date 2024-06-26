import adapter from '@sveltejs/adapter-static';

// see https://kit.svelte.dev/docs/adapter-static 
// for gh-pages hosting
// base should be https://aaronp.github.io/static-svelte
const config = {
    kit: {
		paths: {
			base: '/sveltekit-gh-pages',
		},
		adapter: adapter({
			fallback: '404.html',

			pages: 'build',
			assets: 'build',
			precompress: false,
			strict: true
		})
	}
};

export default config;