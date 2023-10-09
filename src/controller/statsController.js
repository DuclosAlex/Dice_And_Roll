const { statsModel } = require('../model');

const statsController = {

    async updateStats(req, res) {

        const statsToUpdate = req.body;
        console.log(statsToUpdate);
        const statsID = req.params.id;

        console.log(statsID);
        await statsModel.updateStats(statsToUpdate);

        return true;
    }
}

module.exports = statsController;