const _ = require('lodash');

module.exports = (searchValue, fields) => {
  const filter = {};
  if (!searchValue) return filter;
  if (Array.isArray(fields)) {
    filter.$or = _.map(fields, field => {
      return {
        [field]: {
          $regex: searchValue,
          $options: 'i',
        },
      };
    });
  }
  return filter;
};
