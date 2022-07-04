const User = require("../models/User");
const mysql = require('mysql2');

const mysqlRequests = {
    getByToken : 'SELECT * FROM users WHERE token = ?',
    userPosts: 'SELECT * FROM posts WHERE user_id = ?',
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
            return res ? new User(res.login,res.password,res.token,res.user_role,res.id) : null
        })
    }
    getUserPosts(token){
        return this.getByToken(token).then(user => {
            if(user){
                return connection.query(mysqlRequests.userPosts,[user.id]).then(res =>{
                    res = res[0]
                    return res ? {error: null,posts: res} : {error: null,posts: null}
                })
            }
            else {
                return {error: 'undefined user',posts: null}
            }
        })
    }
    getAllPosts(token){
        return this.getByToken(token).then(res =>{
            if(res){
                return connection.query(mysqlRequests.allPosts).then(posts => {
                    posts = posts[0]
                    return {error: null, posts: posts}
                })
            }
            else {
                return {error: 'Undefined user', posts:null}
            }
        })
    }
}