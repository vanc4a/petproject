const UsersRepository = require('./repositories/UsersRepository');
const Auth = require('./responseModels/Auth');
const Errors = require('./constants/errors');

exports.auth = (req, res, next) => {
  const usersRepository = new UsersRepository();
  return usersRepository.getByToken(req.headers.token).then((user) => {
    if (!user) {
      return res.send(JSON.stringify(new Auth(Errors.UndefinedUser)));
    }
    res.user = user;
    next();
  });
};
