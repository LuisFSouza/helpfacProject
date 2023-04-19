/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('images', function(table){
        table.increments('pk_id_image')
        table.binary('bin_image', 4294967295).notNullable()
        table.string('extension_image', 20).notNullable()
        table.integer('fk_id_question').unsigned()
        table.integer('fk_id_answer').unsigned()
        table.foreign('fk_id_question').references('questions.pk_id_question').onUpdate('CASCADE').onDelete('CASCADE')
        table.foreign('fk_id_answer').references('answers.pk_id_answer').onUpdate('CASCADE').onDelete('CASCADE')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropSchemaIfExists('images')
};
