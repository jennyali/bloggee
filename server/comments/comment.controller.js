const { Forbidden, NotFound } = require('http-errors');
const commentService = require('./comment.service');

module.exports = {
  getCommentsByPost(req) {
    const { user, post } = req;
    if (!post.published && !user) {
      throw new NotFound('post not found');
    }
    return commentService.getCommentsByPostId(post.id);
  },
  async createComment(req) {
    const { body, post } = req;
    if (!post.published || post.locked) {
      throw new Forbidden('Cannot comment on this post');
    }
    const data = {
      ...body,
      postId: post.id,
    };
    return commentService.createPost(data);
  },
  async deleteComment(req) {
    const { post, params } = req;
    const { commentId } = params;
    await commentService.deleteComment(commentId, post.id);
  },
};
