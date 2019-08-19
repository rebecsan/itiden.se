/* eslint @typescript-eslint/no-var-requires: 0 */
const algoliasearch = require('algoliasearch');
const {
  documentToPlainTextString,
} = require('@contentful/rich-text-plain-text-renderer');
const pages = require('../data/data/page.json');
const cases = require('../data/data/case.json');
const employees = require('../data/data/employee.json');
require('dotenv').config();

const APP_ID = process.env.ALGOLIA_APP_ID;
const API_KEY = process.env.ALGOLIA_API_KEY;

async function generateSearchIndex() {
  const indexes = [];

  pages
    .filter(page => page.slug !== '/')
    .forEach(page => {
      indexes.push({
        objectID: page.id,
        title: page.title,
        header: documentToPlainTextString(page.header),
        body: documentToPlainTextString(page.body),
        slug: page.slug,
        type: 'page',
      });
    });

  cases.forEach(c => {
    indexes.push({
      objectID: c.id,
      title: c.title,
      slug: c.slug,
      description: documentToPlainTextString(c.description),
      partners: c.partners.map(p => p.name),
      tags: [...c.technologies, ...c.categories],
      type: 'case',
    });
  });

  employees.forEach(e => {
    indexes.push({
      objectID: e.id,
      name: e.name,
      title: e.title,
      email: e.email,
      phone: e.phone,
      type: 'employee',
    });
  });

  const client = algoliasearch(APP_ID, API_KEY);
  const index = client.initIndex('itiden');
  await index.clearIndex();
  await index.addObjects(indexes);
}

generateSearchIndex();
