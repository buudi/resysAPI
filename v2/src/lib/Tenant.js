const db = require("../models/index");

class Tenant {

    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    async getTenants() {
        const query = "SELECT * FROM tenants";
        const response = await db.query(query);
        return response.rows;
    }

    async tenantRoute(req, res) {
        const tenants = await this.getTenants();
        res.status(200).json({
            tenants
        })
    }

}

module.exports = Tenant;