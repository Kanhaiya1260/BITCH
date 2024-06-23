/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        mono: ['Menlo', 'Monaco', 'Consolas', 'monospace'],
        montserrat: ['Montserrat', 'sans-serif'],
        'roboto-slab': ['Roboto Slab', 'serif'],
        'playfair-display': ['Playfair Display', 'serif'],
        'lora': ['Lora', 'serif'],
        'archivo-narrow': ['Archivo Narrow', 'sans-serif'],
        'twentieth-century': ['"Twentieth Century"', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],      },
    },
  },
}