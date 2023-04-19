const dotenv = require("dotenv")
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {pk_id_user: 1, email_user: 'admin@admin.com', name_user:'admin', is_admin_user: 1,  password_user: process.env.PASS_ADMIN}
  ]);
};
