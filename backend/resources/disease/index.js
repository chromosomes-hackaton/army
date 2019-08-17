const Router = require('express').Router;
const controller = require('./disease.controller');

const router = new Router();

router.get('/', controller.getDiseases);

module.exports = router;