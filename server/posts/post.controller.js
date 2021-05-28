const posts = require('./post.service');

module.exports = {
  async getPosts(req) {
    const { user, query } = req;
    const { page, pageSize } = query;
    const published = user ? undefined : true;
    const data = await posts.getPosts({ page, pageSize, published });
    return data;
  },

  async createPost(req) {
    const { body, user } = req;
    const data = {
      ...body,
      userId: user.id,
    };
    const post = await posts.createPost(data);
    return post;
  },

  async getPost(req) {
    const { params, user } = req;
    const { postId } = params;
    const published = user ? undefined : true;

    let post;

    if (typeof postId === 'number') {
      post = await posts.getPostById(postId, { published });
    } else {
      post = await posts.getPostBySlug(postId, { published });
    }

    return post;
  },

  async updatePost(req) {
    const { body, params } = req;
    const post = await posts.updatePostById(params.postId, body);
    return post;
  },

  async deletePost(req) {
    const { params } = req;
    await posts.deletePostById(params.postId);
  },
};
