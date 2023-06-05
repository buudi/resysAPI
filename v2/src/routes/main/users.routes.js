const Router = require('express-promise-router');
const UserController = require("../../controllers/users.controller");
const router = new Router();


module.exports = (modelPath)  => {
    const controller = new UserController(modelPath);
    router.get('/', controller.getAllUsers);
    router.post('/', controller.createUser);

    return router;
};