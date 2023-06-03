const db = require("../models/index");

exports.selectApartments = async () => {
    const query = "SELECT * FROM main_apartments";
    const result = await db.query(query);
    return result.rows;
}

exports.selectTenants = async () => {
    const query = "SELECT * FROM tenants";
    const response = await db.query(query);
    return response.rows;
}