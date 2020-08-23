
exports.up = function(knex) {
  return knex.schema
  .createTable('users', tbl => {
     //? ALWAYS WANT TO START OFF WITH tbl.increments ?// 
    tbl.increments()
    tbl.string('name', 255).notNullable()
    tbl.string('username', 255).notNullable().unique()
    tbl.string('email', 255).notNullable().unique()
    tbl.string('password', 255).notNullable()
  })
  .createTable('recipes', (tbl) => {
   
    tbl.increments()
    tbl.string('title', 255).notNullable()
    tbl.string('source', 255)
    tbl.string('ingredients', 255).notNullable()
    tbl.string('instructions', 255).notNullable()
    tbl.string('category', 255).notNullable()
    tbl.string('image', 255)
    //? FOREIGN KEY ALWAYS GOES ON THE BOTTOM ?//
    tbl.integer('user_id').unsigned().notNullable().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
   })
   .createTable('ingredients', tbl => {
    tbl.increments();
    tbl.integer('recipe_id')
       .unsigned()
       .notNullable()
       .references('id')
       .inTable('recipes')
       .onDelete('CASCADE')
       .onUpdate('CASCADE');
    tbl.float('quantity').notNullable();
    tbl.string('unit_type', 255).notNullable();
    tbl.string('ingredient_name', 255).notNullable();
 })
 .createTable('categories', tbl => {
  tbl.increments();
  tbl.integer('recipe_id')
     .unsigned()
     .notNullable()
     .references('id')
     .inTable('recipes')
     .onDelete('CASCADE')
     .onUpdate('CASCADE');
  tbl.string('category_name', 255);
})
 
  };


exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('users')
  .dropTableIfExists('recipes')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('categories')
};


//? FOREIGN KEY ALWAYS GOES ON THE BOTTOM ?//
// tbl.integer('user_id').unsigned().notNullable().references('id').inTable('user').onUpdate('CASCADE').onDelete('CASCADE')