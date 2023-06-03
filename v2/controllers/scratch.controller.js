const IDgenerator = require('../utils/idGenerator');

exports.printHello = (req, res) => {
    res.json({
        message: "Hello from the server"
    })
}

exports.generateId = (req, res) => {
    const id = IDgenerator.generateApartmentId();
    res.json({
        id
    })
}