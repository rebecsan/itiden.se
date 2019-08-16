// const defaultConfig = require('tailwindcss/defaultConfig')();
import defaultConfig from 'tailwindcss/defaultConfig';

const brandColor = '#CC4A02';
const brandColorLight = '#C94D06';

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
        secondary: defaultConfig.theme.colors.gray[700],
        brand: brandColor,
      },
      textColor: {
        primary: defaultConfig.theme.colors.gray[900],
        secondary: defaultConfig.theme.colors.gray[700],
        tertiary: defaultConfig.theme.colors.gray[600],
      },
    },
  },
  variants: {},
  plugins: [],
};
