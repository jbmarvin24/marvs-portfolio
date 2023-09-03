/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#5779E0',

          secondary: '#d926a9',

          accent: '#1fb2a6',

          neutral: '#2a323c',

          'base-100': '#2A323C',

          info: '#3abff8',

          success: '#36d399',

          warning: '#fbbd23',

          error: '#f87272',
        },
      },
    ],
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
};
