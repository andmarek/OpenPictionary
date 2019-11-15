import mongoose from 'mongoose'; 
import user from '../models/userModel.js';

exports.getUser = (req, res) => {
    user.findById(req.params.userId, (err, user) => {
        if (err) {
            res.send(err);
        }

        res.json(user);
    });
};

exports.getAllUsers = (req, res) => {
    user.find({}, (err, users) => {
        if (err) {
            res.send(err);
        }

        res.json(users);
    });
};

exports.createUsesr = (req, res) => {
    const newUser = new user(req.body);

    newUser.save((err, user) => {
        if (err) {
            res.send(err);
        }

        res.json(user);
    });
};

exports.updateUser = (req, res) => {
    user.findOneAndUpdate({
        _id: req.params.userId
    }, req.body,
        (err, user) => {
            if (err) {
                res.send(err);
            }

            res.json(user);
        });
};

exports.deleteUser = (req, res) => {
    user.remove({
        _id: req.params.userId
    }, (err) => {
        if (err) {
            res.send(err);
        }

        res.json({
            message: `user ${req.params.userId} successfully deleted`
        });
    });
}