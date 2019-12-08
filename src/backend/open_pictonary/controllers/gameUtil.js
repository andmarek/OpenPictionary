import mongoose from 'mongoose'; 
import user from '../models/userModel.js';
import gameTopics from '../util/gameTopics.js';
import mathUtil from '../util/mathUtil.js';
/**
 * Picks a topic at random and assigns it to the room
 */
exports.generateTopic = (room) => {
    const list = gameTopics.getTopics();
    const index = mathUtil.getRandomInt(0, list.length);
    room.topic = list[index];
    return room;
}
exports.generateWord = () => {
    const list = gameTopics.getWords();
    return list[mathUtil.getRandomInt(0, list.length)];
}
/**
 * Returns true if string s and t are equal
 * Ignores case and whitespaces
 */
exports.cmp = (s,t) => {
    return s.trim().toLowerCase() === t.trim().toLowerCase();
}
/**
 * Returns topic for the room
 */
exports.getTopic = (req, res) => {
   
};

exports.getAllUsers = (req, res) => {
    user.find({}, (err, users) => {
        if (err) {
            res.send(err);
        }

        res.json(users);
    });
};

exports.createRoom = (req, res) => {
    const newUser = new user(req.body);

    newUser.save((err, user) => {
        if (err) {
            res.send(err);
        }

        res.json(user);
    });
};

exports.joinRoom = (req, res) => {
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