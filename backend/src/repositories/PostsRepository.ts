import Post from '../interfaces/db/Post';
import connection from '../constants/mysqlConnection';
import mysqlQueries from '../constants/mysqlQueries';

export default class PostsRepository {
  posts: Array<Post>;

  getById(id: number): Promise<Array<Post>> {
    return connection.query(mysqlQueries.userPosts, [id]).then((res: any) => {
      this.posts = res[0];
      return this.posts;
    });
  }

  getAll(): Promise<Array<Post>> {
    return connection.query(mysqlQueries.allPosts).then((res: any) => {
      this.posts = res[0];
      return this.posts;
    });
  }

  post(post: Post, userId: number, userLogin: string) {
    return connection.query(mysqlQueries.post, [userId,
      post.image,
      post.description,userLogin]);
  }
}
