export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#7C3AED",
                secondary: "#5B21B6",
                accent: "#C4B5FD",
            },
            backdropBlur: {
                xs: '2px',
                sm: '4px',
                md: '6px',
                lg: '12px',
            },
            boxShadow: {
                'glow': '0 0 20px rgba(124, 58, 237, 0.5), 0 0 40px rgba(91, 33, 182, 0.3)',
            }
        },
    },
    plugins: [],
}
