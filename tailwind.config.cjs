const { tailwindExtractor } = require('tailwindcss/lib/lib/purgeUnusedStyles');
const colors = require('tailwindcss/colors')

module.exports = {
	mode: 'jit',
	purge: {
		content: ['./src/**/*.{html,js,svelte,ts}'],
		options: {
			defaultExtractor: (content) => [
				// If this stops working, please open an issue at https://github.com/svelte-add/tailwindcss/issues rather than bothering Tailwind Labs about it
				...tailwindExtractor(content),
				// Match Svelte class: directives (https://github.com/tailwindlabs/tailwindcss/discussions/1731)
				...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(
					([group]) => group
				)
			],
			keyframes: true
		}
	},
	theme: {
		fontFamily: {
			sans: ['Karla', 'sans-serif'],
			display: ['Caudex', 'serif']
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			gray: colors.warmGray,
			raspberry: '#EF6373',
			mint: {
				DEFAULT: '#5E8225',
				600: '#656B5C',
				700: '#232C16',
			},
			muffin: {
				DEFAULT: '#9F6145',
				600: '#5D3F31',
				100: '#FBF7F6',
			},
		},
		extend: {}
	},
	variants: {
		extend: {}
	},
	plugins: [require('@tailwindcss/typography')]
};
