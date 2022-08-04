module.exports = class Profile {
  constructor(user) {
    this.name = user.login;
    this.id = user.id;
  }
};
