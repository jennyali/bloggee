const { Model } = require('objection');
const faker = require('faker');
const _ = require('lodash');
const User = require('../../../users/user.model');
const Post = require('../../../posts/post.model');
const Comment = require('../../../comments/comment.model');

exports.seed = async function seed(knex) {
  Model.knex(knex);
  await User.query().delete();
  await Post.query().delete();
  await Comment.query().delete();
  const user = await User.query()
    .insert({
      firstName: process.env.FIRST_NAME,
      lastName: process.env.LAST_NAME,
      email: process.env.EMAIL,
      password: process.env.PASSWORD,
    })
    .returning('*')
    .first();
  const post = await Post.query()
    .insert({
      title: faker.lorem.words(5),
      body: faker.lorem.paragraphs(5),
      userId: user.id,
      published: true,
    })
    .returning('*')
    .first();
  await Comment.query().insert(
    _.times(10, () => {
      return {
        postId: post.id,
        text: faker.lorem.sentence(),
        name: faker.name.firstName(),
      };
    })
  );
};
