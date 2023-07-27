const Router = require('express-promise-router');
const router = new Router();

const ContractsController = require('../../controllers/contracts.controller');


module.exports = (modelPath)  => {
    const controller = new ContractsController(modelPath);

    router.get('/', controller.getAllContracts);
    router.post('/', controller.addAContract);
    router.delete('/', controller.archiveContract);

    return router;
}