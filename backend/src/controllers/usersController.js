const UsersRepository = require('../repositories/UsersRepository');
const SignIn = require('../models/response/SignIn');
const Error = require('../models/response/Error');
const Profile = require('../models/response/Profile');


exports.signIn = (request, response) => {
  const usersRepository = new UsersRepository();
  console.log(response.body);
  usersRepository.signIn(response.body)
      .then((res) => response.send(new SignIn(res)))
      .catch((err) => response.status(400).send(new Error(err)));
};

exports.signUp = (request, response) => {
  const usersRepository = new UsersRepository();
  usersRepository.signUp(response.body)
      .then(() => response.send())
      .catch((err) => response.status(400).send(new Error(err)));
};

exports.getUserProfileByToken = (request, response) => {
  const usersRepository = new UsersRepository();
  usersRepository.getById(response.user.id)
      .then((res) => response.send(new Profile(res)))
      .catch((err) => response.status(401).send(new Error(err)));
};

exports.getUserProfileById = (request, response) => {
  const usersRepository = new UsersRepository();
  usersRepository.getById(request.params.id)
      .then((res) => response.send(new Profile(res)))
      .catch((err) => response.status(400).send(new Error(err)));
};
