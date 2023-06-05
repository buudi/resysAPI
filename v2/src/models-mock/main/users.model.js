const db = require("../mock-db.json");

exports.getAllUsers = () => {
    return { rows: db.users };
}