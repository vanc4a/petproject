const PostsRepository = require('../repositories/PostsRepository')

const postsRepository = new PostsRepository();

exports.getUserPost = (request,response) => {
    request.on('data',data =>{
        data = JSON.parse(`${data}`)

        postsRepository.getUserPosts(data.token).then(res => response.send(JSON.stringify(res)))
    })
}

exports.getAllPost = (request,response) => {
    request.on('data',data =>{
        data = JSON.parse(`${data}`)

        postsRepository.getAllPosts(data.token).then(res => response.send(JSON.stringify(res)))
    })
}
