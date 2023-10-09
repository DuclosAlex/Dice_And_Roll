const db = require('../../config/database/dbConnect');

const statsModel = {

    async updateStats(statsToUpdate) {

        try {

            console.log(statsToUpdate);
        } catch(error) {
            console.log(error)
        }
    }
}

module.exports =  statsModel;