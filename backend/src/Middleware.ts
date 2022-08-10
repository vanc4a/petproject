import UsersRepository from './repositories/UsersRepository'
import Error from './models/response/Error';
import SignIn from './models/request/SignIn';
import SignUp from './models/request/SignUp';
import Post from './models/request/Post';

export const auth = (req, res, next) => {
  const usersRepository = new UsersRepository();
  usersRepository.getByToken(req.headers.token).then((user) => {
    res.user = user;
    next();
  }).catch((e) => res.status(401).send(new Error(e)));
};

export const requestParser = (req, res, next) => {
  try {
    switch (req.originalUrl) {
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
    res.status(400).send(new Error(e));
  }
};


