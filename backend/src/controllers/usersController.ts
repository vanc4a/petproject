import { Request } from 'express';
import UsersRepository from '../repositories/UsersRepository';
import Response from '../interfaces/IResponse';

export const signIn = (request: Request, response: Response) => {
  const usersRepository = new UsersRepository();
  const user = response.body;
  usersRepository.signIn(user)
    .then((res) => response.send({token:res}))
    .catch((err) => response.status(400).send({message:err}));
};

export const signUp = (request: Request, response: Response) => {
  const usersRepository = new UsersRepository();
  usersRepository.signUp(response.body)
    .then(() => response.send(null))
    .catch((err) => response.status(400).send({message:err}));
};

export const getUserProfileByToken = (request: Request, response: Response) => {
  const usersRepository = new UsersRepository();
  usersRepository.getById(Number(response.user.id))
    .then((res) => response.send({name:res.login,id:res.id}))
    .catch((err) => response.status(401).send({message:err}));
};

export const getUserProfileById = (request: Request, response: Response) => {
  const usersRepository = new UsersRepository();
  usersRepository.getById(Number(request.params.id))
    .then((res) => response.send({name:res.login,id:res.id}))
    .catch((err) => response.status(400).send({message:err}));
};
