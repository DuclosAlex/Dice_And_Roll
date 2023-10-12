const { skillModel } = require('../model');

const skillController = {

    async createSkill(req, res) {

        const skill = req.body.skill;
        const characterId = req.body.characterId;

        try {
            const result = await skillModel.createSkill(skill, characterId);

            if(result) {
                return res.status(200).json(result);
            } else {
                return res.status(500).json({ message : "Erreur dans la requête"})
            }
        } catch(error) {
            console.log(error)
        }
    },

    async deleteSkill(req, res) {
        const skillId = req.params.id;
    
        try {
          const result = await skillModel.deleteSkill(skillId);
    
          if (result.success) {
            return res.status(200).json(result);
          } else {
            return res.status(404).json({ message: "Compétence introuvable" });
          }
        } catch (error) {
          console.error(error);
          return res.status(500).json({ message: "Erreur lors de la suppression de la compétence" });
        }
      },
    
}

module.exports = skillController;