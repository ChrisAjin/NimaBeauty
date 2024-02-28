/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	  ],
  theme: {
	fontFamily: {
        'sofia': ['sofiapro-light', 'sans-serif'], // Ajoutez d'autres chutes de police si nécessaire
      },
    extend: {},
  },
  plugins: [],
}

