module.exports = class User {
    constructor(login,password,token,role,id){
        this.login = login;
        this.password = password;
        this.token = token;
        this.user_role = role;
        this.id = id
    }
}