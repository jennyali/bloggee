const postService = require('./post.service');

module.exports = async (req, res, next) => {
  try {
    const {
      params: { postId },
    } = req;
    const post = await postService.getPostById(postId);
    req.post = post;
    next();
  } catch (error) {
    next(error);
  }
};
