const express = require('express');

const UserCtrl = require('../controllers/user-ctrl');

const userRouter = express.Router();

userRouter.post('/user', UserCtrl.createUser);
userRouter.get('/users', UserCtrl.findAll);
userRouter.get('/user/:userId', UserCtrl.findOne)

module.exports = userRouter;
