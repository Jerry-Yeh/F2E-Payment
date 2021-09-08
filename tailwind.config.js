module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        30: '7.5rem',
      },
      colors: {
        primary: {
          light: '#DEFFF2',
          DEFAULT: '#8DEFCB',
          dark: '#36B996',
        },
        secondary: {
          light: '#F3F3F3',
          DEFAULT: '#D8D8D8',
          dark: '#AFAFAF',
          darkest: '#4B4B4B',
        },
      },
    },
    boxShadow: {
      DEFAULT: '0 2px 13px 0 rgba(0, 0, 0, 0.08)'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
