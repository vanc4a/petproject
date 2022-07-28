const PostsRepository = require('../repositories/PostsRepository');

exports.getByToken = (request, response) => {
  const postsRepository = new PostsRepository();
  postsRepository.getById(response.user.id).then((res) => response.send(JSON.stringify(res)));
};

exports.getAll = (request, response) => {
  const postsRepository = new PostsRepository();
  postsRepository.getAll().then((res) => response.send(JSON.stringify(res)));
};

exports.getById = (request, response) => {
  const postsRepository = new PostsRepository();
  postsRepository.getById(request.params.id).then((res) => response.send(JSON.stringify(res)));
};
