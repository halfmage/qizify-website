const colors = require('tailwindcss/colors')

module.exports = {
    content: ['_site/**/*.html'],
    safelist: [],
    theme: {
        colors: {
            white: '#fff',
            gray: colors.stone,
            primary: '#4BA6EE',
            secondary: '#B440FC',
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