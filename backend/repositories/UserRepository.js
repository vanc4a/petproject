const mysql = require('mysql2');
const User = require('../models/User');
const uuid = require('uuid')

const connection = mysql.createConnection({
    host: "mysql_server",
    user: "test",
    database: "pet_project",
    password: "1234"
}).promise();

const mysqlRequests = {
    login : 'SELECT * FROM users WHERE login = ?',
    registration: 'INSERT INTO users(login,password,token,user_role) VALUES(?,?,?,"user")',
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
                return user.password == password ? {token: user.token,role: user.user_role} : null
            }
            return null
        })
    }

    signUp(password, login){
        this.getById(login).then(user => {
            if(!user){
                connection.query(mysqlRequests.registration,[login,password,uuid.v4(),'user']).then((err,res) => {
                    console.log(err)
                })
            }
        })
    }
}