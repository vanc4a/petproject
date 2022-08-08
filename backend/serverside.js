const express = require('express');
const app = express();
const Router = require('./src/Router');
const bodyParser = require('body-parser');
const Middleware = require('./src/Middleware');

app.use(bodyParser.json(), Middleware.requestParser, Router);

app.listen(3000);
