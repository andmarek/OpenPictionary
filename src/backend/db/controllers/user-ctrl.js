const User = require('../models/user-model')


exports.createUser = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json(
            {
                success: false,
                error: 'Houston, we have a problem',
            })
    }

    let user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })

    if (!user) {
        return res.status(400).json({success: false, error: err})
    }

    user.save().then(() => {
        return res.status(201).json(
            {
                success:true,
                id: user._id,
                message: 'user created',
            }
        )
    }).catch(error => {
        return res.status(400).json({
            error,
            message: 'User not created',
        })
    })
}

exports.findAll = (req, res) => {
    User.find()
        .then(users => {
            res.send(users);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error occured while retrieving users."
            });
        });
}

exports.findOne = (req, res) => {
    User.findById(req.params.userId).then(
        user => {
            if (!user) {
                return res.status(404).send({
                    message: "User not found with id " + req.params.userId
                });
            }
            res.send(user);
            console.log(user);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    
                        message: "User not found with id " + req.params.userId
                });
            }
            return res.status(500).send({ message: "Error retrieving user with id" + req.params.userId});
        });
}
