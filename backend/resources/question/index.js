const Router = require('express').Router;
const controller = require('./question.controller');

const router = new Router();

router.get('/', controller.getQuestions);

module.exports = router;