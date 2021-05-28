const Bluebird = require('bluebird');
const castArray = require('lodash/castArray');

module.exports = (fn, status = 200) => {
  const fnsArray = castArray(fn);
  const handler = (...args) =>
    Bluebird.reduce(fnsArray, (value, nextFn) => nextFn(...args, value), null);
  return async (req, res, next) => {
    try {
      const result = await handler(req, res, next);
      if (typeof result === 'undefined' || status === 204) {
        res.sendStatus(status);
      } else if (result) {
        res.status(status).json(result);
      }
    } catch (error) {
      next(error);
    }
  };
};
