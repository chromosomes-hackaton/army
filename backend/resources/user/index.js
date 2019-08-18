const Router = require('express').Router;
const controller = require('./user.controller');

const router = new Router();

router.get('/', controller.getUsers);
router.get('/:userId', controller.getUserById);
router.post('/sign-in', controller.signIn);
router.post('/sign-up', controller.signUp);

module.exports = router;