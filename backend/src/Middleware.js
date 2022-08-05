const UsersRepository = require('./repositories/UsersRepository');
const Error = require('./models/response/Error')
const SignUp = require('./models/request/SignUp')
const SignIn = require('./models/request/SignIn');

exports.auth = (req, res, next) => {
  const usersRepository = new UsersRepository();
  return usersRepository.getByToken(req.headers.token).then((user) => {
    res.user = user;
    next();
  }).catch((e) => res.status(e.code).send(new Error(e.title)));
};

exports.requestParser = (req,res,next) => {
    req.on('data', (body) =>{
      try {
        switch(req.originalUrl){
          case '/signup':
            res.body = new SignUp(JSON.parse(body))
            break
          case '/signin':
            res.body = new SignIn(JSON.parse(body))
            break
        }
        next()
      }
      catch (e){
        res.status(e.code).send(e)
      }
    })
}


