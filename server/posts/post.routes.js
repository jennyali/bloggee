const Joi = require('joi');
const handleAsyncRequest = require('../common/middleware/handleAsyncRequest');
const handleValidation = require('../common/middleware/handleValidation');
const handleAuthentication = require('../common/middleware/handleAuthentication');
const controller = require('./post.controller');

module.exports = router => {
  // ADMIN ROUTES
  router
    .route('/posts')
    .get(
      handleValidation({
        query: Joi.object({
          page: Joi.number()
            .integer()
            .default(0),
          pageSize: Joi.number()
            .integer()
            .default(20),
        }),
      }),
      handleAsyncRequest(controller.getPosts)
    )
    .post(
      handleAuthentication,
      handleValidation({
        body: Joi.object({
          title: Joi.string()
            .min(1)
            .required(),
          body: Joi.string()
            .min(1)
            .required(),
          locked: Joi.boolean().default(false),
          published: Joi.boolean().default(false),
        }),
      }),
      handleAsyncRequest(controller.createPost, 201)
    );

  const handlePostId = handleValidation({
    params: Joi.object({
      postId: Joi.number()
        .integer()
        .required(),
    }),
  });

  router
    .route('/posts/:postId')
    .all(handleAuthentication)
    .get(
      handleValidation({
        params: Joi.object({
          postId: Joi.alternatives()
            .try(Joi.number().integer(), Joi.string().lowercase())
            .required(),
        }),
      }),
      handleAsyncRequest(controller.getPost)
    )
    .put(
      handleAuthentication,
      handlePostId,
      handleValidation({
        body: Joi.object({
          title: Joi.string().min(1),
          body: Joi.string().min(1),
          locked: Joi.boolean(),
          published: Joi.boolean(),
        }).min(1),
      }),
      handleAsyncRequest(controller.updatePost)
    )
    .delete(handleAuthentication, handlePostId, handleAsyncRequest(controller.deletePost, 204));
};
