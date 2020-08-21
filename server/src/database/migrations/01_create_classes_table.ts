import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("classes", (table: Knex.TableBuilder) => {
    table.increments("id").primary();
    table.string("subject").notNullable();
    table.decimal("cost").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable();

    // Create a relationship between classes and users
    table
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("classes");
}
