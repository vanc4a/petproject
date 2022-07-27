const PostsRepository = require('../repositories/PostsRepository')

exports.getByToken = (request,response) => {
        let postsRepository = new PostsRepository();
        postsRepository.getById(response.user.id).then(res => response.send(JSON.stringify(res)))
}

exports.getAll = (request,response) => {
        let postsRepository = new PostsRepository();
        postsRepository.getAll().then(res => response.send(JSON.stringify(res)))
}

exports.getById = (request,response) => {
        let postsRepository = new PostsRepository();
        postsRepository.getById(request.params.id).then(res => response.send(JSON.stringify(res)))
}
