/**
 * @swagger
 * components:
 *   schemas:
 *     CreateUserRequest:
 *       type: object
 *       required:
 *         - pseudo
 *         - email
 *         - is_admin
 *         - password
 *       properties:
 *         pseudo:
 *           type: string
 *           description: Alias used by the user on this website
 *         password:
 *           type: string
 *           description: Password for user authentication, secured with bcrypt module
 *         email:
 *           type: string
 *           description: Email used for user authentication, should be unique
 *         is_admin:
 *           type: boolean
 *           description: If true, user is an admin and has all rights on the app; if false, user has common rights
 *     
 *     UserLoginRequest:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: Email used for user authentication
 *         password:
 *           type: string
 *           description: User's password
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Users management API
 */

/**
 * @swagger
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

/**
 * @swagger
 * /user/create:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateUserRequest'
 *     responses:
 *       200:
 *         description: The created user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: User login
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserLoginRequest'
 *     responses:
 *       200:
 *         description: Successful login
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       401:
 *         description: Unauthorized
 */

const express = require('express');
const { userController } = require('../controller');
const router = express.Router();

router.post('/create', userController.createUser);
router.get('/getAll', userController.getAllUser);
router.post('/login', userController.logUser);

module.exports = router;
