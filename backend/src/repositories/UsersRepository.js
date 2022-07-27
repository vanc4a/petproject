const uuid = require('uuid')
var passwordHash = require('password-hash');
const mysqlQueries = require('../constants/mysqlQueries')
const User = require('../models/User');

const SignIn = require('../responseModels/SignIn');
const SignUp = require('../responseModels/SignUp');

const Errors = require('../constants/errors')
const connection = require('../constants/mysqlConnection')

module.exports = class UsersRepository {

    getByToken(token){
        return connection.query(mysqlQueries.getByToken,[token]).then(res => {
            res = res[0][0]
            return res ? new User(res.login,res.password,res.token,res.user_role,res.id) : null
        })
    }

    getByLogin(login){
        return connection.query(mysqlQueries.login,[login]).then(res => {
            res = res[0][0]
            return res ? new User(res.login,res.password,res.token,res.user_role,res.id) : null
        })
    }

    getById(id){
        return connection.query(mysqlQueries.getById,[id]).then(res => {
            res = res[0][0]
            return res ? new User(res.login,res.password,res.token,res.user_role,res.id) : null
        })
    }

    signIn(password,login){
        return this.getByLogin(login).then(user => {
            if(user && passwordHash.verify(password, user.password)){
                this.updateToken(user)
                return new SignIn(null,user.token)
            }
            return new SignIn(Errors.IncorrectLogOrPass,null)
        })
    }

    signUp(password, login){
        return this.getByLogin(login).then(user => {
            if(user){
                return new SignUp(Errors.AlreadyInUse) 
            }
            return connection.query(mysqlQueries.registration,[login,passwordHash.generate(password),'user'])
                .then(() => new SignUp(null)).catch(e => new SignUp(e))
        })
    }

    updateToken(user){
        user.token = uuid.v4();
        connection.query(mysqlQueries.setToken,[user.token,user.login])
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