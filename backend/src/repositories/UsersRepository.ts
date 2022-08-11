import { v4 as uuidv4 } from 'uuid';
import passwordHash from 'password-hash';
import User from '../interfaces/db/User';
import Errors from '../constants/errors';
import connection from '../constants/mysqlConnection';
import mysqlQueries from '../constants/mysqlQueries';
import SignIn from '../models/request/SignIn';
import SignUp from '../models/request/SignUp';

export default class UsersRepository {
  user: User;

  getByToken(token: string): Promise<User> {
    return connection.query(mysqlQueries.getByToken, [token]).then((res: any) => {
      this.user = res[0][0];
      if (!this.user) {
        throw Errors.UndefinedToken;
      }
      return this.user;
    });
  }

  getByLogin(login:string): Promise<User> {
    return connection.query(mysqlQueries.login, [login]).then((res: any) => {
      this.user = res[0][0];
      if (!this.user) {
        return null;
      }
      return this.user;
    });
  }

  getById(id:string): Promise<User> {
    return connection.query(mysqlQueries.getById, [id]).then((res: any) => {
      this.user = res[0][0];
      if (!this.user) {
        throw Errors.UndefinedUser;
      }
      return this.user;
    });
  }

  signIn(request: SignIn): Promise<string> {
    return this.getByLogin(request.login).then((user: User) => {
      if (!(this.user && passwordHash.verify(request.password, user.password))) {
        throw Errors.IncorrectLogOrPass;
      }
      this.updateToken(user);
      return user.token;
    });
  }

  signUp(request: SignUp): any {
    return this.getByLogin(request.login).then((user: User) => {
      if (user) {
        throw Errors.AlreadyInUse;
      }
      connection.query(
        mysqlQueries.registration,
        [request.login, passwordHash.generate(request.password), 'user'],
      );
    });
  }

  updateToken(user: User): void {
    this.user.token = uuidv4();
    connection.query(mysqlQueries.setToken, [user.token, user.login]);
  }
}
