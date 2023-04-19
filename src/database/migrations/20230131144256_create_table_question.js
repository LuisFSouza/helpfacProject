/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('questions', function(table){
        table.increments('pk_id_question')
        table.string('title_question', 255)
        table.text('text_question', 255).notNullable()
        table.dateTime('dt_question').notNullable()
        table.integer('fk_id_matter').unsigned().notNullable()
        table.integer('fk_id_user').unsigned().notNullable()
        table.foreign('fk_id_matter').references('matters.pk_id_matter').onUpdate("CASCADE").onDelete("CASCADE")
        table.foreign('fk_id_user').references('users.pk_id_user')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropSchemaIfExists('questions')
};
