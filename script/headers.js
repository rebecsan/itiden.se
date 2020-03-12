/* eslint @typescript-eslint/no-var-requires: 0 */
const fs = require('fs');

async function generateHeadersFile() {
  const header = `/*
  Content-Security-Policy: default-src 'self'; img-src 'self' https://*.usefathom.com https://images.ctfassets.net data:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; script-src 'self' https://*.usefathom.com; connect-src 'self'
  X-Xss-Protection: 1; mode=block
  Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff`;

  fs.writeFileSync('./out/_headers', header);
}

generateHeadersFile();