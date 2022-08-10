import Post from '../interfaces/db/Post'
import connection from '../constants/mysqlConnection';
import mysqlQueries from '../constants/mysqlQueries';

export default class PostsRepository {
  posts = [];

  getById(id: number): Promise<Post[]> {
    return connection.query(mysqlQueries.userPosts, [id]).then((res: any) =>{
      this.posts = res[0];
      return this.posts;
    });
  }

  getAll(): Promise<Post[]> {
    return connection.query(mysqlQueries.allPosts).then((res: any) => {
      this.posts = res[0];
      return this.posts;
    });
  }

  post(post: Post, userId: number) {
    return connection.query(mysqlQueries.post, [userId,
      post.image,
      post.description]);
  }
};