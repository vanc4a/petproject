const PostsRepository = require('../repositories/PostsRepository')

const postsRepository = new PostsRepository();

exports.getByToken = (request,response) => {
        postsRepository.getById(response.user.id).then(res => response.send(JSON.stringify(res)))
}

exports.getAll = (request,response) => {
        postsRepository.getAllPosts().then(res => response.send(JSON.stringify(res)))
}

exports.getById = (request,response) => {
        id = request.params.id
        postsRepository.getById(id).then(res => response.send(JSON.stringify(res)))
}
