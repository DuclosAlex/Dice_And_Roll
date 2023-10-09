/**
 * @swagger
 * components:
 *   schemas:
 *     Character:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The ID of the character
 *         name:
 *           type: string
 *           description: The name of the character
 *         race:
 *           type: string
 *           description: The race of the character
 *         class:
 *           type: string
 *           description: The class of the character
 *         background:
 *           type: string
 *           description: The background of the character
 *         user_id:
 *           type: integer
 *           description: The ID of the user who owns the character
 *         games_id:
 *           type: integer
 *           description: The ID of the game associated with the character
 *         is_alive:
 *           type: boolean
 *           description: Indicates whether the character is alive
 *         created_at:
 *           type: string
 *           format: date-time
 *           description: The date and time when the character was created
 *         updated_at:
 *           type: string
 *           format: date-time
 *           description: The date and time when the character was last updated
 *         skills:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 description: The ID of the skill
 *               name:
 *                 type: string
 *                 description: The name of the skill
 *               created_at:
 *                 type: string
 *                 format: date-time
 *                 description: The date and time when the skill was created
 *               updated_at:
 *                 type: string
 *                 format: date-time
 *                 description: The date and time when the skill was last updated
 *               description:
 *                 type: string
 *                 description: A description of the skill
 *               character_id:
 *                 type: integer
 *                 description: The ID of the character associated with the skill
 *         stats:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 description: The ID of the stat
 *               level:
 *                 type: integer
 *                 description: The level of the character
 *               max_hp:
 *                 type: integer
 *                 description: The maximum hit points of the character
 *               wisdom:
 *                 type: integer
 *                 description: The wisdom stat of the character
 *               charisma:
 *                 type: integer
 *                 description: The charisma stat of the character
 *               max_mana:
 *                 type: integer
 *                 description: The maximum mana of the character
 *               strength:
 *                 type: integer
 *                 description: The strength stat of the character
 *               dexterity:
 *                 type: integer
 *                 description: The dexterity stat of the character
 *               created_at:
 *                 type: string
 *                 format: date-time
 *                 description: The date and time when the stat was created
 *               current_hp:
 *                 type: integer
 *                 description: The current hit points of the character
 *               updated_at:
 *                 type: string
 *                 format: date-time
 *                 description: The date and time when the stat was last updated
 *               character_id:
 *                 type: integer
 *                 description: The ID of the character associated with the stat
 *               constitution:
 *                 type: integer
 *                 description: The constitution stat of the character
 *               current_mana:
 *                 type: integer
 *                 description: The current mana of the character
 *               intelligence:
 *                 type: integer
 *                 description: The intelligence stat of the character
 *         items:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 description: The ID of the item
 *               name:
 *                 type: string
 *                 description: The name of the item
 *               quantity:
 *                 type: integer
 *                 description: The quantity of the item
 *               created_at:
 *                 type: string
 *                 format: date-time
 *                 description: The date and time when the item was created
 *               updated_at:
 *                 type: string
 *                 format: date-time
 *                 description: The date and time when the item was last updated
 *               description:
 *                 type: string
 *                 description: A description of the item
 *               character_id:
 *                 type: integer
 *                 description: The ID of the character associated with the item
 */

/**
 * @swagger
 * tags:
 *   name: Characters
 *   description: API endpoints related to characters
 */

/**
 * @swagger
 * /character/getById:
 *   get:
 *     summary: Get character by ID
 *     tags: [Characters]
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           description: The ID of the character to retrieve
 *     responses:
 *       200:
 *         description: Details of a character with their skills, items, and stats
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Character'
 *       400:
 *         description: Bad request if ID is not provided
 *       500:
 *         description: Some server error
 */


const express = require('express');
const { characterController } = require('../controller');
const router = express.Router();

router.get('/getById', characterController.findCharacterById);

module.exports = router;