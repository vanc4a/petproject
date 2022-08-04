const uuid = require('uuid');
const passwordHash = require('password-hash');

const User = require('../models/mysql/User');

const Errors = require('../constants/errors');
const connection = require('../constants/mysqlConnection');
const mysqlQueries = require('../constants/mysqlQueries');

module.exports = class UsersRepository {
  getByToken(token) {
    return connection.query(mysqlQueries.getByToken, [token]).then((res) => {
      res = res[0][0];
      if (!res) {
        throw Errors.UndefinedUser
      }
      return new User(res);
    });
  }

  getByLogin(login) {
    return connection.query(mysqlQueries.login, [login]).then((res) => {
      res = res[0][0];
      if (!res) {
        return null
      }
      return new User(res);
    });
  }

  getById(id) {
    return connection.query(mysqlQueries.getById, [id]).then((res) => {
      res = res[0][0];
      if (!res) {
        throw Errors.UndefinedUser
      }
      return new User(res);
    });
  }

  signIn(password, login) {
    return this.getByLogin(login).then((user) => {
      if (!(user && passwordHash.verify(password, user.password))) {
        throw Errors.IncorrectLogOrPass;
      }
      this.updateToken(user);
      return user.token;
    });
  }

  signUp(password, login) {
    return this.getByLogin(login).then((user) => {
      if (user) {
        throw Errors.AlreadyInUse;
      }
      return connection.query(
          mysqlQueries.registration,
          [login, passwordHash.generate(password), 'user']);
    });
  }

  updateToken(user) {
    user.token = uuid.v4();
    connection.query(mysqlQueries.setToken, [user.token, user.login]);
  }
};
