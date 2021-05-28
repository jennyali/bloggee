const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const handleLocalStrategy = require('./local.strategy');
const serializeUser = require('./serializeUser');
const deserializeUser = require('./deserializeUser');

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
    },
    handleLocalStrategy
  )
);

passport.serializeUser(serializeUser);
passport.deserializeUser(deserializeUser);

module.exports = passport;
