const express = require('express')

const Users = require('../users/users-model.js')
const Recipes = require('./recipes-model.js');
const restricted = require('../users/restricted-middleware.js')

const router = express.Router()

// CHECKING Router
router.get('/router', (req, res) => {
  res.send(`Now we are cooking with grease`)
})

//  WILL GET LIST OF RECIPES********>/api/recipes/

router.get('/', (req, res) => {
  Recipes.find()
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({message: 'Something went wrong'})
  })
})

// GET A RECIPE BY ID

router.get('/id', (req, res) => {
  const { id } = req.params;

  Recipes.findRecipeById(id)
     .then(data => {
        console.log(data)
        if (data) {
           res.json(data);
        } else {
           res.status(404).json({ message: 'Login information not found, Please Try Again' })
        }
     })
     .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Server Error: User not Found' });
     });
})

// ADDING A NEW RECIPE for user ID
router.post('/user/:id', (req, res) => {
  const user_id = req.params.id;
  const {title, source, ingredients, instructions,category, image} = req.body;
  
   const newRecipe = {
      title, source, ingredients, instructions, category, image,
       user_id
   }

  console.log(newRecipe);

  Users.findById(user_id)
  .then(user => {
    user ? 
    Recipes.add(newRecipe)
      .then((post) => {
          res.status(201).json({ success: `The following has been added to the User with an ID of ${user_id}...`, newRecipe })
       })	
       	.catch((err) => {
             res.status(401).json({ error: 'Failed to post recipe'})
          }):null
  })
  .catch((err) => {
      res.status(500).json({ error: 'There was an error reaching the database!' })
                   })
})


// UPDATE a recipe
router.put('/:id',  (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Recipes.update(id, changes)
     .then(A => {
           res.status(200).json(changes)
     })
     .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Server Error: Could not update recipe' })
     })
})

// DELETE a recipe
router.delete('/:id',validateRecipeId, (req, res) => {
  const { id } = req.params;

  Recipes.remove(id)
     .then(count => {
        if (count > 0) {
           res.status(200).json({ message: 'Recipe deleted' });
        } else {
           res.status(404).json({ message: 'Recipe not found' });
        }
     })
     .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Server Error: Did not delete recipe' })
     })
})


// Recipe validation
function validateRecipeId(req, res, next) {
  const { id } = req.params;

  Recipes.findRecipeById(id)
     .then(data => {
        if (data) {
           req.data = data;
           next();
        } else {
           res.status(400).json({ message: 'Recipe ID not validated' })
        }
     })
     .catch(err => {
        res.status(500).json({ message: 'Server Error' })
     })
}

module.exports = router;
