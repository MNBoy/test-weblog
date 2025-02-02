import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D7B5FC',
        secondary: '#E5E5E6',
      },
      backgroundColor: {
        primary: '#282C35',
      },
    },
  },
  darkMode: 'class',
  important: true,
  plugins: [],
};
export default config;
