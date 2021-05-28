const path = require('path');
const slugify = require('slugify');
const BaseModel = require('../db/baseModel');

class Post extends BaseModel('post', true) {
  static get relationMappings() {
    return {
      comments: {
        relation: Post.HasManyRelation,
        modelClass: path.resolve(__dirname, '../comments/comment.model.js'),
        join: {
          from: 'post.id',
          to: 'comment.postId',
        },
      },
      author: {
        relation: Post.BelongsToOneRelation,
        modelClass: path.resolve(__dirname, '../users/user.model.js'),
        join: {
          from: 'post.userId',
          to: 'user.id',
        },
      },
    };
  }

  async $beforeInsert(context) {
    await super.$beforeInsert(context);
    this.generateSlug();
  }

  async $beforeUpdate(queryOptions, context) {
    await super.$beforeUpdate(queryOptions, context);
    this.generateSlug();
  }

  generateSlug() {
    if (this.title) {
      this.slug = `${slugify(this.title).toLowerCase()}-${Math.floor(Date.now() / 1000)}`;
    }
  }
}

module.exports = Post;
