const { characterModel } = require('../model');

const characterController = {

    async findCharacterById(req, res) {

        try {

            console.log(req.body)
            const id = req.body.id;

            if(!id) {
                return res.status(400).json({error: 'Pas d\'identifiant présent'});

            }

            const result = await characterModel.findById(id);
            console.log('result', result)
            return res.json(result);

        } catch(error) {
            console.log(error);
        }
    }
}

module.exports = characterController;