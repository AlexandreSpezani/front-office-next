import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'tenant-background': "url('/restaurant.png')",
            },
            boxShadow: {
                'inset': 'inset 2px 4px 20px 14px rgba(0, 0, 0, 0.5)'
            }
        },
    },
    plugins: [require('daisyui')],
};
export default config;
