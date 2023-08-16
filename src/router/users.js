/**
 * @swagger
 * components : 
 *  schemas : 
 *      User:
 *          type: object
 *          required:
 *              - pseudo
 *              - email
 *              - is_admin
 *              - password
 *          properties : 
 *              id:
 *                  type: string
 *                  description: The auto-generated id of the user
 *              pseudo: 
 *                  type: string
 *                  description: alias use by the user on this website
 *              password:
 *                  type: string
 *                  description: password for user authentification, secure with bcrypt module
 *              email:
 *                  type: string
 *                  description: email use for user authentification, should be unique
 *              is_admin:
 *                  type: boolean
 *                  description: if true, user is admin and have all rights on the app, if false, user have common right
 *              created_at:
 *                  type: Date
 *                  description: creation date of the user account 
 *          example:
 *              pseudo: OrionStellaire
 *              is_admin : true
 *              email : fake.email@hotmail.fr
 *              password : hfezuiz58s48egYFU8548R9
 * 
 */

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: users management API
 * /user/create:
 *  post:
 *      summary: Create a new user
 *      tags: [Users]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/User'
 *      responses: 
 *          200:
 *              description: The created user
 *              content:
 *                  application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/User'
 *          500:
 *              description: Some server error
 * 
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Users management API
 * /user/getAll:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: List of all users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 */


const express = require('express');
const { userController } = require('../controller');
const router = express.Router();


router.post('/create', userController.createUser);
router.get('/getAll', userController.getAllUser);

module.exports = router;