import UsersRepository from '../repositories/UsersRepository';
import SignIn from '../models/response/SignIn';
import Error from '../models/response/Error'
import Profile from '../models/response/Profile'

export const signIn = (request, response) => {
  const usersRepository = new UsersRepository();
  let user = response.body
  usersRepository.signIn(user)
      .then((res) => response.send(new SignIn(res)))
      .catch((err) => response.status(400).send(new Error(err)));
};

export const signUp = (request, response) => {
  const usersRepository = new UsersRepository();
  usersRepository.signUp(response.body)
      .then(() => response.send())
      .catch((err) => response.status(400).send(new Error(err)));
};

export const getUserProfileByToken = (request, response) => {
  const usersRepository = new UsersRepository();
  usersRepository.getById(response.user.id)
      .then((res) => response.send(new Profile(res)))
      .catch((err) => response.status(401).send(new Error(err)));
};

export const getUserProfileById = (request, response) => {
  const usersRepository = new UsersRepository();
  usersRepository.getById(request.params.id)
      .then((res) => response.send(new Profile(res)))
      .catch((err) => response.status(400).send(new Error(err)));
};
