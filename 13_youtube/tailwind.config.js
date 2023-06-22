/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            color: {
                'brand':'#ff0000'
            },
            fontFamily: {
                LeagueGothic: ['League Gothic', 'sans-serif'],
            }
        },
    },
    plugins: [],
}