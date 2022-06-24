const express = require('express');
const contentController = require('../controllers/contentController');

const contentRouter = express.Router();

contentRouter.use('/allposts',contentController.getAllPost)
contentRouter.use('/userposts',contentController.getUserPost)

module.exports = contentRouter