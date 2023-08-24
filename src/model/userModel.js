const db = require('../../config/database/dbConnect');

const userModel = {

    async getAllUsers() {
        let users;

        try {
            const sqlQuery = `SELECT * FROM users;`;

            const result = await db.query(sqlQuery);
            users = result.rows;

        } catch(e) {
            console.error(e);
            throw e;
        }

        return users;
    },

    async insertUser(user) {

        let createUser;

        try {

            const values = [user.pseudo, user.email, user.password];
            const nbDollars = Array.from({length: values.length}, (_, i) => `$${i + 1}`).join(', ');

            const sqlQuery = `INSERT INTO users (pseudo, email, password)
            VALUES (${nbDollars})
            RETURNING *;`

            const result = await db.query(sqlQuery, values);
            createUser = result.rows[0];

        } catch(e) {
            console.error(e)
            throw e;
        }

        return createUser;
    }
}

module.exports = userModel;