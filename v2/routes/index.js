const scratch = require('./scratch');

module.exports = (app) => {
    app.use('/scratch', scratch);
}
