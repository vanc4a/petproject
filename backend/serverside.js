const express = require('express');
const app = express();

const Router = require('./src/Router');

app.use('', Router);

app.listen(3000);
