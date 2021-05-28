module.exports = function serializeUser(user, done) {
  done(null, user.id);
};
