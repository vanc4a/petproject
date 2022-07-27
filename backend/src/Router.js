const express = require('express');
const usersController = require('./controllers/usersController');
const postsController = require('./controllers/postsController');
const UsersRepository = require('./repositories/UsersRepository')
const middleware  = require('../Middleware') 

const Router = express.Router();

Router.post('/signin',usersController.signIn)
Router.post('/signup',usersController.signUp)

Router.get('/profile',middleware.Auth,usersController.getUserProfileByToken)
Router.get('/profile/:id',usersController.getUserProfileById)

Router.get('/posts',middleware.Auth,postsController.getByToken)
        // .post('/posts',postsController.Post)
Router.get('/posts/all',postsController.getAll)          
Router.get('/posts/:id',postsController.getById)


module.exports = Router;