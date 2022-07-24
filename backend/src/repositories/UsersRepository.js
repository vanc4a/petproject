const uuid = require('uuid')
var passwordHash = require('password-hash');
const mysqlRequests = require('../constants/mysqlRequests')
const User = require('../models/User');
const Auth = require('../responseModels/Auth');
const Errors = require('../constants/errors')
const connection = require('../constants/mysqlConnection')

module.exports = class UsersRepository {

    getByToken(token){
        return connection.query(mysqlRequests.getByToken,[token]).then(res => {
            res = res[0][0]
            return res ? new User(res.login,res.password,res.token,res.user_role,res.id) : null
        })
    }

    getByLogin(id){
        return connection.query(mysqlRequests.login,[id]).then(res => {
            res = res[0][0]
            return res ? new User(res.login,res.password,res.token,res.user_role,res.id) : null
        })
    }

    getById(id){
        return connection.query(mysqlRequests.getById,[id]).then(res => {
            res = res[0][0]
            return res ? new User(res.login,res.password,res.token,res.user_role,res.id) : null
        })
    }

    signIn(password,login){
        connsole.log('test')
        return this.getByLogin(login).then(user => {
            if(user){
                return passwordHash.verify(password, user.password) ? 
                (this.setToken(user),new Auth(user.token,null,user.user_role)) :
                new Auth(null,Errors.IncorrectLogOrPass,null)
            }
            else {
                return new Auth(null,Errors.UndefinedUser,null)
            }
        })
    }

    setToken(user){
        if(!user.token){
            user.token = uuid.v4();
            connection.query(mysqlRequests.setToken,[user.token,user.login])
        }
    }

    signUp(password, login){
        return this.getByLogin(login).then(user => {
            if(!user){
                return connection.query(mysqlRequests.registration,[login,passwordHash.generate(password),'user'])
                .then(() => new Auth(null,null,null))
            }
            else {
                return new Auth(null,Errors.AlreadyInUse,null)
            }
        })
    }

    getProfile(token){
        return this.getByToken(token).then(user => {
            if(user){
                return {error:null,name:user.login}
            }
            return {error:'Undefined user',name:null}
        })
    }
    
    getProfileById(id){
        return this.getById(id).then(user => {
            if(user){
                return {error:null,name:user.login}
            }
            return {error:'Undefined user',name:null}
        })
    }
}