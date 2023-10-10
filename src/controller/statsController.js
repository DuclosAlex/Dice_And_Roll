const { statsModel } = require('../model');

const statsController = {

    async updateStats(req, res) {

        const statsToUpdate = req.body;
        const statsID = req.params.id;

        try {

            
            const result = await statsModel.updateStats(statsToUpdate, statsID);
            
            if(result.success) {
                res.status(200).json({ message : result.message, success : result.success});
            } else {
                res.status(500).json({ message: result.message, success: result.success})
            }
        } catch(error) {
            res.status(500).json({ message: 'Erreur interne du serveur'})
        }

        
    }
}

module.exports = statsController;