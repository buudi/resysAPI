const db = require("./mock-db.json");

exports.selectApartments = () => {
    return {
        rows: {
            flag: "mock",
            apartments: db.apartments
        }

    };
}

exports.selectTenants = () => {
    return {
        rows: {
            flag: "mock",
            tenants: db.tenants
        },

    };
}