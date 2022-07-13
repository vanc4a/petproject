const express = require('express');
const usersController = require('./controllers/usersController');
const postsController = require('./controllers/postsController');

const Router = express.Router();

Router.use('/signin',usersController.signIn)
Router.use('/signup',usersController.signUp)
Router.use('/userprofile',usersController.getUserProfile)
Router.use('/allposts',postsController.getAllPost)
Router.use('/userposts',postsController.getUserPost)

module.exports = Router;