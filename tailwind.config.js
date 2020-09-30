module.exports = {
  theme: {
    fontFamily: {
      body: ['Open Sans', 'sans-serif'],
    },
    // fontSize: {
    //   xsfooter: '.75rem',
    //   sm: '.875rem',
    //   tiny: '.875rem',
    //   base: '1rem',
    //   lg: '1.125rem',
    //   xl: '1.25rem',
    //   '2xl': '1.5rem',
    //   '3xl': '1.875rem',
    //   '4xl': '2.25rem',
    //   '5xl': '3rem',
    //   '6xl': '4rem',
    //   '7xl': '5rem',
    // },
    // fontSize: {
    //   xs: '13px',
    //   xsfooter: ['13px', { lineHeight: '162.5%' }], // + underline
    //   base: ['16px', { letterSpacing: '0.01em', lineHeight: '162.5%' }],
    //   baselinks: ['16px', { lineHeight: '162.5%' }], // + underline
    //   lg: ['18px', { letterSpacing: '0.01em', lineHeight: '162.5%' }],
    //   // 'lg-links': Samma som lg + underline
    //   xl: ['20px', { letterSpacing: '0.01em', lineHeight: '150%' }],
    //   // 'xl-links': : Samma som xl + underline
    //   // 'xl-links-sb': Samma som xl + underline + font-semibold,
    //   '2xl': ['24px', { letterSpacing: '0.01em', lineHeight: '162,5%' }],
    //   '5xl': ['48px', { letterSpacing: '0.01em', lineHeight: '150%' }],
    //   h2: ['32px', { letterSpacing: '0.02em', lineHeight: '137,5%' }],
    //   h3: ['24px', { letterSpacing: '0.02em', lineHeight: '137,5%' }],
    //   // h3-links: Samma som h3 + underline
    //   'h3-links-light-bg': ['24px', { lineHeight: '137,5%' }], // + underline + font-bold
    //   h4: ['16px', { letterSpacing: '0.01em', lineHeight: '137,5%' }],
    // },
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
    },
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
  },
};
