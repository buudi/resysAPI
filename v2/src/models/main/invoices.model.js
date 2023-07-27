const IDgenerator = require('../../utils/IDgenerator');
const db = require("../index");

exports.getAllInvoices = async () => {
    const query = "select * from invoices";
    return await db.query(query);
}

exports.getAnInvoice = async (invoice_id) => {
    const query = "select * from invoices where invoice_id=$1";
    return await db.query(query, [invoice_id]);
}

exports.addAnInvoice = async (invoiceObject) => {
    let query;
    let queryValues;
    const invoice_id = IDgenerator.generateInvoiceId();
    if(!invoiceObject.notes){
        query = "insert into invoices (invoice_id, tenant_id, invoice_date, amount, amount_paid) values ($1, $2, $3, $4, $5)";
        queryValues = [invoice_id, invoiceObject.tenant_id, invoiceObject.invoice_date, invoiceObject.amount, invoiceObject.amount_paid];
    } else {
        query = "insert into invoices (invoice_id, tenant_id, invoice_date, amount, amount_paid, notes) values ($1, $2, $3, $4, $5, $6)";
        queryValues = [invoice_id, invoiceObject.tenant_id, invoiceObject.invoice_date, invoiceObject.amount, invoiceObject.amount_paid, invoiceObject.notes];
    }
    return await db.query(query, queryValues);
} // end of addAnInvoice