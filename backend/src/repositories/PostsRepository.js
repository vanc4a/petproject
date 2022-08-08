const Post = require('../models/mysql/Post');
const mysqlQueries = require('../constants/mysqlQueries');
const connection = require('../constants/mysqlConnection');


module.exports = class PostsRepository {
  posts = [];

  getById(id) {
    return connection.query(mysqlQueries.userPosts, [id]).then((res) =>{
      res = res[0];
      res.map((post) => this.posts.push(new Post(post)));
      return this.posts;
    });
  }

  getAll() {
    return connection.query(mysqlQueries.allPosts).then((res) => {
      res = res[0];
      res.map((post) => this.posts.push(new Post(post)));
      return this.posts;
    });
  }

  post(post, user) {
    return connection.query(mysqlQueries.post, [user.id,
      post.image,
      post.description]);
  }
};
