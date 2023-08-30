const db = require('../../config/database/dbConnect');

const userModel = {

    async findByMail(email, verifyPassword) {

        try {

            console.log("test in model", verifyPassword);
            console.log("test email", email)

            if(verifyPassword) {

                const sqlQuery = `SELECT users.id, users.email, users.pseudo, users.created_at, users.is_admin,
                                    (
                                        SELECT ARRAY_AGG(characters.name)
                                        FROM characters
                                        WHERE characters.user_id = users.id
                                    ) AS characters,
                                    (
                                       SELECT ARRAY_AGG(games.name)
                                        FROM games
                                        WHERE games.user_id = users.id
                                    ) AS games
                                FROM users
                                WHERE email = $1`

                const result = await db.query(sqlQuery, [email]);
                console.log(result.rows[0]);

                return result.rows[0];

            } else {

                const sqlQuery = 'SELECT password FROM users WHERE email = $1;';
                const result = await db.query(sqlQuery, [email]);
                console.log("find somethgin", result.rows[0]);
                return result.rows[0];
            }
        } catch(error) {
            console.error(error);
            throw error;
        }
    },

    async getAllUsers() {
        let users;

        try {
            const sqlQuery = 'SELECT * FROM users;';

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
    },

    async getUserByPseudoOrMail( pseudo, mail) {

            const sqlQuery = 'SELECT * FROM users WHERE pseudo = $1 OR email = $2';
            const values = [pseudo, mail];

        try {

            const result = await db.query(sqlQuery, values);
            
            // data about the user don't leave this function
            if(result.rows[0]) {
                return true;
            } else {
                return false
            }

        } catch(error) {
            throw error;
        }
    }
}

module.exports = userModel;