const _ = require('lodash');
const { SOMETHING_WENT_WRONG } = require('../constants');

module.exports = (error, req, res, next) => {
  // eslint-disable-next-line prefer-const
  let { status, message, stack, details } = _.defaults(error, { status: 500, details: {} });
  if (req.app.get('env') === 'production') {
    stack = undefined;
    if (status === 500) {
      message = SOMETHING_WENT_WRONG;
    }
  }
  if (!res.headersSent) {
    res.status(status).json({ status, message, stack, details });
  } else {
    next();
  }
};
