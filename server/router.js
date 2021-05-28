const { Router } = require('express');
const authentication = require('./authentication/authentication.routes');
const posts = require('./posts/post.routes');
const comments = require('./comments/comment.routes');

const router = Router();
authentication(router);
posts(router);
comments(router);

module.exports = router;
