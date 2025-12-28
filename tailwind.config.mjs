/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#6665f1',
				dark: '#000000',
				gray: '#434354',
				white: '#ffffff',
			},
			fontFamily: {
				sans: ['Poppins', 'sans-serif'],
			},
			maxWidth: {
				container: '1440px',
			},
			screens: {
				xs: '475px',
			},
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
				'128': '32rem',
			},
		},
	},
	plugins: [],
};

