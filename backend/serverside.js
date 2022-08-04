const express = require('express');
const app = express();
const Router = require('./src/Router');
const Middleware = require('./src/Middleware')

app.use('',Middleware.requestParser,Router);

app.listen(3000);
