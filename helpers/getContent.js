const fs = require('fs');
const path = require('path');
const { createClient } = require('contentful');

// const env = require('dotenv').config();

// const SPACE = env.parsed.CONTENTFUL_SPACE;
// const TOKEN = env.parsed.CONTENTFUL_TOKEN;
const SPACE = process.env.CONTENTFUL_SPACE;
const TOKEN = process.env.CONTENTFUL_TOKEN;

const client = createClient({
  space: SPACE,
  accessToken: TOKEN,
});

const dataDir = path.join(__dirname, '..', 'data', 'data');

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
}

function getFields(entry) {
  if (entry.sys) {
    return {
      id: entry.sys.id,
      ...entry.fields,
    };
  }

  return entry;
}

async function getEntries(type) {
  const entries = await client.getEntries({
    // eslint-disable-next-line @typescript-eslint/camelcase
    content_type: type,
  });

  const contents = entries.items.map(({ sys, fields }) => {
    return {
      id: sys.id,
      ...fields,
    };
  });

  fs.writeFileSync(
    path.join(dataDir, `${type}.json`),
    JSON.stringify(contents)
  );
}

async function getCases() {
  const entries = await client.getEntries({
    // eslint-disable-next-line @typescript-eslint/camelcase
    content_type: 'case',
  });

  const contents = entries.items.map(({ sys, fields }) => {
    const { media = [], partners = [], technologies = [], ...rest } = fields;
    return {
      ...rest,
      id: sys.id,
      media: media.map(getFields),
      partners: partners.map(getFields),
      technologies: technologies.map(getFields).map(entry => entry.name),
    };
  });

  fs.writeFileSync(path.join(dataDir, 'case.json'), JSON.stringify(contents));
}

async function getMenu() {
  const entries = await client.getEntries({
    // eslint-disable-next-line @typescript-eslint/camelcase
    content_type: 'menu',
  });

  const contents = entries.items.map(({ sys, fields }) => {
    return {
      id: sys.id,
      label: fields.label,
      slug: getFields(fields.page).slug,
    };
  });
  fs.writeFileSync(path.join(dataDir, 'menu.json'), JSON.stringify(contents));
}

const getcontent = async () => {
  await getCases();
  await getMenu();
  await getEntries('page');
  await getEntries('employee');
  return true;
};

getcontent();
