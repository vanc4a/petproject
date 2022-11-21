export default class Post {
  image: string;

  description: string;

  constructor(req) {
    this.image = req.image;
    this.description = req.description;
  }
}
