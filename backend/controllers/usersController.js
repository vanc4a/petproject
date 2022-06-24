const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "mysql_server",
    user: "test",
    database: "pet_project",
    password: "1234"
})

const LoginReq = 'SELECT * FROM users WHERE login = ? AND password = ?'

exports.signIn = (request,response) => {
    request.on('data',data =>{
        data = JSON.parse(`${data}`)
        connection.query(LoginReq,[data.login,data.pass],(err,res) => console.log(res))
    })
}
exports.signUp = (request,response) => {response.send("Sign up")}