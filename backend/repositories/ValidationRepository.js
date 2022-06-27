
const acceptSymbols = /^[a-zA-Z0-9]+$/;

module.exports = class ValidationRepository {
    getValidation(str){
        return acceptSymbols.test(str)
    }
}
