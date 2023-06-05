const IDgenerator = require('../utils/IDgenerator');

class ScratchController {
    constructor(basePath) {
        this.basePath = basePath;
        this.model = require(`${this.basePath}/main/users.model`);
    }


    getAllUsers = async (req, res, next) => {
        try {
            // 1. query the database
            const users = await this.model.getAllUsers();

            // 2. if the database returned an error, throw an error
            if (users instanceof Error)
                throw new Error(`Error getting users: ${users.message}`);

            // 3. else return the users
            res.status(200).json({
                users: users.rows
            });

        } catch (error) {
            next(error);
        }
    }
}

module.exports = ScratchController;