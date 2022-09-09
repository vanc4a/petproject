import PostsRepository from '../repositories/PostsRepository';
import fs from 'fs'
import minioConnection from '../constants/minioConnection';

export const getByToken = (request, response) => {
  const postsRepository = new PostsRepository();
  postsRepository.getById(response.user.id).then((res) => response.send(res));
};

export const getAll = (request, response) => {
  const postsRepository = new PostsRepository();
  postsRepository.getAll().then((res) => response.send(res));
};

export const getById = (request, response) => {
  const postsRepository = new PostsRepository();
  postsRepository.getById(request.params.id).then((res) => response.send(res));
};

export const addPost = (request, response) => {
  const postsRepository = new PostsRepository();
  postsRepository.post(response.body, response.user.id, response.user.login).then(() => response.status(200).send());
};

export const upload = (request, response) => {
  minioConnection.fPutObject('img', `${request.file.filename}.png`, `${request.file.path}`, {'Content-Type':'image/png'}, function(err, etag) {
    fs.unlink(request.file.path,(err) => console.log(err))
    if (err) return console.log(err)
    response.send(request.file.filename + '.png')
  });
};
