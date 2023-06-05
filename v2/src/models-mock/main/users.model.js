const db = require("../mock-db.json");

exports.getAllUsers = () => {
    return { rows: db.users };
}

exports.createUser = (user_id, user) => {
    const newUser = {
        user_id,
        ...user
    };

    db.users.push(newUser);

    return { rows: newUser };
}