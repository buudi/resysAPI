const db = require("../models/index");

exports.selectApartments = async () => {
    const query = "SELECT * FROM main_apartments";
    return await db.query(query);
}

exports.selectTenants = async () => {
    const query = "SELECT * FROM tenants";
    return await db.query(query);
}