const User = require('./user.model');

module.exports = {
  findById(id) {
    return User.query().findById(id);
  },
  findByEmail(email) {
    return User.query().findOne({ email: email.toLowerCase() });
  },
};
