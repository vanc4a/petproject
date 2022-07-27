const User = require("../models/User");
const Posts = require('../responseModels/Posts')
const mysqlQueries = require('../constants/mysqlQueries')
const Errors = require('../constants/errors')
const connection = require('../constants/mysqlConnection')


module.exports = class PostsRepository {

    getById(id){
        return connection.query(mysqlQueries.userPosts,[id]).then(res =>{
            res = res[0]
            return new Posts(null,res)
        })
    }

    getAll(){
        return connection.query(mysqlQueries.allPosts).then(posts => {
            posts = posts[0]
            return new Posts(null,posts)
        })
    }
}