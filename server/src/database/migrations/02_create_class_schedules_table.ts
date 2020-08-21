import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable(
    "class_schedules",
    (table: Knex.TableBuilder) => {
      table.increments("id").primary();
      table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable();
      table.integer("from").notNullable();
      table.integer("to").notNullable();
      table.integer("week_day").notNullable();

      // Create a relationship between class_schedules and users
      table
        .integer("class_id")
        .notNullable()
        .references("id")
        .inTable("classes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    }
  );
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("class_schedules");
}
