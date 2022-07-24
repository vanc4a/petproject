const express = require('express');
const usersController = require('./controllers/usersController');
const postsController = require('./controllers/postsController');
const UsersRepository = require('./repositories/UsersRepository')

const Router = express.Router();

Router.post('/signin',(req,res,next) => {
        req.on('data',result => {
                let usersRepository = new UsersRepository();
                usersRepository.getByLogin(JSON.parse(result).login).then(user => 
                      user ? (req.target = user,next()) : res.status(503).send() 
                )
        })
},usersController.signIn)
Router.post('/signup',usersController.signUp)

Router.get('/profile',usersController.getUserProfileByToken)
Router.get('/profile/:id',usersController.getUserProfileById)

Router.get('/posts',postsController.getByToken)
        // .post('/posts',postsController.Post)
Router.get('/posts/all',postsController.getAll)          
Router.get('/posts/:id',postsController.getById)


module.exports = Router;