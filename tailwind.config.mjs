/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				serif: ['David Libre', 'serif'],
			},
			colors: {
				'brand-green': {
					DEFAULT: '#1e6b25',
					soft: '#d4ded5'
				}
			}
		},
	},
	plugins: [
		require('tailwindcss-animated')
	],
}
