module.exports = class ResponseObject {
    constructor(token,err,role){
        this.token = token,
        this.error = err,
        this.user_role = role
    }
}