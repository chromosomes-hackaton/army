const Router = require('express').Router;
const controller = require('./article.controller');

const router = new Router();

router.get('/', controller.getArticles);
router.post('/bySpecialistIds', controller.getArticlesBySpecialistIds);

module.exports = router;