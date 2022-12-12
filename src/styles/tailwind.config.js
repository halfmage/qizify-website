const colors = require('tailwindcss/colors')

module.exports = {
    content: ['_site/**/*.html'],
    safelist: [],
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp')
    ],
    theme: {
        colors: {
            white: '#fff',
            gray: colors.zinc,
            primary: '#1DE1EE',
            secondary: '#E50CEA',
            green: colors.lime,
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '4rem',
                '2xl': '4rem',
                },
        }
    },
}