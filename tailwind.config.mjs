/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                background: '#030712', // Gris casi negro
                primary: '#0A84FF', // Azul Eléctrico
                secondary: '#0A84FF', // Azul Eléctrico (mismo que primary para unificar)
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
