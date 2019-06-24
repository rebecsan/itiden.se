const next = require('next');
const routes = require('./routes');
const express = require('express');
const sitemap = require('./sitemap');

const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();

  server
    .get('/favicon.ico', (req, res) => {
      res.status(200).sendFile('favicon.ico', {
        root: __dirname + '/static/',
      });
    })
    .get('/sitemap.xml', (req, res) => {
      res.header('Content-Type', 'application/xml');
      res.send(sitemap);
    });

  server.use(handler).listen(3000);
});
