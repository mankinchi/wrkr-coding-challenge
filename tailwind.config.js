/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{ts,tsx}"],
	theme: {
		extend: {
			keyframes: {
				pulseRings: {
					"0%": {
						top: "-5px",
						right: "-5px",
						bottom: "-5px",
						left: "-5px",
						opacity: 1,
					},
					"100%": {
						top: "-20px",
						right: "-20px",
						bottom: "-20px",
						left: "-20px",
						opacity: 0,
					},
				},
			},
		},
	},
	plugins: [],
};
