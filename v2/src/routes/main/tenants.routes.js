const Router = require('express-promise-router');
const router = new Router();

const TenantsController = require('../../controllers/tenants.controller');
module.exports = (modelPath) => {
    const controller = new TenantsController(modelPath);
    router.get('/', controller.getAllTenants);
    router.post('/', controller.addTenant);
    router.put('/', controller.updateTenant);
    router.patch('/', controller.moveTenant);

    return router;
}