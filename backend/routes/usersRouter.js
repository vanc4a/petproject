const express = require('express');
const usersController = require('../controllers/usersController');

const usersRouter = express.Router();

usersRouter.use('/signin',usersController.signIn)
usersRouter.use('/signup',usersController.signUp)

module.exports = usersRouter;