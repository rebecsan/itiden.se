const withCSS = require('@zeit/next-css');
const withOptimizedImages = require('next-optimized-images');
const Dotenv = require('dotenv-webpack');
const path = require('path');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const pages = require('./data/data/page.json');
const cases = require('./data/data/case.json');

module.exports = withBundleAnalyzer(
  withCSS(
    withOptimizedImages({
      modern: true,
      exportTrailingSlash: true,
      optimizeImages: false,
      exportPathMap: async function() {
        const paths = {
          '/': { page: '/' },
        };

        pages
          .filter(page => page.slug !== '/')
          .forEach(page => {
            paths[`/${page.slug}`] = {
              page: '/page',
              query: { slug: page.slug },
            };
          });
        cases.forEach(c => {
          paths[`/case/${c.slug}`] = {
            page: '/case',
            query: { slug: c.slug },
          };
        });

        return paths;
      },
      webpack: config => {
        config.plugins = config.plugins || [];

        config.plugins = [
          ...config.plugins,

          // Read the .env file
          new Dotenv({
            path: path.join(__dirname, '.env'),
            systemvars: true,
          }),
        ];

        config.resolve.alias = {
          ...config.resolve.alias,
          'react-spring$': require.resolve('react-spring/web.cjs'),
          'react-spring/renderprops$': require.resolve(
            'react-spring/renderprops.cjs'
          ),
          // 'react-use-gesture': require.resolve('react-use-gesture/web.cjs')
        };

        const originalEntry = config.entry;
        config.entry = async () => {
          const entries = await originalEntry();

          if (
            entries['main.js'] &&
            !entries['main.js'].includes('./polyfills.js')
          ) {
            entries['main.js'].unshift('./polyfills.js');
          }

          return entries;
        };

        config.node = {
          ...config.node,
          fs: 'empty',
        };

        return config;
      },
    })
  )
);
