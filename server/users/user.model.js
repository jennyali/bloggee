const bcrypt = require('bcryptjs');
const BaseModel = require('../db/baseModel');

class User extends BaseModel('user', true) {
  async $beforeInsert(context) {
    await super.$beforeInsert(context);
    await this.generateHash();
  }

  async $beforeUpdate(queryOptions, context) {
    await super.$beforeUpdate(queryOptions, context);
    await this.generateHash();
  }

  async generateHash() {
    if (this.password) {
      this.password = await bcrypt.hash(this.password, 12);
    }
  }

  async isValidPassword(candidate) {
    if (!this.password) return false;
    return bcrypt.compare(candidate, this.password);
  }

  $formatJson(json) {
    // eslint-disable-next-line no-param-reassign
    delete json.password;
    return json;
  }
}

module.exports = User;
