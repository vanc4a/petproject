const User = require("../models/User");
const Posts = require('../responseModels/Posts')
const mysqlRequests = require('../constants/mysqlRequests')
const Errors = require('../constants/errors')
const connection = require('../constants/mysqlConnection')


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
                    return new Posts(null,res)
                })
            }
            else {
                return new Posts(Errors.UndefinedUser,null)
            }
        })
    }

    getAllPosts(token){
        return this.getByToken(token).then(res =>{
            if(res){
                return connection.query(mysqlRequests.allPosts).then(posts => {
                    posts = posts[0]
                    return new Posts(null,posts)
                })
            }
            else {
                return new Posts(Errors.UndefinedUser,null)
            }
        })
    }
}