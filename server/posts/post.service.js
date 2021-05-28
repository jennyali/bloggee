const Post = require('./post.model');

module.exports = {
  getPosts({ page, pageSize, published }) {
    return Post.query()
      .skipUndefined()
      .orderBy('createdAt', 'desc')
      .page(page, pageSize)
      .withGraphFetched('author')
      .where('published', published)
      .select(
        '*',
        Post.relatedQuery('comments')
          .count()
          .as('commentsCount')
      );
  },
  createPost(data) {
    return Post.query()
      .insert(data)
      .returning('*')
      .first();
  },
  getPostById(id, { published } = {}) {
    return Post.query()
      .skipUndefined()
      .findById(id)
      .where('published', published)
      .withGraphFetched('author')
      .throwIfNotFound()
      .select(
        '*',
        Post.relatedQuery('comments')
          .count()
          .as('commentsCount')
      );
  },
  getPostBySlug(slug, { published } = {}) {
    return Post.query()
      .skipUndefined()
      .findOne({ slug })
      .where('published', published)
      .withGraphFetched('author')
      .throwIfNotFound()
      .select(
        '*',
        Post.relatedQuery('comments')
          .count()
          .as('commentsCount')
      );
  },
  updatePostById(id, data) {
    return Post.query()
      .where('id', id)
      .patch(data)
      .returning('*')
      .first()
      .throwIfNotFound();
  },
  deletePostById(id) {
    return Post.query()
      .deleteById(id)
      .throwIfNotFound();
  },
};
