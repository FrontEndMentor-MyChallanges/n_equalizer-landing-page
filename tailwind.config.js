/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['index.html', './src/*.{js,html}'],
	theme: {
		extend: {
			colors: {
				customPrimary: '#fa7453',
				customHoverOrange: '#ffb964',
				customHoverBlue: '#66e2dc',
				customLight: '#fcfaf9',
				customDark: '#191826',
			},
			fontFamily: {
				ibm: ['IBM Plex Sans', defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
