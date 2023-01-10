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
			"5xl": "2.5rem",
			"6xl": "3rem",
			"7xl": "4rem",
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
			pink: "#dd4577",
			darkPink: "#950e3b",
			fadedPink: "#ff8fb4",
			fadedPinkTwo: "#fcbfd4",
			fadedPinkThree: "#f2739d",
		},
	},
	plugins: [],
};
