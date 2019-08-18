const articleService = require('./article.service');

module.exports.getArticles = async (req, res) => {
    try {
        const data = await articleService.find();
        res.status(200);
        res.send([...data]);
      } catch(e) {
        console.log(e);
    }
};

module.exports.getArticlesBySpecialistIds = async(req, res) => {
    console.log(req.body);
    const {specialistIds} = req.body;
    try {
        const articles = (await articleService.find()).filter(el=>specialistIds.includes(el.specialistId.toString()));
        res.status(200);
        res.send([...articles]);
        } catch(e) {
        console.log(e);
    }
}
