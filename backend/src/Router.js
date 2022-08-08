const express = require('express');
const usersController = require('./controllers/usersController');
const postsController = require('./controllers/postsController');
const Middleware = require('./Middleware');

const Router = express.Router();

Router.post('/signin', usersController.signIn);
Router.post('/signup', usersController.signUp);

Router.get('/profile', Middleware.auth, usersController.getUserProfileByToken);
Router.get('/profile/:id', usersController.getUserProfileById);

Router.get('/posts', Middleware.auth, postsController.getByToken);
Router.post('/posts', Middleware.auth, postsController.addPost);
Router.get('/posts/all', Middleware.auth, postsController.getAll);
Router.get('/posts/:id', postsController.getById);


module.exports = Router;
