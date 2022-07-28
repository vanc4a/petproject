module.exports = class Profile {
  constructor(login, id, err) {
    this.error = err;
    this.name = login;
    this.id = id;
  }
};
