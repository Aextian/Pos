import defaultTheme from 'tailwindcss/defaultTheme'
import forms from '@tailwindcss/forms'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.tsx',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
  ],
  darkMode: 'class',

  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,108,0.37298669467787116) 51%, rgba(0,212,255,1) 100%)',
      },
    },
  },

  plugins: [forms, require('tailwind-scrollbar')],
}
