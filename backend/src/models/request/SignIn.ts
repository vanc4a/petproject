import Errors from "../../constants/errors";
const acceptSymbols = /^[a-zA-Z0-9]+$/;

export default class SignIn {
  login: string;
  password: string;
  constructor(req) {
    this.login = req.login;
    this.password = req.pass;
    this.validate();
  }
  validate() {
    if (acceptSymbols.test(this.password) && acceptSymbols.test(this.login)) {
      return;
    }
    throw Errors.ValidateError;
  }
};
