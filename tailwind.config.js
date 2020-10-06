module.exports = {
  theme: {
    fontFamily: {
      body: ['Open Sans', 'sans-serif'],
    },
    fontSize: {
      xs: ['13px', { lineHeight: '137.5%' }],
      'xs-footer': ['13px', { lineHeight: '162.5%' }], // + underline
      base: ['16px', { letterSpacing: '0.01em', lineHeight: '162.5%' }],
      'base-links': ['16px', { lineHeight: '162.5%' }], // + underline
      lg: ['18px', { letterSpacing: '0.01em', lineHeight: '162.5%' }],
      // 'lg-links': Samma som lg + underline
      xl: ['20px', { letterSpacing: '0.01em', lineHeight: '150%' }],
      // 'xl-links': : Samma som xl + underline
      // 'xl-links-sb': Samma som xl + underline + font-semibold,
      '2xl': ['24px', { letterSpacing: '0.01em', lineHeight: '162.5%' }],
      '5xl': ['48px', { letterSpacing: '0.01em', lineHeight: '162.5%' }],
      h2: ['32px', { letterSpacing: '0.02em', lineHeight: '137.5%' }],
      h3: ['24px', { letterSpacing: '0.02em', lineHeight: '137.5%' }],
      // h3-links: Samma som h3 + underline
      'h3-links-light-bg': ['24px', { lineHeight: '137.5%' }], // + underline + font-bold
      h4: ['16px', { letterSpacing: '0.01em', lineHeight: '137.5%' }],
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1080px',
      xl: '1280px',
    },
    extend: {
      colors: {
        gray: {
          100: '#F4F4F4',
          200: '#EBEBEB',
          250: '#E0E0E0',
          300: '#D6D6D6',
          350: '#C2C2C2',
          400: '#808080',
          500: '#505050',
          600: '#2D2D2D',
          700: '#242424',
          800: '#181818',
          900: '#0C0C0C',
        },
        purple: {
          700: '#504DD2',
        },
        teal: {
          400: '#5CFFF5',
        },
        green: '#5CFF8A',
        red: '#D24D4D',
        yellow: '#FFDB5C',
      },
      fill: {
        logo: '#242424',
      },
      opacity: {
        90: '.9',
      },
    },
  },
  variants: {
    hidden: ['responsive', 'last'],
  },
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
  },
};
