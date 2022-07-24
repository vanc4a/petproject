const PostsRepository = require('../repositories/PostsRepository')

const postsRepository = new PostsRepository();

exports.getByToken = (request,response) => {
        data = request.headers.token
        postsRepository.getUserPosts(data).then(res => response.send(JSON.stringify(res)))
}

exports.getAll = (request,response) => {
        data = request.headers.token
        postsRepository.getAllPosts(data).then(res => response.send(JSON.stringify(res)))
}

exports.getById = (request,response) => {
    // data = request.headers.token
    // postsRepository.getAllPosts(data).then(res => response.send(JSON.stringify(res)))
    response.send(JSON.stringify({test:213}))
}
