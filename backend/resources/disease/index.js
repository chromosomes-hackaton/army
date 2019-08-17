const Router = require('express').Router;
const controller = require('./disease.controller');

const router = new Router();

router.get('/', controller.getDiseases);
router.get('/:diseaseId', controller.getDiseaseById);

module.exports = router;