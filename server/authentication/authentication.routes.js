const { Router } = require('express');
const Joi = require('joi');
const passport = require('../passport');
const handleAuthentication = require('../common/middleware/handleAuthentication');
const handleValidation = require('../common/middleware/handleValidation');
const handleAsyncRequest = require('../common/middleware/handleAsyncRequest');
const controller = require('./authentication.controller');

const router = Router();
router.post(
  '/login',
  handleValidation({
    body: Joi.object({
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string().required(),
    }),
  }),
  passport.authenticate('local'),
  handleAsyncRequest(controller.getCurrentUser)
);
router.get('/user', handleAuthentication, handleAsyncRequest(controller.getCurrentUser));

module.exports = app => {
  app.use('/authentication', router);
};
