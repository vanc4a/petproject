import { Request } from 'express';
import Response from '../interfaces/IResponse';
import PostsRepository from '../repositories/PostsRepository';
import ImageProcessor from '../services/ImageProcessor';

export const getByToken = (request: Request, response: Response) => {
  const postsRepository = new PostsRepository();
  postsRepository.getById(response.user.id).then((res) => response.send(res));
};

export const getAll = (request: Request, response: Response) => {
  const postsRepository = new PostsRepository();
  postsRepository.getAll().then((res) => response.send(res));
};

export const getById = (request: Request, response: Response) => {
  const postsRepository = new PostsRepository();
  postsRepository.getById(Number(request.params.id)).then((res) => response.send(res));
};

export const addPost = (request: Request, response: Response) => {
  const postsRepository = new PostsRepository();
  postsRepository.post(response.body, response.user.id, response.user.login).then(() => response.status(200).send(null));
};

export const upload = (request: Request, response: Response) => {
  console.log(request.file.filename + 'testing filename')
  const imageProcessor = new ImageProcessor();
  imageProcessor.postImage(request.file.path,request.file.filename)
    .then(() => response.send({image:`${request.file.filename}.png`}))
    .catch(err => response.status(400).send({message:err}))
};
