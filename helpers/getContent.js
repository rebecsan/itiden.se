const fs = require('fs');
const path = require('path');
const { createClient } = require('contentful');

const env = require('dotenv').config();

const SPACE = env.parsed.CONTENTFUL_SPACE;
const TOKEN = env.parsed.CONTENTFUL_TOKEN;

const client = createClient({
  space: SPACE,
  accessToken: TOKEN,
});

function getFields(entry) {
  if (entry.sys) {
    return {
      id: entry.sys.id,
      ...entry.fields,
    };
  }

  return entry;
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

  fs.writeFileSync(
    path.join(__dirname, '..', 'data', 'case.json'),
    JSON.stringify(contents)
  );
}

const getcontent = async () => {
  await getCases();
  return true;
};

getcontent();
