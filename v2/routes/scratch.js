const Router = require('express-promise-router');
const controller = require('../controllers/scratch.controller');
const router = new Router();
module.exports = router

router.get('/', controller.printHello);
router.get('/generateId', controller.generateId);