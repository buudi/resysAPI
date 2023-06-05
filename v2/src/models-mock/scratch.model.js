const db = require("./mock-db.json");

exports.selectApartments = () => {
    return {
        rows: db.apartments
    };
}

exports.selectTenants = () => {
    return {
        rows: db.tenants
    };
}