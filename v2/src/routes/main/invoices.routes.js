const Router = require("express-promise-router");
const router = new Router();
const InvoicesController = require("../../controllers/invoices.controller");

module.exports = (modelPath) => {
    const controller = new InvoicesController(modelPath);
    router.get("/", controller.getAllInvoices);
    router.post("/", controller.addAnInvoice);
    router.put('/', controller.updateAnInvoice);
    // router.delete("/", controller.archiveInvoice);
    return router;
}