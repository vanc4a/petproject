const http = require("http");
const uuid = require('uuid');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "pet_project",
    password: "52875287"
})

const Errors = {IncorrectLogOrPass : 'Incorrect login or password!', AlreadyInUse: 'Login already in use!', UndefinedUser: 'Undefined user!'}

http.createServer((request,response) => {
    response.setHeader('Content-Type', 'application/json');

    const responseObject = {
        status: false,
        token: null,
        error: null,
        role: 'user',
        aciton: null
    }

    const responseEnd = () => {
        response.end(JSON.stringify(responseObject))
    }

    request.on('data',data => {
        data = JSON.parse(`${data}`)
        responseObject.aciton = data.process
        switch(data.process){
            case 'log':
                connection.query(`SELECT * FROM users WHERE login = "${data.login}" AND password = "${data.pass}"`,(err,res) => {
                    res.length ? 
                    (responseObject.status = true,responseObject.token = res[0].token,responseEnd())
                    :
                    (responseObject.status = false,responseObject.error = Errors.IncorrectLogOrPass,responseEnd())
                })
                break
            case 'reg':
                connection.query(`SELECT * FROM users WHERE login = "${data.login}"`,(err,res) => {
                    !res.length ?
                    (
                        connection.query(`INSERT INTO users(login,password,token,user_role) VALUES('${data.login}','${data.pass}','${uuid.v4()}','user')`,(err, results) => {
                        responseObject.status = true;
                        responseEnd();
                        })
                    )
                    :
                    (responseObject.status = false,responseObject.error = Errors.AlreadyInUse,responseEnd())
                })
                break
            case 'auth':
                connection.query(`SELECT * FROM users WHERE token = "${data.token}"`,(err,res) => {
                    res.length ? 
                    (responseObject.status = true,responseObject.role = res[0].user_role,responseEnd())
                    :
                    (responseObject.status = false,responseObject.error = Errors.UndefinedUser,responseEnd())
                })
                break
        }
    })

}).listen(3000,'localhost',() => console.log('Server start!'))

