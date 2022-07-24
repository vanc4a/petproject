const UsersRepository = require('../repositories/UsersRepository')
const Validator = require('../services/Validator')
const Auth = require('../responseModels/Auth')

const usersRepository = new UsersRepository();
const validator = new Validator();

const notValid = new Auth(null,'Only latters and numbers!',null)

exports.signIn = (request,response) => {
    request.on('data',req => {
        data = JSON.parse(`${req}`)
        if(validator.getValidation(data.login)){
            usersRepository.signIn(data.pass,data.login).then(res => response.send(JSON.stringify(res)))
            }
        else{
            response.send(JSON.stringify(notValid))
        }
    })
}

exports.signUp = (request,response) => {
    console.log(req.target)
    request.on('data',req => {
        data = JSON.parse(`${req}`)
        if(validator.getValidation(data.login)){
            usersRepository.signUp(data.pass,data.login).then(res => response.send(JSON.stringify(res)))
        }
        else{
            response.send(JSON.stringify(notValid))
        }
    })
}

exports.getUserProfileByToken = (request,response) => {
    token = request.headers.token
    usersRepository.getProfile(token).then(res => response.send(JSON.stringify(res)))
}

exports.getUserProfileById = (request,response) => {
    id = request.params.id
    usersRepository.getProfileById(id).then(res => response.send(JSON.stringify(res)))
}
