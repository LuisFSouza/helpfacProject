/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('matters', function(table){
        table.increments('pk_id_matter')
        table.string('name_matter', 255).unique().notNullable()
        table.integer('fk_id_course').unsigned().notNullable()
        table.foreign('fk_id_course').references('courses.pk_id_course').onUpdate("CASCADE").onDelete("CASCADE")
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropSchemaIfExists('matters')
};
