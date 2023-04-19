/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('users', function(table){
        table.increments('pk_id_user')
        table.string('email_user', 255).notNullable().unique()
        table.string('name_user', 255).notNullable()
        table.boolean('is_admin_user').notNullable()
        table.text('password_user').notNullable()
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropSchemaIfExists('users')
};
