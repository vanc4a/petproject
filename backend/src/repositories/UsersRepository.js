const uuid = require('uuid');
const passwordHash = require('password-hash');

const User = require('../models/mysql/User');

const Errors = require('../constants/errors');
const connection = require('../constants/mysqlConnection');
const mysqlQueries = require('../constants/mysqlQueries');

module.exports = class UsersRepository {
/**
 * @param {string} token user token.
 * @return {User} return user or error.
*/
  getByToken(token) {
    return connection.query(mysqlQueries.getByToken, [token]).then((res) => {
      res = res[0][0];
      if (!res) {
        throw Errors.UndefinedToken;
      }
      return new User(res);
    });
  }
  /**
 * @param {string} login user token.
 * @return {User} return user or error.
*/
  getByLogin(login) {
    return connection.query(mysqlQueries.login, [login]).then((res) => {
      res = res[0][0];
      if (!res) {
        return null;
      }
      return new User(res);
    });
  }
  /**
 * @param {number} id user token.
 * @return {User} return user or fail.
*/
  getById(id) {
    return connection.query(mysqlQueries.getById, [id]).then((res) => {
      res = res[0][0];
      if (!res) {
        throw Errors.UndefinedUser;
      }
      return new User(res);
    });
  }
  /**
 * User signin
 * @param {string} password user pass.
 * @param {string} login user login.
 * @return {string} will return token or error.
*/
  signIn(request) {
    return this.getByLogin(request.login).then((user) => {
      if (!(user && passwordHash.verify(request.password, user.password))) {
        throw Errors.IncorrectLogOrPass;
      }
      this.updateToken(user);
      return user.token;
    });
  }
  /**
 * User signup
 * @param {string} password user pass.
 * @param {string} login user login.
*/
  signUp(request) {
    return this.getByLogin(request.login).then((user) => {
      if (user) {
        throw Errors.AlreadyInUse;
      }
      return connection.query(
          mysqlQueries.registration,
          [request.login, passwordHash.generate(request.password), 'user']);
    });
  }

  updateToken(user) {
    user.token = uuid.v4();
    connection.query(mysqlQueries.setToken, [user.token, user.login]);
  }
};
