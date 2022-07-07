const defaultTheme = require('tailwindcss/defaultTheme')

let containerScreens = Object.assign({}, defaultTheme.screens)

// Delete the 2xl breakpoint from the object
delete containerScreens['2xl']

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			container: {
				screens: containerScreens
			},
			fontFamily: {
				'sans': ['Maven Pro', ...defaultTheme.fontFamily.sans],
			},
		}
	},
	plugins: [],
}
