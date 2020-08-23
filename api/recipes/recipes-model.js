const db = require('../../data/dbConfig')

function find(){
  return db('recipes')
}

function findRecipeById(id){
  return db('recipes').where({id}).first()
}

// INSERT INTO recipes( user_id, title, source, ingredients, instructions, category, image)
// SELECT r.user_id , r.title, r.source, r.ingredients, r.instructions, r.category, r.image FROM users as u INNER JOIN recipes as r ON  r.userid = u.id;

const add= (recipe) => {
  return db ('recipes')
  
  .insert(recipe)
  .then(ids => {
    return findRecipeById(ids[0])
  })
}

function update(id, changes) {
  return db('recipes').where({id}).update(changes)
  // .then(recipe => {
  //   return findRecipeById(id)
  // })
}

function remove(id) {
  return db('recipes')
  .where({id})
  .del()
}




module.exports ={
  find,
  findRecipeById,
  add,
  update,
  remove
}