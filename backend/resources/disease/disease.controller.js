const diseaseService = require('./disease.service');
const articleService = require('../article/article.service');

module.exports.getDiseases = async (req, res) => {
  try {
    const data = await diseaseService.find();
    res.status(200);
    res.send([...data]);
  } catch(e) {
    console.log(e);
  }
};

module.exports.getDiseaseById = async (req, res) => {
    const { diseaseId } = req.params;
    try {
      const [{ articleId }] = await diseaseService.find({ _id: diseaseId });
      const data = await articleService.find({ _id: articleId });
      res.status(200);
      res.send([...data]);
    } catch(e) {
      console.log(e);
    }
  };
