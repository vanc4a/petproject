const UsersRepository = require('../repositories/UsersRepository');
const SignIn = require('../models/response/SignIn');
const SignUp = require('../models/response/SignUp');
const Error = require('../models/response/Error')
const Profile = require('../models/response/Profile')


exports.signIn = (request, response) => {
  const usersRepository = new UsersRepository();
  usersRepository.signIn(response.body.password, response.body.login)
    .then((res) => response.send(new SignIn(res)))
    .catch((e) => response.status(e.code).send(new Error(e.title)));
};

exports.signUp = (request, response) => {
  const usersRepository = new UsersRepository();
  usersRepository.signUp(response.body.password, response.body.login)
    .then(() => response.send(new SignUp()))
    .catch((err) => response.status(err.code).send(new Error(err.title)));
};

exports.getUserProfileByToken = (request, response) => {
  const usersRepository = new UsersRepository();
  usersRepository.getById(response.user.id)
  .then((res) => response.send(new Profile(res)))
  .catch((err) => response.status(err.code).send(new Error(err.title)))
};

exports.getUserProfileById = (request, response) => {
  const usersRepository = new UsersRepository();
  usersRepository.getById(request.params.id)
  .then((res) => response.send(new Profile(res)))
  .catch((err) => response.status(err.code).send(new Error(err.title)))
};
