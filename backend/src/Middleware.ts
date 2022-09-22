import { NextFunction, Request } from 'express';
import UsersRepository from './repositories/UsersRepository';
import SignIn from './models/request/SignIn';
import SignUp from './models/request/SignUp';
import Post from './models/request/Post';
import Response from './interfaces/IResponse';
import User from './interfaces/db/User';

export const auth = (req: Request, res: Response, next: NextFunction) => {
  const usersRepository = new UsersRepository();
  console.log(req.header('token') + 'token')
  usersRepository.getByToken(req.header('token')).then((user: User) => {
    res.user = user;
    next();
  }).catch((e) => res.status(401).send({message:e}));
};

export const requestParser = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body)
  try {
    switch (req.url) {
      case '/signup':
        res.body = new SignUp(req.body);
        break;
      case '/signin':
        res.body = new SignIn(req.body);
        break;
      case '/posts':
        res.body = new Post(req.body);
        break;
    }
    next();
  } catch (e) {
    res.status(400).send({message:e});
  }
};