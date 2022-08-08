const UsersRepository = require('./repositories/UsersRepository');
const Error = require('./models/response/Error');
const SignUp = require('./models/request/SignUp');
const SignIn = require('./models/request/SignIn');
const Post = require('./models/request/Post');

exports.auth = (req, res, next) => {
  const usersRepository = new UsersRepository();
  return usersRepository.getByToken(req.headers.token).then((user) => {
    res.user = user;
    next();
  }).catch((e) => res.status(401).send(new Error(e)));
};

exports.requestParser = (req, res, next) => {
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


