/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./default-tailwind.tcss', './**/*.html'],
    theme: {
        extend: {},
    },
    plugins: ['forms', 'typography', 'aspect-ratio'],
}
