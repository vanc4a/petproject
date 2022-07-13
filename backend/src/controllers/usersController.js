const UsersRepository = require('../repositories/UsersRepository')
const Validator = require('../services/Validator')
const Auth = require('../responseModels/Auth')

const usersRepository = new UsersRepository();
const validator = new Validator();

const notValid = new Auth(null,'Only latters and numbers!',null)

exports.signIn = (request,response) => {
    request.on('data',data =>{
        data = JSON.parse(`${data}`)
        if(validator.getValidation(data.login)){
            usersRepository.signIn(data.pass,data.login).then(res => response.send(JSON.stringify(res)))
        }
        else{
            response.send(JSON.stringify(notValid))
        }
    })

}

exports.signUp = (request,response) => {
    request.on('data',data =>{
        data = JSON.parse(`${data}`)
        if(validator.getValidation(data.login)){
            usersRepository.signUp(data.pass,data.login).then(res => response.send(JSON.stringify(res)))
        }
        else{
            response.send(JSON.stringify(notValid))
        }
    })
}

exports.getUserProfile = (request,response) => {
    request.on('data',data =>{
        data = JSON.parse(`${data}`)
        usersRepository.getProfile(data.token).then(res => response.send(JSON.stringify(res)))
    })
}
