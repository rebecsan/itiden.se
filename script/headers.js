/* eslint @typescript-eslint/no-var-requires: 0 */
const fs = require('fs');

async function generateHeadersFile() {
  const header = `/*
  content-security-policy: script-src 'self' https://www.google-analytics.com
  x-xss-protection: 1; mode=block
  strict-transport-security: max-age=31536000; includeSubDomains; preload
  x-frame-options: SAMEORIGIN
  x-content-type-options: nosniff`;

  fs.writeFileSync('./out/_headers', header);
}

generateHeadersFile();
