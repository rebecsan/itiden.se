const sm = require('sitemap');
const cases = require('./data/data/case.json');
const menu = require('./data/data/menu.json');

const urls = [{ url: '/' }];

menu.forEach(m => {
  urls.push({ url: `/${m.slug}` });
});

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
