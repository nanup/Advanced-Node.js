const friendContoller = require('../controllers/friend.controller');

const express = require('express');

const friendsRouter = express.Router();

friendsRouter.post('/', friendContoller.postFriend);
friendsRouter.get('/', friendContoller.getFriends);
friendsRouter.get('/:id', friendContoller.getFriendById);

module.exports = friendsRouter;
