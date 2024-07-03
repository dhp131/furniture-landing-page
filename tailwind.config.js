/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./js/**/*.js"],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "15px",
			},
		},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "960px",
			xl: "1200px",
		},
		fontFamily: {
			primary: "DM Serif Display",
			secondary: "Jost",
		},
		backgroundImage: {
			hero: "url(/assets/hero/bg.jpg)",
			grid: "url(/assets/grid.png)",
		},
		extend: {
			colors: {
				primary: {
					DEFAULT: "#292f36",
					hover: "#343e43",
				},
				secondary: "#4d5043",
				accent: {
					DEFAULT: "#cda274",
					secondary: "#f4f0ec",
					hover: "#b88c5d",
				},
			},
			fontSize: {
				"-22px": ["-22px", "1.25rem"],
				"-20px": ["-20px", "1.25rem"],
			},
		},
	},
	plugins: [],
};
