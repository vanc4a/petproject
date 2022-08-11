import PostsRepository from '../repositories/PostsRepository';

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
  postsRepository.post(response.body, response.user.id).then(() => response.status(200).send());
};
