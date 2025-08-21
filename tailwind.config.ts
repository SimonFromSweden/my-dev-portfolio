import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{html,ts}', // include all your component templates
  ],
  theme: {
    extend: {
      colors: {
        brand: '#ff5733',
        mint: '#34eba1',
        bloodred: '#fa7878',
      },
    },
  },
  plugins: [],
};
export default config;
