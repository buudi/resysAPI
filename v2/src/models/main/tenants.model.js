const IDgenerator = require("../../utils/IDgenerator");
const db = require("../index");


exports.getAllTenants = async (apt_id) => {
    const query = "Select * from tenants where apt_id=$1";
    const values = [apt_id];
    return await db.query(query, values);
}

exports.getTenant = async (tenant_id) => {
    const query = "Select * from tenants where tenant_id=$1";
    const values = [tenant_id];
    return await db.query(query, values);
}

exports.addTenant = async (apt_id, room_id, tenant) => {
    const query= "INSERT INTO tenants \n" +
        "(tenant_id, room_id, name, emirates_id, phone_number, email, date_settle_in, apt_id) \n" +
        "VALUES ($1, $2, $3, $4, $5, $6, $7, $8)"
    const tenant_id = IDgenerator.generateTenantId();
    const values = [tenant_id, room_id, tenant.name, tenant.emirates_id, tenant.phone_number, tenant.email, tenant.date_settle_in, apt_id];
    return await db.query(query, values);
}

exports.updateTenant = async (tenant_id, updates) => {
    const getTenantQuery = "SELECT * FROM tenants WHERE tenant_id = $1;";
    const getTenantValues = [tenant_id];
    const tenant = await db.query(getTenantQuery, getTenantValues);
    let tenantObj = tenant.rows[0];

    function updateTenant(tenant, updates) {
        for (let key in updates) {
            if (tenant.hasOwnProperty(key)) {
                tenant[key] = updates[key];
            }
        }
    }

    updateTenant(tenantObj, updates);

    const updateTenantQuery = "update tenants set name=$1, emirates_id=$2, phone_number=$3, email=$4, date_settle_in=$5 where tenant_id=$6;";
    const updateTenantValues = [tenantObj.name, tenantObj.emirates_id, tenantObj.phone_number, tenantObj.email, tenantObj.date_settle_in, tenant_id];
    return await db.query(updateTenantQuery, updateTenantValues);
}

exports.moveToApartment = async (apt_id, tenant_id) => {
    const query = "update tenants set apt_id=$1 where tenant_id=$2;";
    const values = [apt_id, tenant_id];
    return await db.query(query, values);
}

exports.moveToRoom = async (room_id, tenant_id) => {
    // todo:
    //  1. verify if the room is vacant
    //  2. verify if the matched room is in the same apartment
    //  3. update the rooms table if room capacity if full after moving to the room

    console.log(`room_id: ${room_id}, tenant_id: ${tenant_id}`);
    const query = "update tenants set room_id=$1 where tenant_id=$2;";
    const values = [room_id, tenant_id];
    return await db.query(query, values);
}

// todo: archive tenant
