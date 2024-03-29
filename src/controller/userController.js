const { userModel } = require('../model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userController = {

    async createUser(req, res) {

        try {

            console.log(req.body);

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

    async logUser(req, res) {

        try {
            const {password} = await userModel.findByMail(req.body.email, false);

            if(!password) {
                res.status(401).json({error: "Désolé, un ou plusieurs de vos identifiants sont faux !"});
            }

            const compare = await bcrypt.compare(req.body.password, password);
            
            if(compare === false) {
                res.status(401).json({error: "Désolé, un ou plusieurs de vos identifiants sont faux !"})
            }

            const result = await userModel.findByMail(req.body.email, compare);

            const tokenData = {
                userIsAdmin: result.user.is_admin,
                user: result.user
            };

            console.log('token data', tokenData)

            if(result !== undefined) {
                const token = jwt.sign(tokenData, process.env.JWT_SECRET);
                return res.json({success: true, token: token})
            }

            res.json(result); 
        } catch(error) {
            console.error(error);
            throw error;
        }

    },

}

module.exports = userController;