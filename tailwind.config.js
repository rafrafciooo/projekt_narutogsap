/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				zentry: ["zentry", "sans-serif"],
				general: ["general", "sans-serif"],
				"circular-web": ["circular-web", "sans-serif"],
				"robert-medium": ["robert-medium", "sans-serif"],
				"robert-regular": ["robert-regular", "sans-serif"],
			},
			colors: {
				blue: {
					50: "#E3F2FD", // Jasny błękit, pastelowy
					75: "#BBDEFB", // Chłodny niebieski
					100: "#90CAF9", // Klasyczny błękit w stylu anime
					200: "#64B5F6", // Niebieski o intensywniejszym tonie
					300: "#42A5F5", // Bardzo intensywny niebieski
				},
				violet: {
					300: "#B388FF", // Jasny fiolet
				},
				yellow: {
					100: "#FFECB3", // Pastelowy żółty
					300: "#FFD54F", // Intensywny żółty
				},
			},
		},
	},
	plugins: [],
};
