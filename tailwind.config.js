module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
        backgroundColor: {
            page: 'var(--page-background-color)',
            hr: 'var(--hr-background-color)',
            button: 'var(--button-background-color)',
            hover: 'var(--button-hover-color)',
        },
        borderColor: {
            border: 'var(--border-default-color)',
        },
        colors : {
            default: 'var(--text-default-color)',
            buttonHover: 'var(--text-button-hover-color)',
            secondary: 'var(--text-secondary-color)'
        },
        fontFamily: {
            default: ['"Roboto Mono"', 'monospace']
        }
    },
      container: {
          padding: {
              DEFAULT: '1rem',
              sm: '2rem',
              lg: '4rem',
              xl: '5rem',
              '2xl': '6rem',
          },
      },
  },

  variants: {
    extend: {},
  },
  plugins: [],
}
