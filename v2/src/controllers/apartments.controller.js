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

}

module.exports = ApartmentsController;