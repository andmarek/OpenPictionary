import user from '../controllers/userController.js';

export default (app) => {
    app.route('/users')
        .get(user.getAllUsers)
        .post(user.createNote);

    app.route('/users/:userId')
        .get(user.getUser)
        .put(user.updateUser)
        .delete(user.deleteUser);
};
