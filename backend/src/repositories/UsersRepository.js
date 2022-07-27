const uuid = require('uuid')
var passwordHash = require('password-hash');

const User = require('../models/User');
const SignIn = require('../responseModels/SignIn');
const SignUp = require('../responseModels/SignUp');
const Profile = require('../responseModels/Profile')

const Errors = require('../constants/errors')
const connection = require('../constants/mysqlConnection')
const mysqlQueries = require('../constants/mysqlQueries')

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
    
    getProfileById(id){
        return this.getById(id).then(user => {
            if(user){
                return new Profile(user.login,user.id,null)
            }
            return new Profile(null,null,Errors.UndefinedUser)
        })
    }
}