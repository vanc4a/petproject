const UsersRepository = require('../repositories/UsersRepository');
const Validator = require('../services/Validator');
const SignIn = require('../responseModels/SignIn');
const SignUp = require('../responseModels/SignUp');

exports.signIn = (request, response) => {
  const usersRepository = new UsersRepository();
  const validator = new Validator();
  request.on('data', (req) => {
    data = JSON.parse(`${req}`);
    if (validator.getValidation(data.login)) {
      usersRepository.signIn(data.pass, data.login).then((res) => response.send(JSON.stringify(res)));
    } else {
      response.send(JSON.stringify(new SignIn('Only latters', null)));
    }
  });
};

exports.signUp = (request, response) => {
  const usersRepository = new UsersRepository();
  const validator = new Validator();
  request.on('data', (req) => {
    data = JSON.parse(`${req}`);
    if (validator.getValidation(data.login)) {
      usersRepository.signUp(data.pass, data.login).then((res) => response.send(JSON.stringify(res)));
    } else {
      response.send(JSON.stringify(new SignUp('Only latters')));
    }
  });
};

exports.getUserProfileByToken = (request, response) => {
  const usersRepository = new UsersRepository();
  usersRepository.getProfileById(response.user.id).then((res) => response.send(JSON.stringify(res)));
};

exports.getUserProfileById = (request, response) => {
  const usersRepository = new UsersRepository();
  usersRepository.getProfileById(request.params.id).then((res) => response.send(JSON.stringify(res)));
};
