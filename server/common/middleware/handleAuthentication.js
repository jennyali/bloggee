const { Unauthorized } = require('http-errors');

module.exports = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    next(new Unauthorized('Not authorized'));
  }
};
