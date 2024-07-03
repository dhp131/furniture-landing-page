/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./js/**/*.{js}"],
	theme: {
		//set lại mặc định cho page
		container: {
			padding: {
				default: "15px",
			},
		},
		screen: {
			sm: "640px",
			md: "768px",
			lg: "960px",
			xl: "1200px",
		},
		fontFamily: {
			primary: "DM Serif Display ",
			secondary: "Jost",
		},
		backgroundImage: {
			hero: "url(/assets/hero/bg.jpg)",
			grid: "url(/assets/grid.png)",
		},
		extend: {
			colors: {
				primary: {
					default: "#292f36",
					hover: "#343e43",
				},
				secondary: "#4d5043",
				accent: {
					default: "#cda274",
					secondary: "#f4f0ec",
					hover: "#b88c5d",
				},
			},
		},
	},
	plugins: [],
};
