import express from 'express';
import {
  getByToken, getById, getAll, addPost,
} from './controllers/postsController';
import {
  signIn, signUp, getUserProfileById, getUserProfileByToken,
} from './controllers/usersController';
import { auth } from './Middleware';

const Router = express.Router();

Router.post('/signin', signIn);
Router.post('/signup', signUp);

Router.get('/profile', auth, getUserProfileByToken);
Router.get('/profile/:id', getUserProfileById);

Router.get('/posts', auth, getByToken);
Router.post('/posts', auth, addPost);

Router.get('/posts/all', auth, getAll);
Router.get('/posts/:id', getById);

export default Router;
