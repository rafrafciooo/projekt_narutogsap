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
					75: "#BBDEFB", // Trochę głębszy, ale nadal delikatny
					100: "#90CAF9", // Typowy anime błękit
					200: "#64B5F6", // Żywy, ale nie za ciemny
					300: "#42A5F5", // Intensywny, kontrastowy niebieski
				},
				violet: {
					300: "#B388FF", // Jasny, anime-fioletowy
				},
				yellow: {
					100: "#FFECB3", // Ciepły pastelowy żółty
					300: "#FFD54F", // Kontrastowy, bardziej intensywny
				},
			},
		},
	},
	plugins: [],
};
