const { json } = require('express')
const UsersRepository = require('./src/repositories/UsersRepository')
const SignUp = require('./src/responseModels/SignUp')

exports.Auth = (req,res,next) => {
    let usersRepository = new UsersRepository()
    return usersRepository.getByToken(req.headers.token).then(user => {
        user ? (res.user = user,next()) : res.send(JSON.stringify(new SignUp('Undefined user')))
    })
}