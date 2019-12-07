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

    const user = new User(body)

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

