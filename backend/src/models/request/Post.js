module.exports = class Post {
  constructor(req) {
    this.image = req.image;
    this.description = req.description;
  }
};
