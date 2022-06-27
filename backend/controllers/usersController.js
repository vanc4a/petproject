const mysql = require('mysql2');
const UserRepository = require('../repositories/UserRepository')
const acceptSymbols = /^[a-zA-Z0-9]+$/;

const Errors = {
    IncorrectLogOrPass : 'Incorrect login or password!', 
    AlreadyInUse: 'Login already in use!', 
    UndefinedUser: 'Undefined user!',
    FormatError: 'Only letters and numbers!'
}

const connection = mysql.createConnection({
    host: "mysql_server",
    user: "test",
    database: "pet_project",
    password: "1234"
})

const mysqlRequests = {
    login : 'SELECT * FROM users WHERE login = ? AND password = ?',
    registrationTry: 'SELECT * FROM users WHERE login = ?',
    registration: 'INSERT INTO users(login,password,token,user_role) VALUES(?,?,?,"user")',
}
const userRepository = new UserRepository();

exports.signIn = (request,response) => {

    const responseObject = {
        status: null,
        token: null,
        error: null,
        role: null,
    }

    request.on('data',data =>{
        data = JSON.parse(`${data}`)
        userRepository.signIn(data.pass,data.login).then(res => console.log(res))
        acceptSymbols.test(data.login) ? 
        (
            connection.query(mysqlRequests.login,[data.login,data.pass],(err,res) => {
                res.length ? 
                (   
                    responseObject.role = res[0].user_role,
                    responseObject.token = res[0].token,
                    responseObject.status = true,
                    response.send(JSON.stringify(responseObject))
                )
                : 
                (
                    responseObject.error = Errors.IncorrectLogOrPass,
                    responseObject.status = false,
                    response.send(JSON.stringify(responseObject))

                )
            }
        ))
        :
        (   
            responseObject.error = Errors.FormatError,
            responseObject.status = false,
            response.send(JSON.stringify(responseObject))
        )
    })

}
exports.signUp = (request,response) => {response.send("Sign up")}
