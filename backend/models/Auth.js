module.exports = class AuthObject {
    constructor(token,err,role){
        this.token = token,
        this.error = err,
        this.user_role = role
    }
}