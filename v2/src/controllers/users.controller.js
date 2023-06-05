const IDgenerator = require('../utils/IDgenerator');

class UsersController {
    constructor(basePath) {
        this.basePath = basePath;
        this.model = require(`${this.basePath}/main/users.model`);
    }


    getAllUsers = async (req, res, next) => {
        const {username} = req.query;
        const {role} = req.query;
        if(username){
            try {
                // todo: query the db for the user with the username
                const user = await this.model.findUserByUsername(username);
                if (user instanceof Error)
                    throw new Error(`Error getting user: ${user.message}`);

                res.status(200).json(user.rows);
            } catch (error) {
                next(error);
            }
        } else if(role){
            try {
                const users = await this.model.findUserByRole(role);
                if (users instanceof Error)
                    throw new Error(`Error getting users: ${users.message}`);

                res.status(200).json(users.rows);
            } catch (error) {
                next(error);
            }
        } else {
            try {

                // 1. query the database
                const users = await this.model.getAllUsers();

                // 2. if the database returned an error, throw an error
                if (users instanceof Error)
                    throw new Error(`Error getting users: ${users.message}`);

                // 3. else return the users
                res.status(200).json(
                    users.rows
                );

            } catch (error) {
                next(error);
            }
        }
    }


    createUser = async (req, res, next) => {
        try {
            // 1. get the data from the request body
            const newUser = req.body;

            // 2. generate an id
            const id = IDgenerator.generateUserId();

            // 3. insert the user into the database
            const user = await this.model.createUser(id, newUser);

            // 4. if the database returned an error, throw an error
            if (user instanceof Error)
                throw new Error(`Error creating user: ${user.message}`);

            // 5. else return the user
            res.status(201).json({
                user: user.rows
            });
        } catch (error) {
            next(error);
        }
    }



}

module.exports = UsersController;