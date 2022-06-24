const express = require('express');
const app = express();

const usersRouter = require('./routes/usersRouter')
const contentRouter = require('./routes/contentRouter')

app.use('/users',usersRouter)
app.use('/content',contentRouter)

console.log(1332)

app.listen(3000)