module.exports = class User {
  constructor(user) {
    this.login = user.login;
    this.password = user.password;
    this.token = user.token;
    this.user_role = user.user_role;
    this.id = user.id;
  }
};