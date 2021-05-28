const Bluebird = require('bluebird');
const { BadRequest } = require('http-errors');

module.exports = (schema, options = {}) => async (req, res, next) => {
  try {
    const result = await Bluebird.props(
      Object.keys(schema).reduce(
        (accum, key) => ({
          ...accum,
          [key]: schema[key].validateAsync(req[key], {
            abortEarly: true,
            context: req,
            ...options,
          }),
        }),
        {}
      )
    );
    Object.assign(req, result);
    next();
  } catch (error) {
    next(new BadRequest(error.message));
  }
};
