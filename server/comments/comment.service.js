const Comment = require('./comment.model');

module.exports = {
  getCommentsByPostId(postId) {
    return Comment.query()
      .where('postId', postId)
      .orderBy('createdAt');
  },
  createPost(data) {
    return Comment.query()
      .insert(data)
      .returning('*')
      .first();
  },
  deleteComment(commentId, postId) {
    return Comment.query()
      .where('id', commentId)
      .andWhere('postId', postId)
      .delete()
      .throwIfNotFound();
  },
};
