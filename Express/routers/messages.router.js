const messageController = require('../controllers/message.controller');

const express = require('express');

const messagesRouter = express.Router();

messagesRouter.post('/', messageController.getMessages);
messagesRouter.get('/', messageController.postMessage);

module.exports = messagesRouter;
