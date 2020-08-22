const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const cors = require('cors');
const Restricted = require('./users/restricted-middleware')

const authRouter = require('./users/auth-router.js');
const userRouter = require('./users/userRouter.js');
const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(logger('dev'));


// ROUTER STARTS HERE

server.use('/api/auth/', authRouter);
server.use('/api/users/', Restricted, userRouter);


server.get('/server', (req, res) => {
	res.send(`Server is up and running...`);
});

module.exports = server;
