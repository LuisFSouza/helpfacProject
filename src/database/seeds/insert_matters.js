/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('matters').del()
  await knex('matters').insert([
    {pk_id_matter: 1, name_matter: 'Circuitos Digitais', fk_id_course: 1},
    {pk_id_matter: 2, name_matter: 'Calculo 1', fk_id_course: 1},
    {pk_id_matter: 3, name_matter: 'Matematica Discreta', fk_id_course: 1},
    {pk_id_matter: 4, name_matter: 'Composição dos Solos', fk_id_course: 2},
    {pk_id_matter: 5, name_matter: 'IDH', fk_id_course: 2},
    {pk_id_matter: 6, name_matter: 'Blocos Economicos', fk_id_course: 2},
    {pk_id_matter: 7, name_matter: 'Reino Fungi', fk_id_course: 3},
    {pk_id_matter: 8, name_matter: 'Reino Animalia', fk_id_course: 3},
    {pk_id_matter: 9, name_matter: 'Reino Protista', fk_id_course: 3},
    {pk_id_matter: 10, name_matter: 'Estatística', fk_id_course: 4},
    {pk_id_matter: 11, name_matter: 'Fundamentos da Hotelaria', fk_id_course: 4},
    {pk_id_matter: 12, name_matter: 'Fundamentos da Administração', fk_id_course: 4},
    {pk_id_matter: 13, name_matter: 'Planejamento e Controle da Produção', fk_id_course: 5},
    {pk_id_matter: 14, name_matter: 'Gestão de Qualidade', fk_id_course: 5},
    {pk_id_matter: 15, name_matter: 'Gestão de Resíduos', fk_id_course: 5},
  ]);
};
