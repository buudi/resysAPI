const scratch = require('./scratch.routes');
const users = require('./main/users.routes');

module.exports = (app, modelMode) => {
    let modelPath;
    if(modelMode === "default"){
        modelPath = "../models";
    } else if (modelMode === "mock") {
        modelPath = "../models-mock";
    }

    app.use('/scratch', scratch(modelPath));
    app.use('/users', users(modelPath));
}
