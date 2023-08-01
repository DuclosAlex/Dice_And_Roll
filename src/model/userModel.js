const db = require('../../config/database/dbConnect');

const userModel = {

    async insertUser(user) {

        let createUser;

        try {

            const values = [user.pseudo, user.email, user.password, user.is_admin];
            const nbDollars = Array.from({length: values.lenght}, (_, i) => `$${i + 1}`).join(', ');

            const sqlQuery = `INSERT INTO users (pseudo, email, password, is_admin)
            VALUES (${nbDollars})
            RETURNING *;`

            const result = db.query(sqlQuery, values);
            createUser = result.rows[0];

        } catch(e) {
            console.log(e)
        }

        return createUser;
    }
}

module.exports = userModel;