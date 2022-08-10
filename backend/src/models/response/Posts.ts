import Post from "../../interfaces/db/Post";

export default class Posts {
  posts:Array<Post>
  constructor(posts: Array<Post>) {
    this.posts = posts;
  }
};
