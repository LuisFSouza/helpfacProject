/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('answers', function(table){
        table.increments('pk_id_answer')
        table.text('text_answer', 255).notNullable()
        table.dateTime('dt_answer').notNullable()
        table.integer('fk_id_question').unsigned().notNullable()
        table.integer('fk_id_user').unsigned().notNullable()
        table.foreign('fk_id_question').references('questions.pk_id_question').onUpdate('CASCADE').onDelete('CASCADE')
        table.foreign('fk_id_user').references('users.pk_id_user')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropSchemaIfExists('answers')
};
