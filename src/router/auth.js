const express = require('express');
const router = express.Router();
const  authenticate  = require('../middleware/authenticate')

router.get('/check-auth', authenticate, (req, res) => {

    const user = req.user;
    console.log("user", user);
    res.json(user)
});

module.exports = router;