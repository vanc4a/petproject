const UsersRepository = require('./repositories/UsersRepository');
const Error = require('./models/response/Error')


exports.auth = (req, res, next) => {
  const usersRepository = new UsersRepository();
  return usersRepository.getByToken(req.headers.token).then((user) => {
    res.user = user;
    next();
  }).catch((e) => res.status(e.code).send(new Error(e.title)));
};
exports.requestParser = (req,res,next) => {
  switch(req.originalUrl){
    case '/signup':
      req.on('data',body => {
        console.log(body)
      })
      break;
  }
  next()
}
