const IDgenerator = require('../utils/IDgenerator');
// const model = require('../models/scratch.model');

class ScratchController {
    constructor(pathPassed) {
        this.basePath = pathPassed;
        this.model = require(`${this.basePath}/scratch.model`);
    }

    printHello = (req, res) => {
        res.status(200).json({
            message: "Hello from the server"
        })
    }

    getApartments = async (req, res) => {
        const apartments = await this.model.selectApartments();
        res.status(200).json({
            apartments
        })
    }

    generateId = (req, res) => {
        const id = IDgenerator.generateApartmentId();
        res.status(200).json({
            id
        })
    }

    getAllTenants = async (req, res) => {
        const tenants = await this.model.selectTenants();
        res.status(200).json({
            tenants
        })
    }

}

module.exports = ScratchController;


// exports.printHello = (req, res) => {
//     res.status(200).json({
//         message: "Hello from the server"
//     })
// }
//
// exports.getApartments = async (req, res) => {
//     const apartments = await model.selectApartments();
//     res.status(200).json({
//         apartments
//     })
// }
//
// exports.generateId = (req, res) => {
//     const id = IDgenerator.generateApartmentId();
//     res.status(200).json({
//         id
//     })
// }
//
// exports.getAllTenants = async (req, res) => {
//     const tenants = await model.selectTenants();
//     res.status(200).json({
//         tenants
//     })
// }