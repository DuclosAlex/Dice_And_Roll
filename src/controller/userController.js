
const { userModel } = require('../model');
const bcrypt = require('bcrypt');

const userController = {

    async createUser(req, res) {

        try {
            let salt = await bcrypt.genSalt(10);

            req.body.password = await bcrypt.hash(req.body.password, salt);

            const user = req.body;

            console.log(user)

            const result = await userModel.insertUser(user);

            console.log(result)

            res.json(result);

        } catch(e) {
            console.log(e)
        }
    },

    async getAllUser(req, res) {

        const users = await userModel.getAllUsers();

        res.json(users);
    }
}

module.exports = userController;