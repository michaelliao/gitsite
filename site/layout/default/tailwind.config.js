/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./custom-tailwind.css', './**/*.html'],
    theme: {
        extend: {},
    },
    plugins: ['forms', 'typography', 'aspect-ratio'],
}
