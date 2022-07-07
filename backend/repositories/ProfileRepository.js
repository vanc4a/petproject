const User = require("../models/User");
const mysql = require('mysql2');

const mysqlRequests = {
    getByToken : 'SELECT * FROM users WHERE token = ?',
}

const connection = mysql.createConnection({
    host: "mysql_server",
    user: "test",
    database: "pet_project",
    password: "1234"
}).promise();

module.exports = class ProfileRepository {
    getByToken(token){
        return connection.query(mysqlRequests.getByToken,[token]).then(res => {
            res = res[0][0]
            return res ? new User(res.login,res.password,res.token,res.user_role,res.id) : null
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
}