import user from '../controllers/userController.js';

export default (app) => {
    app.route('/users')
        .get(user.getAllUsers)
        .post(user.createUser);

    app.route('/users/:userId')
        .get(user.getUser)
        .put(user.updateUser)
        .delete(user.deleteUser);
    
};
