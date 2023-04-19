/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('courses').del()
  await knex('courses').insert([
    {pk_id_course: 1, title_course: 'Ciência da Computação'},
    {pk_id_course: 2, title_course: 'Geografia'},
    {pk_id_course: 3, title_course: 'Biologia'},
    {pk_id_course: 4, title_course: 'Turismo'},
    {pk_id_course: 5, title_course: 'Engenharia de Produção'}
  ]);
};
