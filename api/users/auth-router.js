const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/users-model');

router.get('/', (req, res) => {
   res.send('Oven is Preheating')
})

router.post('/register', (req, res) => {
   const user = req.body;

   const hash = bcrypt.hashSync(user.password, 4);
   user.password = hash;

   Users.add(user)
      .then(saved => {
         const token = generateToken(user)
         res.status(201).json({
            user: saved,
            token
         })
      })
      .catch(err => {
         console.log(err)
         res.status(418).json({ message: 'Something has gone wrong...' })
      })
});

router.post('/login', (req, res) => {
   let { username, password } = req.body;

   Users.findBy({ username })
      .first()
      .then(user => {
         if (user && bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user)

            res.status(200).json({
               message: `Welcome ${user.username}!`,
               token
            });
         } else {
            res.status(401).json({ message: 'User Name and or Password is Incorrect' });
         }
      })
      .catch(err => {
         console.log(err)
         res.status(500).json({ message: 'Login not Successful' });
      });
});

function generateToken(user) {
   const payload = {
      sub: user.id,
      username: user.username
   }
   const options = {
      expiresIn: '1d'
   }
   return jwt.sign(payload, process.env.JWT_SECRET, options)
}

module.exports = router;