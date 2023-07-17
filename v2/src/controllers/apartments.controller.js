const IDgenerator = require('../utils/IDgenerator');
class ApartmentsController {
    constructor(pathPassed) {
        this.basePath = pathPassed;
        this.model = require(`${this.basePath}/main/apartments.model`);
    }

    getAllApartments = async (req, res, next) => {
        try {
            // 1. query the database
            const apartments = await this.model.getAllApartments();

            // 2. if the database returned an error, throw an error
            if (apartments instanceof Error)
                throw new Error(`Error getting apartments: ${apartments.message}`);

            // 3. else, return the apartments
            res.status(200).json({
                apartments: apartments.rows
            });
        } catch (error) {
            next(error);
        }
    }

    createAnApartmentInstance = async (req, res, next) => {
        try {
            // 1. get the apartment from the request body
            const apartment = req.body;

            function isObjectNotEmpty(obj) {
                return Object.keys(obj).length !== 0;
            }

            // 2. validate the apartment object
            if (!isObjectNotEmpty(apartment))
                throw new Error(`The apartment object is empty`);

            // 3. query the database
            const result = await this.model.createAnApartmentInstance(apartment);
            res.status(201).json({
                message: "Apartment created successfully",
                result: result
            });

        } catch (error) {
            next(error);
            console.log(error)
        }
    }


    updateAnApartmentInstance = async (req, res, next) => {
        try {
            const apt_id = req.query.apt_id;
            const updates = req.body;

            // if updates object is empty, throw an error
            if (Object.keys(updates).length === 0)
                throw new Error(`The updates object is empty`);

            const result = await this.model.updateAnApartmentInstance(apt_id, updates);

            res.status(200).json({
                "message": `Apartment with id ${apt_id} updated successfully`,
                "result": result
            });
        } catch (error) {
            next(error);
        }
    }


    deleteApartment = async (req, res, next) => {
        try {
            const apt_id = req.query.apt_id;

            const result = await this.model.deleteApartment(apt_id);
            res.status(200).json({
                message: `Apartment with id ${apt_id} deleted successfully`,
                apartmentData: result.rows[0]
            });

        } catch(error){
            next(error);
        }
    }

}


module.exports = ApartmentsController;