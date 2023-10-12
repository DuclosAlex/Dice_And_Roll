const { skillModel } = require('../model');

const skillController = {

    async createSkill(req, res) {

        const skill = req.body.skill;
        console.log(req.body)
        const characterId = req.body.characterId;

        try {
            const result = await skillModel.createSkill(skill, characterId);

            if(result) {
                console.log(result);
                return res.status(200).json(result);
            }
        } catch(error) {
            console.log(error)
        }
    }
}

module.exports = skillController;