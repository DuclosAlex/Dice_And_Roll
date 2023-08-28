const { userModel } = require('../model');
const bcrypt = require('bcrypt');

const userController = {

    async createUser(req, res) {

        try {

            const { pseudo, email} = req.body;

            const existingUser = await userModel.getUserByPseudoOrMail(pseudo, email);

            if(existingUser) {
                return res.status(400).json({error: 'Le pseudo ou l\'email existe déjà'});
            }

            let salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
            const user = req.body;
            const result = await userModel.insertUser(user);
            res.json(result);

        } catch(error) {
            console.error(error);
            res.status(500).json({error : 'Une erreur est survenue !'})
        }
    },

    async getAllUser(req, res) {

        const users = await userModel.getAllUsers();

        res.json(users);
    },
}

module.exports = userController;