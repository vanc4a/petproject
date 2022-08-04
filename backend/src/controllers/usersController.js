const UsersRepository = require('../repositories/UsersRepository');
const Validator = require('../services/Validator');
const SignIn = require('../models/response/SignIn');
const SignUp = require('../models/response/SignUp');
const Error = require('../models/response/Error')
const Profile = require('../models/response/Profile')
const Errors = require('../constants/errors')


exports.signIn = (request, response) => {
  const usersRepository = new UsersRepository();
  const validator = new Validator();
  request.on('data', (req) => {
    data = JSON.parse(`${req}`);
    if (!validator.getValidation(data.login)) {
      response.send(new Error(Errors.ValidateError));
    }
    usersRepository.signIn(data.pass, data.login)
      .then((res) => response.send(new SignIn(res)))
      .catch((e) => response.send(new Error(e)));
  });
};

exports.signUp = (request, response) => {
  const usersRepository = new UsersRepository();
  const validator = new Validator();
  request.on('data', (req) => {
    data = JSON.parse(`${req}`);
    if (!validator.getValidation(data.login)) {
      response.send(new Error(Errors.ValidateError));
    }
    usersRepository.signUp(data.pass, data.login)
      .then(() => response.send(new SignUp()))
      .catch((err) => response.status(err.code).send(new Error(err.title)));
  });
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
