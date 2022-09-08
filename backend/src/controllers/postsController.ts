import PostsRepository from '../repositories/PostsRepository';
const minio = require('minio')

const Client = new minio.Client({
    endPoint: 'minio',
    port: 9000,
    useSSL: false,
    accessKey: 'minio-root-user',
    secretKey: 'minio-root-password'
})

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
  Client.fPutObject('img', `${request.file.filename}.png`, request.file.path, function(err, etag) {
    if (err) return console.log(err)
    response.send(request.file.filename)
  });
};
