const withTypescript = require('@zeit/next-typescript');
const withCSS = require('@zeit/next-css');
const withOptimizedImages = require('next-optimized-images');

module.exports = withCSS(
  withOptimizedImages(
    withTypescript({
      amp: true,
    })
  )
);
