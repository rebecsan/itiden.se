const withTypescript = require('@zeit/next-typescript');
const withCSS = require('@zeit/next-css');
const withOptimizedImages = require('next-optimized-images');

const pages = require('./data/data/page.json');
const cases = require('./data/data/case.json');

module.exports = withCSS(
  withOptimizedImages(
    withTypescript({
      exportPathMap: async function() {
        const paths = {
          '/': { page: '/' },
        }

        pages.forEach(page => {
          paths[`/${page.slug}`] = { page: '/page', query: { slug: page.slug } };
        });
        cases.forEach(c => {
          paths[`/case/${c.slug}`] = { page: '/case', query: { slug: c.slug } };
        });

        return paths;
      }
    })
  )
);