const UsersRepository = require('../repositories/UsersRepository')
const Validator = require('../services/Validator')
const SignIn = require('../responseModels/SignIn')
const SignUp = require('../responseModels/SignUp')

const usersRepository = new UsersRepository();
const validator = new Validator();

exports.signIn = (request,response) => {
    request.on('data',req => {
        data = JSON.parse(`${req}`)
        if(validator.getValidation(data.login)){
            usersRepository.signIn(data.pass,data.login).then(res => response.send(JSON.stringify(res)))
            }
        else{
            response.send(JSON.stringify(new SignIn("Only latters",null)))
        }
    })
}

exports.signUp = (request,response) => {
    request.on('data',req => {
        data = JSON.parse(`${req}`)
        if(validator.getValidation(data.login)){
            usersRepository.signUp(data.pass,data.login).then(res => response.send(JSON.stringify(res)))
        }
        else{
            response.send(JSON.stringify(new SignUp('Only latters')))
        }
    })
}

exports.getUserProfileByToken = (request,response) => {
    id = response.user.id
    usersRepository.getProfileById(id).then(res => response.send(JSON.stringify(res)))
}

exports.getUserProfileById = (request,response) => {
    id = request.params.id
    usersRepository.getProfileById(id).then(res => response.send(JSON.stringify(res)))
}
