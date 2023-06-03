const scratch = require('./scratch.route');

module.exports = (app, modelMode) => {
    let modelPath;
    if(modelMode === "default"){
        modelPath = "../models";
    } else if (modelMode === "mock") {
        modelPath = "../models-mock";
    }

    app.use('/scratch', scratch(modelPath));
}
