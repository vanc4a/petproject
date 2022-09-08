import express from 'express';
import bodyParser from 'body-parser';
import Router from './Router';
import { requestParser } from './Middleware';
import multer from 'multer';
const upload = multer({dest:'./tmp'});

const app = express();

app.use('/api',(req,res,next) =>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept, token, file");
    next()
},bodyParser.json(), upload.single('file'), requestParser, Router);

app.listen(3000);
