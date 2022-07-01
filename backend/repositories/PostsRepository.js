const User = require("../models/User");
const mysql = require('mysql2');

const mysqlRequests = {
    getByToken : 'SELECT * FROM users WHERE token = ?',
    userPosts: 'SELECT * FROM posts WHERE login = ?',
    allPosts: 'SELECT * FROM posts'
}

const connection = mysql.createConnection({
    host: "mysql_server",
    user: "test",
    database: "pet_project",
    password: "1234"
}).promise();

module.exports = class PostsRepository {
    getByToken(token){
        return connection.query(mysqlRequests.getByToken,[token]).then(res => {
            res = res[0][0]
            return res ? new User(res.login,res.password,res.token,res.user_role) : null
        })
    }
    getUserPosts(){

    }
    getAllPosts(){

    }
}