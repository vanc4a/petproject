const ContentRepository = require('../repositories/ContentRepository')

const contentRepository = new ContentRepository();

exports.getUserPost = (request,response) => {response.send('User posts')}
exports.getAllPost = (request,response) => {response.send('All posts')}
exports.getUserProfile = (request,response) => {
    response.send('{"name":"test"}')
}
