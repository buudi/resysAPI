const db = require("../index");

exports.getAllApartments = async () => {
    const query = "SELECT * FROM main_apartments";
    return await db.query(query);
}