const { userService } = require('../users');

module.exports = async function deserializeUser(id, done) {
  try {
    const user = await userService.findById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
};
