exports.up = async knex => {
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
  await knex.schema.hasTable('user').then(exists => {
    if (!exists) {
      return knex.schema.createTable('user', table => {
        table
          .uuid('id')
          .primary()
          .notNullable()
          .defaultTo(knex.raw('uuid_generate_v4()'));
        table.string('firstName', 50).notNullable();
        table.string('lastName', 50).notNullable();
        table
          .string('email')
          .notNullable()
          .unique();
        table.string('password', 200);
        table.timestamp('createdAt').defaultTo(knex.fn.now());
        table.timestamp('updatedAt').defaultTo(knex.fn.now());
      });
    }
    return null;
  });
  await knex.schema.hasTable('post').then(exists => {
    if (!exists) {
      return knex.schema.createTable('post', table => {
        table.increments();
        table.string('title', 100).notNullable();
        table.string('slug', 200).notNullable();
        table.string('body', 2000).notNullable();
        table
          .boolean('published')
          .defaultTo(false)
          .notNullable();
        table
          .boolean('locked')
          .defaultTo(false)
          .notNullable();
        table.uuid('userId');
        table.timestamp('createdAt').defaultTo(knex.fn.now());
        table.timestamp('updatedAt').defaultTo(knex.fn.now());
        table
          .foreign('userId')
          .references('id')
          .inTable('user')
          .onDelete('SET NULL')
          .onUpdate('NO ACTION');
      });
    }
    return null;
  });

  await knex.schema.hasTable('comment').then(exists => {
    if (!exists) {
      return knex.schema.createTable('comment', table => {
        table.increments();
        table.string('name', 100).notNullable();
        table.string('text', 200).notNullable();
        table.integer('postId').notNullable();
        table.timestamp('createdAt').defaultTo(knex.fn.now());
        table.timestamp('updatedAt').defaultTo(knex.fn.now());
        table
          .foreign('postId')
          .references('id')
          .inTable('post')
          .onDelete('CASCADE')
          .onUpdate('NO ACTION');
      });
    }
    return null;
  });
};

exports.down = async knex => {
  await knex.schema.dropTableIfExists('comment');
  await knex.schema.dropTableIfExists('post');
  await knex.schema.dropTableIfExists('user');
};
