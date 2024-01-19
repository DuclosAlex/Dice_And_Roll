const userRouter = require('./users');
const characterRouter = require('./character');
const statsRouter = require('./stats');
const skillRouter = require('./skill');
const authRouter = require('./auth');

module.exports = {
    userRouter, characterRouter, statsRouter, skillRouter, authRouter
}