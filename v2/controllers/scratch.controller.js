const IDgenerator = require('../utils/idGenerator');

exports.printHello = (req, res) => {
    res.status(200).json({
        message: "Hello from the server"
    })
}

exports.generateId = (req, res) => {
    const id = IDgenerator.generateApartmentId();
    res.json({
        id
    })
}