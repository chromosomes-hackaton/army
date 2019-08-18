const diseaseService = require('./disease.service');
const ObjectID = require('mongodb').ObjectID;
const articleService = require('../article/article.service');

module.exports.getDiseases = async (req, res) => {
    const { specialistId } = req.query;
    if (specialistId){
        try {
            const articlesIds = (await articleService.find({ specialistId })).map(el=>el._id.toString());
            const data = (await diseaseService.find()).filter(el=>articlesIds.includes(el.articleId.toString()));
            res.status(200);
            res.send([...data]);
            } catch(e) {
            console.log(e);
        }
    } else {
        try {
            const data = await diseaseService.find();
            res.status(200);
            res.send([...data]);
            } catch(e) {
            console.log(e);
        }
    }
};

module.exports.getDiseaseById = async (req, res) => {
    const { diseaseId } = req.params;
    try {
      const [{ articleId }] = await diseaseService.find({ _id: diseaseId });
      console.log(articleId);
      const data = await articleService.find({ _id: articleId });
      res.status(200);
      res.send([...data]);
    } catch(e) {
      console.log(e);
    }
};
