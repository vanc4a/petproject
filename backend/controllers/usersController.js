const UserRepository = require('../repositories/UserRepository')
const ValidationRepository = require('../repositories/ValidationRepository')
const Auth = require('../models/Auth')

const userRepository = new UserRepository();
const validationRepository = new ValidationRepository();

const notValid = new Auth(null,'Only latters and numbers!',null)

exports.signIn = (request,response) => {
    request.on('data',data =>{
        data = JSON.parse(`${data}`)
        if(validationRepository.getValidation(data.login)){
            userRepository.signIn(data.pass,data.login).then(res => response.send(JSON.stringify(res)))
        }
        else{
            response.send(JSON.stringify(notValid))
        }
    })

}

exports.signUp = (request,response) => {
    request.on('data',data =>{
        data = JSON.parse(`${data}`)
        if(validationRepository.getValidation(data.login)){
            userRepository.signUp(data.pass,data.login).then(res => response.send(JSON.stringify(res)))
        }
        else{
            response.send(JSON.stringify(notValid))
        }
    })
}
