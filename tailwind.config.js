module.exports = {
  theme: {
    fontFamily: {
      body:
        '"Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial',
      mono: '"Ubuntu Mono", monospace'
    },
    extend: {
      colors: {
        primary: { default: '#C75000', light: '#e4570e' },
        brand: { default: '#ea6912', light: '#e4570e' },
        header: '#fcfcfc',
        bg: { default: '#fff', light: '#fff', dark: '#1A1A1A' }
      },
      fill: {
        logo: '#000'
      },
      textColor: {
        primary: '#2d3748',
        secondary: '#4a5568',
        tertiary: '#4a5568'
      }
    }
  },
  variants: {},
  plugins: []
};
