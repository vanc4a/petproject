import express from 'express'
import Router from './Router';
import bodyParser from 'body-parser'
import {requestParser} from './Middleware'

const app = express();

app.use(bodyParser.json(), requestParser, Router);

app.listen(3000);
