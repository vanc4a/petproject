import express from 'express';
import bodyParser from 'body-parser';
import Router from './Router';
import { requestParser } from './Middleware';

const app = express();

app.use(bodyParser.json(), requestParser, Router);

app.listen(3000);
