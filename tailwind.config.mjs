import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#7c5cfc',
				dark: '#0a0a0b',
				surface: '#111113',
				border: '#1c1c1f',
				'border-light': '#2a2a2e',
				gray: '#8b8b8e',
				white: '#ededef',
				muted: '#6b6b6e',
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
