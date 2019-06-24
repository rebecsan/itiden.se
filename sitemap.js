const sm = require('sitemap');
const cases = require('./data/case.json');

const urls = [{ url: '/' }, { url: '/kontakt' }];

cases.forEach(caseData => {
  urls.push({
    url: `/case/${caseData.slug}`,
  });
});

const sitemap = sm.createSitemap({
  hostname: 'https://itiden.se',
  cacheTime: 60000,
  urls: urls,
});

module.exports = sitemap.toString();
