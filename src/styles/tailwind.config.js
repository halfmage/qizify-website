const colors = require('tailwindcss/colors')

module.exports = {
    content: ['_site/**/*.html'],
    safelist: [],
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp')
    ],
    theme: {
        extend: {
            listStyleImage: {
                checkmark: 'url("/assets/images/checkmark.png")',
            },
        },
        colors: {
            white: '#fff',
            gray: colors.neutral,
            primary: '#1DE1EE',
            secondary: '#E50CEA',
            green: colors.lime,
            accent: "#FFC129"
        },
    },
}