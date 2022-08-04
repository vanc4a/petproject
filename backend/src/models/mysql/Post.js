module.exports = class Post {
  constructor(post) {
    this.id = post.id;
    this.user_id = post.user_id;
    this.image = post.image;
    this.description = post.description;
  }
};
