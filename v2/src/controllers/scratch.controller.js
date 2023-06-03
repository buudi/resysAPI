const IDgenerator = require('../utils/IDgenerator');

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