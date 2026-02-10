/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary-blue": "#0A84FF",
                "bg-dark": "#121212",
                "container-dark": "#1E1E1E",
                "text-base": "#E0E0E0",
                "border-base": "#2D2D2D",
                "mint-green": "#00F5D4",
            },
            fontFamily: {
                "sans": ["Inter", "sans-serif"],
            },
            borderRadius: {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "2xl": "1rem",
                "3xl": "1.5rem",
                "full": "9999px"
            },
        },
    },
    plugins: [],
};
