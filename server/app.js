const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);
const handleError = require('./common/middleware/handleError');
const passport = require('./passport');
const knex = require('./db/knex');

const router = require('./router');

module.exports = config => {
  const app = express();
  const store = new KnexSessionStore({ knex });
  app.set('config', config);

  app.use(morgan('dev'));

  app.use(
    session({
      store,
      secret: process.env.SECRET,
      maxAge: 120,
      resave: true,
      saveUninitialized: true,
    })
  );

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use('/api', router);
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });

  app.use(handleError);
  const server = http.createServer(app);
  return server;
};
