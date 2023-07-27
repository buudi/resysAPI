const IDgenerator = require('../../utils/IDgenerator');

const db = require("../index");

exports.getAllContracts = async () => {
    const query = "Select * from contracts";
    return await db.query(query);
}

exports.getAContract = async (contract_id)=> {
    const query = "Select * from contracts where contract_id=$1";
    return await db.query(query, [contract_id]);
}

exports.getActiveContracts = async (activeValue) => {
    const query = "select * from contracts where active=$1";
    return await db.query(query, [activeValue]);
}

exports.addAContract = async (contractObject) => {
    let query;
    let queryValues;
    const contract_id = IDgenerator.generateContractId();

    if (!contractObject.notes){
        query = "INSERT INTO contracts \n" +
            "(contract_id, tenant_id, contract_start, contract_end, rent, active) \n" +
            "VALUES ($1, $2, $3, $4, $5, $6)"
        queryValues = [contract_id, contractObject.tenant_id, contractObject.contract_start, contractObject.contract_end, contractObject.rent, contractObject.active];
    } else {
        query = "INSERT INTO contracts \n" +
            "(contract_id, tenant_id, contract_start, contract_end, rent, notes, active) \n" +
            "VALUES ($1, $2, $3, $4, $5, $6, $7)";
        queryValues = [contract_id, contractObject.tenant_id, contractObject.contract_start, contractObject.contract_end, contractObject.rent, contractObject.notes, contractObject.active];
    }

    return await db.query(query, queryValues);
} // end of addAContract

exports.archiveContract = async (contract_id) => {
    const query = "UPDATE contracts SET active = false WHERE contract_id = $1";
    return await db.query(query, [contract_id]);
} // end of archiveContract