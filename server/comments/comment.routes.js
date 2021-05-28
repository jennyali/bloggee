const Joi = require('joi');
const handleAsyncRequest = require('../common/middleware/handleAsyncRequest');
const handleValidation = require('../common/middleware/handleValidation');
const handleAuthentication = require('../common/middleware/handleAuthentication');
const { postMiddleware } = require('../posts');
const controller = require('./comment.controller');

module.exports = router => {
  router
    .route('/posts/:postId/comments')
    .all(
      handleValidation({
        params: Joi.object({
          postId: Joi.number()
            .integer()
            .required(),
        }),
      }),
      postMiddleware
    )
    .get(handleAsyncRequest(controller.getCommentsByPost))
    .post(
      handleValidation({
        body: Joi.object({
          name: Joi.string()
            .min(1)
            .required(),
          text: Joi.string()
            .min(1)
            .max(250)
            .required(),
        }),
      }),
      handleAsyncRequest(controller.createComment)
    );

  router.delete(
    '/posts/:postId/comments/:commentId',
    handleAuthentication,
    handleValidation({
      params: Joi.object({
        postId: Joi.number()
          .integer()
          .required(),
        commentId: Joi.number()
          .integer()
          .required(),
      }),
    }),
    postMiddleware,
    handleAsyncRequest(controller.deleteComment, 204)
  );
};
