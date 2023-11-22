/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./custom-tailwind.txt', './**/*.html'],
    theme: {
        extend: {},
    },
    plugins: ['forms', 'typography', 'aspect-ratio'],
}
