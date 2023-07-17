const db = require("../index");

exports.getAllApartments = async () => {
    const query = "SELECT * FROM main_apartments";
    return await db.query(query);
}

exports.createAnApartmentInstance = async (apartment) => {
    const values = [apartment.building_name, apartment.apt_number, apartment.total_rooms];
    const query = "INSERT INTO public.main_apartments(\n" +
        "\t building_name, apt_number, total_rooms)\n" +
        "\tVALUES ($1, $2, $3);"
    return await db.query(query, values);
}

exports.updateAnApartmentInstance = async (apt_id, updates) => {
    // 1. query the database to get the apartment object with the given id
    const getAptQuery = "SELECT * FROM main_apartments WHERE apt_id = $1";
    const apt = await db.query(getAptQuery, [apt_id]);
    let aptObj = apt.rows[0];

    // 2. check which fields need to be updated from "updates" object
    function updateApartment(apartment, updates) {
        for (let key in updates) {
            if (apartment.hasOwnProperty(key)) {
                apartment[key] = updates[key];
            }
        }
    }

    // 3. update the aptObj with the updates
    updateApartment(aptObj, updates);

    // 4. perform the update on the database
    const updateQuery = "UPDATE main_apartments SET building_name = $1, apt_number = $2, total_rooms = $3 WHERE apt_id = $4";
    const values = [aptObj.building_name, aptObj.apt_number, aptObj.total_rooms, apt_id];
    return await db.query(updateQuery, values);
}

exports.deleteApartment = async (apt_id) => {
    const getAptQuery = "SELECT * FROM main_apartments WHERE apt_id = $1";
    const query = "DELETE FROM main_apartments WHERE apt_id = $1";
    const apt = await db.query(getAptQuery, [apt_id]);
    await db.query(query, [apt_id]);
    return apt;
}

exports.getAnApartmentInstance = async (apt_id) => {
    const query = "SELECT * FROM main_apartments WHERE apt_id = $1";
    return await db.query(query, [apt_id]);
}