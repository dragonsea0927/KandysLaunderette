/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
		fontSize: {
			xs: ".75rem",
			sm: ".8rem",
			tiny: ".9rem",
			base: "1rem",
			medium: "1.15rem",
			lg: "1.25rem",
			xl: "1.5rem",
			"2xl": "1.75rem",
			"3xl": "1.85rem",
			"4xl": "2rem",
			"5xl": "3rem",
			"6xl": "4rem",
			"7xl": "5rem",
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",

			// Base colors Variables
			white: "#fff",
			black: "#111",
			pureBlack: "#000",
			grey: "#b3b3b3",
			lightGrey: "#fafafa",

			// Main colors
			blue: "#053972",
			darkblue: "#042c56",
			yellow: "#FDA730",
			darkYellow: "#e69601",
			orange: "#f56a00",
			green: "#5ea975",
			marron: "#cd5972",
		},
	},
	plugins: [],
};
