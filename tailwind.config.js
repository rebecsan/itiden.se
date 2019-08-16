const brandColor = '#CC4A02';
const brandColorLight = '#C94D06';
const defaultColors = {
  gray: {
    600: '#718096',
    700: '#4a5568',
    900: '#1a202c',
  },
};

module.exports = {
  theme: {
    fontFamily: {
      body:
        '"Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial',
      mono: '"Ubuntu Mono", monospace',
    },
    extend: {
      colors: {
        brand: { default: brandColor, light: brandColorLight },
        header: '#fcfcfc',
        bg: { default: '#fff', light: '#fff', dark: '#1A1A1A' },
      },
      fill: {
        logo: '#000',
        secondary: defaultColors.gray[700],
        brand: brandColor,
      },
      textColor: {
        primary: defaultColors.gray[900],
        secondary: defaultColors.gray[700],
        tertiary: defaultColors.gray[600],
      },
    },
  },
  variants: {},
  plugins: [],
};
