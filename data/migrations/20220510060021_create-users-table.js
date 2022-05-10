/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('users', users => {
      users.increments();

      users.text('username')
      .unique()
      .notNullable();
      users.varchar('email')
        .unique()
        .notNullable();
      users.string('password', 999);
      users.text('bio', 999);
      users.string('name');
});
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
