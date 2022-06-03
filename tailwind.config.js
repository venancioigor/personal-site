module.exports = {
    content: ['./app/**/*.{ts,tsx,jsx,js}'],
    theme: {
        screens: {
            md: '640px',
            lg: '1024px',
            xl: '1500px', // this is the "design resolution"
        },
        extend: {}
    },
    plugins: [
        require('@tailwindcss/typography'),
        // ...
    ],
}