
const acceptSymbols = /^[a-zA-Z0-9]+$/;

module.exports = class Validator {
  getValidation(str) {
    return acceptSymbols.test(str);
  }
};
