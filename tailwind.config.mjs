import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#7c5cfc',
				dark: '#2a2a32',
				surface: '#363640',
				border: '#3a3a42',
				'border-light': '#4d4d57',
				gray: '#8b8b8e',
				white: '#ededef',
				muted: '#b8b8bd',
				'input-bg': '#45454f',
			},
			fontFamily: {
				sans: ['Inter Variable', 'Inter', 'system-ui', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace'],
			},
			maxWidth: {
				container: '1280px',
			},
			screens: {
				xs: '475px',
			},
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
				'128': '32rem',
			},
			fontSize: {
				'display': ['3.25rem', { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '500' }],
				'display-sm': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '500' }],
				'heading': ['1.75rem', { lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '500' }],
				'heading-sm': ['1.25rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '500' }],
				'label': ['0.6875rem', { lineHeight: '1', letterSpacing: '0.08em', fontWeight: '500' }],
			},
		},
	},
	plugins: [typography],
};
