import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                background: '#E1EEFF',
                royalblue: {
                    100: '#0360d9',
                    200: 'rgba(3, 96, 217, 0.31)',
                },
                white: '#fff',
                gray: {
                    100: '#fafafa',
                    200: '#021526',
                },
                black: '#000',
                whitesmoke: '#efefef',
                lavender: '#e1eeff',
                silver: 'rgba(181, 181, 181, 0.68)',
                darkslategray: {
                    100: '#2e2e2e',
                    200: '#163048',
                    300: '#0d2b46',
                },
                darkgray: '#a8a8a8',
                aliceblue: '#e6f5fc',
                lightskyblue: '#a5ccff',
            },
        },
    },
    plugins: [],
};
export default config;
