import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("users", (table: Knex.TableBuilder) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("avatar").notNullable();
    table.string("whatsapp").notNullable();
    table.string("bio").notNullable();
    // knex.raw('CURRENT_TIMESTAMP')
    table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("users");
}
