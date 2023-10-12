const db = require('../../config/database/dbConnect');

const skillModel = {

    async createSkill(skill, characterId) {

        console.log(characterId)

        try {
            const sqlQuery = "INSERT INTO skills (name, description, character_id) VALUES ($1, $2, $3) RETURNING *;"

            const result = await db.query(sqlQuery, [
                skill.name,
                skill.description,
                characterId
            ]);
            
            if(result.rows.lenght > 0 ) {
                const createdSkill = result.rows[0];
                return createdSkill;
            } else {
                throw new Error("La compétence n'a pas été créée avec succès")
            }
            
        } catch(error) {
            console.error(error);
            throw error;
        }
    }

}

module.exports = skillModel;