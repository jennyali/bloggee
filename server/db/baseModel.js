const { Model } = require('objection');
const { NotFound } = require('http-errors');

module.exports = (name, timestamps) =>
  class extends Model {
    static get tableName() {
      return name;
    }

    static createNotFoundError() {
      return new NotFound(`${name} not found`);
    }

    async $beforeUpdate(queryOptions, context) {
      const maybePromise = super.$beforeUpdate(queryOptions, context);
      await Promise.resolve(maybePromise);
      if (timestamps) {
        this.updatedAt = new Date();
      }
    }
  };
