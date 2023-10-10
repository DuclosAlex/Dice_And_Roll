
//TODO: Mettre en place la doc swagger


const express = require('express');
const { statsController } = require('../controller');
const router = express.Router();

router.put('/update/:id', statsController.updateStats);

module.exports = router;