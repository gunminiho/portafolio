/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.jsx', './src/**/*.js'], // Rutas a tus archivos fuente de React
  darkMode: 'media', // Opción para el modo oscuro
  theme: {
    extend: {
      fontFamily: {
        tahoma: ['Tahoma', 'sans-serif'],
      },
    }, // Extensiones de la configuración de temas
  },
  variants: {
    extend: {}, // Extensiones de variantes
  },
  plugins: [], // Plugins adicionales
}

