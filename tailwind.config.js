const brandColor = '#504DD2';
const brandColorLight = '#F5F8FF';
const defaultColors = {
  gray: {
    600: '#718096',
    700: '#242424',
    900: '#1a202c',
  },
};

module.exports = {
  theme: {
    fontFamily: {
      body: '"Open Sans", sans-serif',
    },
    extend: {
      colors: {
        brand: { default: brandColor, light: brandColorLight },
        bg: { default: '#F0F0F0' },
        dark: { default: '#4B4A4F' },
      },
      fill: {
        logo: '#242424',
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
