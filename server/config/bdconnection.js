const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: "localhost",
    user: "root",
    password: "Praveen@123",
    database: "Balaji_Property",
  },
});

knex.schema
  .createTable("errorLog", (table) => {
    table.increments("id").notNullable();
    table.string("errdesc");
    table.string("FileandLineNo");
    table.timestamp("create_at").defaultTo(knex.fn.now());
  })
  .then((result) => {
    console.log("errorLog created sucssfuly");
  })
  .catch((err) => {
    // console.log(err);
  });

knex.schema
  .createTable("user", (table) => {
    table.increments("id").notNullable();
    table.string("username").notNullable();
    table.string("email").notNullable().unique();
    table.string("password").notNullable();
    table.string("phoneNo").notNullable().unique();
    table.timestamp("create_at").defaultTo(knex.fn.now());
  })
  .then((result) => {
    console.log("table user created");
  })
  .catch((err) => {
    // console.log(err);
  });

knex.schema
  .createTable("Property_info", (table) => {
    table.increments("id").notNullable();
    table.string("username").notNullable();
    table.string("PhotoId").notNullable();
    table.string("address").notNullable();
    table.string("category").notNullable();
    table.string("Area").notNullable();
    table.string("additionalinfo").notNullable();
    table.string("description").notNullable();
    table.string("price").notNullable();
    table.string("pricePerSqft").notNullable();
    table.string("phoneNo").notNullable().unique();
    table.timestamp("create_at").defaultTo(knex.fn.now());
  })
  .then((result) => {
    console.log("table Property_info created");
  })
  .catch((err) => {
    // console.log(err);
  });

knex.schema
  .createTable("Photogalery", (table) => {
    table.increments("id").notNullable();
    table.string("PhotoLink").notNullable();
    table.timestamp("create_at").defaultTo(knex.fn.now());
  })
  .then((result) => {
    console.log("table Photogalery created");
  })
  .catch((err) => {
    // console.log(err);
  });

  module.exports = knex