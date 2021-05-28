const bcrypt = require('bcryptjs');
const { userService } = require('../users');

module.exports = async (req, email, password, done) => {
  try {
    const user = await userService.findByEmail(email);
    if (!user || !user.password || !(await bcrypt.compare(password, user.password))) {
      done(null, false, { message: 'invalid credentials' });
    } else {
      done(null, user);
    }
  } catch (error) {
    done(error);
  }
};
