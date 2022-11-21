import Errors from '../../constants/errors';

const acceptSymbols = /^[a-zA-Z0-9]+$/;

export default class SignUp {
  login: string;

  password: string;

  constructor(req) {
    this.validate(req);
    this.login = req.login;
    this.password = req.pass;
  }

  validate(req) {
    if (acceptSymbols.test(req.pass) && acceptSymbols.test(req.login)) {
      return;
    }
    throw Errors.ValidateError;
  }
}
