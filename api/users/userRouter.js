const router = require('express').Router()
const userDB = require('../users/users-model.js')

// GET LIST OF ALL USERS
router.get('/', (req, res) => {
  userDB.find()
  .then(users => {
    if (users) {res.status(200).json(users);

  } else {res.status(404).json({errorMessage: "No users found!"});}})
  .catch(error => {
    res.status(500).json({error: "There was an error retrieving users from database." })
  })
});


//  GET INDIVIDUAL USER --> api/users/:id/posts  
router.get('/:id', (req, res) => {
  res.status(200).json(req.user);

});

//  UPDATE User by id 
router.put('/:id', (req, res) => {
  const id = req.params.id;

  userDB.update(id, {name: req.body.name })
  .then(() => {db.getById(id)
  .then(user => {res.status(200).json(user);});})
  .catch(error => {res.status(500).json({errorMessage: "Could not get the updated user "});
  });
});


// DELETE User by their id
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  userDB.remove(req.user.id)
  .then(() => {res.status(200).json({Success: true})})
  .catch(error => {res.status(500).json({error: "Could not delete the specified user." });
  })
});

module.exports = router
// get all users - get user/id - update and delete user