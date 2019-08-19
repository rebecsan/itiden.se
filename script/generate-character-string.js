const {
  documentToPlainTextString,
} = require('@contentful/rich-text-plain-text-renderer');
const pages = require('../data/data/page.json');
const cases = require('../data/data/case.json');
const employees = require('../data/data/employee.json');
const menu = require('../data/data/menu.json');
const fs = require('fs');
const path = require('path');

const uniqueChars = [];

function pushUniqueChars(value) {
  const logStringsWithChars = ['['];
  if (value && typeof value === 'string') {
    value.split('').forEach(char => {
      if (logStringsWithChars.includes(char)) {
        console.log(value);
      }
      if (!uniqueChars.includes(char) && char !== ' ') {
        uniqueChars.push(char);
      }
    });
  }
}

async function getUniqueCharacters() {
  pages.forEach(page => {
    pushUniqueChars(page.title);
    pushUniqueChars(documentToPlainTextString(page.header));
    pushUniqueChars(documentToPlainTextString(page.body));
  });

  cases.forEach(c => {
    pushUniqueChars(c.title);
    pushUniqueChars(documentToPlainTextString(c.description));
    pushUniqueChars(c.partners.map(p => p.name + p.url).join(''));
    pushUniqueChars(c.technologies.join(''));
    pushUniqueChars(c.categories.join(''));
  });

  employees.forEach(e => {
    pushUniqueChars(e.name);
    pushUniqueChars(e.title);
    pushUniqueChars(e.email);
    pushUniqueChars(e.phone);
  });

  menu.Main.forEach(m => {
    pushUniqueChars(m.label);
  });

  const encodedString = encodeURIComponent(
    uniqueChars.sort((a, b) => a.localeCompare(b)).join('')
  );

  try {
    fs.writeFileSync(
      path.join(__dirname, '..', 'data', 'data', 'chars.js'),
      `export default '${encodedString}';`
    );
  } catch (error) {
    console.error(error);
  }
}

getUniqueCharacters();
