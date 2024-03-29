const scratch = require('./scratch.routes');
const properties = require('./main/properties.routes');
const expenses = require('./main/expenses.routes');
const rooms = require('./main/rooms.routes');
const tenants = require("./main/tenants.routes");
const contracts = require("./main/contracts.routes");
const invoices = require("./main/invoices.routes");
// const users = require('./main/users.routes');

module.exports = (app, modelMode) => {
    let modelPath;
    if(modelMode === "default"){
        modelPath = "../models";
    } else if (modelMode === "mock") {
        modelPath = "../models-mock";
    }

    app.use('/scratch', scratch(modelPath));
    app.use('/properties', properties(modelPath));
    app.use('/properties/expenses', expenses(modelPath));
    app.use('/properties/rooms',rooms(modelPath));
    app.use('/tenants', tenants(modelPath));
    app.use('/contracts', contracts(modelPath));
    app.use('/invoices', invoices(modelPath));
    // app.use('/users', users(modelPath));
}
