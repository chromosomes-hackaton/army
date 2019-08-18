const Router = require('express').Router;
const controller = require('./imb.controller');

const router = new Router();

router.get('/', controller.getIMB);

module.exports = router;