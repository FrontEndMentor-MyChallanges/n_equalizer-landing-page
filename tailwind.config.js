/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['index.html', './src/*.{js,html}'],
	theme: {
		extend: {},
	},
	plugins: [],
};
