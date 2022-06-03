module.exports = {
    content: ['./app/**/*.{ts,tsx,jsx,js}'],
    theme: {
        screens: {
            md: '640px',
            lg: '1024px',
            xl: '1500px', // this is the "design resolution"
        },
        extend: {
            typography: ({ theme }) => ({
                DEFAULT: {
                    css: {
                        a: {
                            TextDecoration: 'none',
                            color: theme('colors.red.500'),
                            fontWeight: '600',
                            '&:hover': {
                                textDecoration: 'underline',
                            }
                        }
                    }
                }
            })
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
        // ...
    ],
}