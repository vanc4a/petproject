const mysql = require('mysql2');
const uuid = require('uuid')
var passwordHash = require('password-hash');

const User = require('../models/User');
const ResponseObject = require('../models/ResponseObject');

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
            return res ? new User(res.login,res.password,res.token,res.user_role) : null
        })
    }

    signIn(password,login){
        return this.getById(login).then(user => {
            if(user){
                if(!user.token){
                    user.token = uuid.v4();
                    connection.query(mysqlRequests.setToken,[user.token,login])
                }
                return passwordHash.verify(password, user.password) ? 
                (new ResponseObject(user.token,null,user.user_role)) :
                new ResponseObject(null,Errors.IncorrectLogOrPass,null)
            }
            else {
                return new ResponseObject(null,Errors.UndefinedUser,null)
            }
        })
    }

    signUp(password, login){
        return this.getById(login).then(user => {
            if(!user){
                return connection.query(mysqlRequests.registration,[login,passwordHash.generate(password),'user'])
                .then(() => new ResponseObject(null,null,null))
            }
            else {
                return new ResponseObject(null,Errors.AlreadyInUse,null)
            }
        })
    }
}