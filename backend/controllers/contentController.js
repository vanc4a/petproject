const PostsRepository = require('../repositories/PostsRepository')

const postsRepository = new PostsRepository();

exports.getUserPost = (request,response) => {
    request.on('data',data =>{
        data = JSON.parse(`${data}`)
        console.log(data)
        postsRepository.getUserPosts(data.token).then(res => response.send(JSON.stringify(res)))
    })
}
exports.getAllPost = (request,response) => {
    request.on('data',data =>{
        data = JSON.parse(`${data}`)
        console.log(data)
        postsRepository.getAllPosts(data.token).then(res => response.send(JSON.stringify(res)))
    })}
exports.getUserProfile = (request,response) => {
    response.send('{"name":"test"}')
}
