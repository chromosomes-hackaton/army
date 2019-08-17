const Router = require('express').Router;
const controller = require('./specialist.controller');

const router = new Router();

router.get('/', controller.getSpecialists);

module.exports = router;