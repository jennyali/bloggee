const BaseModel = require('../db/baseModel');

class Comment extends BaseModel('comment', true) {}

module.exports = Comment;
