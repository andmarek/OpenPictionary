const express = require('express');

const UserCtrl = require('../controllers/user-ctrl');

const userRouter = express.Router();

userRouter.post('/login', (res, req) => {
    User.findOne({
        email: req.body.email
    }).then(user => {
        if (user) {
            if (bcrypt.compareSync(req.body.password, user.password)) {
                const payload = ({
                    _id: user._id,
                    username: user.username,
                    email: user.email
                });
                let token = jwd.sign(payload, process.env.SECRET_KEY, {
                    expiresIn: 1440
                })
                res.send(token)
            } else {
                res.json({
                    error: "user does not exist"
                })
            }
        } else {
            console.log("error");
        }
    }).catch(err => {
        res.send('error ' + err);
    })
});

userRouter.get('/profile', (res, req) => {
    let decoded = jwt.verify(req.headers['authorization'], process. env.SECRET_KEY)

    User.findOne({
        _id: decoded._id
    }).then( User => {
        if(User) {
            res.json(User)
        } else {
            res.send("User does not exist");
        }
    }).catch(err => {
        res.send("error: " + err);
    })
});

userRouter.post('/user', function (res, req) {
    UserCtrl.createUser
    res.redirect('/profile');
});

userRouter.get('/users', UserCtrl.findAll)

/*
userRouter.get('/users', function (res, req) {
    UserCtrl.findAll();
});*/
userRouter.get('/user/:userId', UserCtrl.findOne)

module.exports = userRouter;
