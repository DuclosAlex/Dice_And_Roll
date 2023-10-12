

const express = require('express');
const router = express.Router();
const {skillController} = require('../controller');

router.post('/create', skillController.createSkill);

module.exports = router;