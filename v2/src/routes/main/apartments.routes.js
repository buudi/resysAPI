const Router = require('express-promise-router');
const router = new Router();

const ApartmentsController = require('../../controllers/apartments.controller');

module.exports = (modelPath)  => {
    const controller = new ApartmentsController(modelPath);
    router.get('/', controller.getAllApartments);
    router.post('/', controller.createAnApartmentInstance);
    router.put('/', controller.updateAnApartmentInstance);
    router.delete('/', controller.deleteApartment);

    return router;
}