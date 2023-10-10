const db = require('../../config/database/dbConnect');

const statsModel = {

    async updateStats(statsToUpdate, id) {

        try {

            const sqlQuery = `UPDATE stats SET strength=$1, constitution=$2, dexterity=$3, wisdom=$4, intelligence=$5, charisma=$6
            WHERE id= $7`;

            await db.query(sqlQuery, [
                statsToUpdate.strength,
                statsToUpdate.constitution,
                statsToUpdate.dexterity,
                statsToUpdate.wisdom,
                statsToUpdate.intelligence,
                statsToUpdate.charisma,
                id 
            ]);

            return { success : true, message : 'Statistiques mises à jour !'}
        } catch(error) {
            console.log(error)
            return { success : false, message : error.message}
        }
    }
}

module.exports =  statsModel;