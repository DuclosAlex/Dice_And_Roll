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

            
            if(result.rows.length > 0 ) {
                const createdSkill = result.rows[0];
                return createdSkill;
            } else {
                throw new Error("La compétence n'a pas été créée avec succès")
            }
            
        } catch(error) {
            console.error(error);
            throw error;
        }
    },

    async deleteSkill(id) {
        try {
          const sqlQuery = "DELETE FROM skills WHERE id = $1 RETURNING id;";
          const result = await db.query(sqlQuery, [id]);
      
          if (result.rows.length > 0) {

            const deletedSkillId = result.rows[0].id;
            return {
              success: true,
              message: `Compétence avec l'ID ${deletedSkillId} supprimée avec succès.`,
            };
          } else {
            return {
              success: false,
              message: `Aucune compétence trouvée avec l'ID ${id}.`,
            };
          }
        } catch (error) {
          console.error(error);
          return {
            success: false,
            message: "Une erreur s'est produite lors de la suppression de la compétence.",
          };
        }
      }
      

}

module.exports = skillModel;