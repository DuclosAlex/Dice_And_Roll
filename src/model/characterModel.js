const db = require('../../config/database/dbConnect');

const characterModel = {

    async findById(id) {

        try {
            const sqlQuery = "SELECT * from get_character_with_data($1)";
            const result = await db.query(sqlQuery, [id]);

            return result.rows[0];
        } catch(error) {
            console.error(error);
            throw error;
        }
    }
}

module.exports = characterModel;