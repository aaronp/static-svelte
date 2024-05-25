import adapter from '@sveltejs/adapter-static';

// see https://kit.svelte.dev/docs/adapter-static 
// for gh-pages hosting
const config = {
    kit: {
		paths: {
			base: 'https://aaronp.github.io/static-svelte/',
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