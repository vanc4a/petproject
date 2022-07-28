const express = require('express');
const usersController = require('./controllers/usersController');
const postsController = require('./controllers/postsController');
const middleware = require('./Middleware');

const Router = express.Router();

Router.post('/signin', usersController.signIn);
Router.post('/signup', usersController.signUp);

Router.get('/profile', middleware.auth, usersController.getUserProfileByToken);
Router.get('/profile/:id', usersController.getUserProfileById);

Router.get('/posts', middleware.auth, postsController.getByToken);
// .post('/posts',middleware.Auth,postsController.Post)
Router.get('/posts/all', middleware.auth, postsController.getAll);
Router.get('/posts/:id', postsController.getById);


module.exports = Router;
