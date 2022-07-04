const mysql = require('mysql2');
const uuid = require('uuid')
var passwordHash = require('password-hash');

const User = require('../models/User');
const Auth = require('../models/Auth');

const Errors = {
    IncorrectLogOrPass : 'Incorrect login or password!', 
    AlreadyInUse: 'Login already in use!', 
    UndefinedUser: 'Undefined user!',
}

const connection = mysql.createConnection({
    host: "mysql_server",
    user: "test",
    database: "pet_project",
    password: "1234"
}).promise();

const mysqlRequests = {
    login : 'SELECT * FROM users WHERE login = ?',
    registration: 'INSERT INTO users(login,password,user_role) VALUES(?,?,?)',
    setToken: 'UPDATE users set token = ? WHERE login = ?'
}

module.exports = class UserRepository {

    getById(id){
        
        return connection.query(mysqlRequests.login,[id]).then(res => {
            res = res[0][0]
            return res ? new User(res.login,res.password,res.token,res.user_role,res.id) : null
        })
    }

    signIn(password,login){
        return this.getById(login).then(user => {
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
        return this.getById(login).then(user => {
            if(!user){
                return connection.query(mysqlRequests.registration,[login,passwordHash.generate(password),'user'])
                .then(() => new Auth(null,null,null))
            }
            else {
                return new Auth(null,Errors.AlreadyInUse,null)
            }
        })
    }
}