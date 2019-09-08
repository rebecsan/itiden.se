/* eslint @typescript-eslint/no-var-requires: 0 */
const fs = require('fs');

async function generateHeadersFile() {
  const header = `/*
  Content-Security-Policy: default-src 'self' https://www.google-analytics.com https://images.ctfassets.net https://fonts.googleapis.com 'unsafe-inline'
  X-Xss-Protection: 1; mode=block
  Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff`;

  fs.writeFileSync('./out/_headers', header);
}

generateHeadersFile();
