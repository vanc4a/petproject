import User from "../../interfaces/db/User";

export default class Profile {
  name: string;
  id: number;
  constructor(user: User) {
    this.name = user.login;
    this.id = user.id;
  }
};
