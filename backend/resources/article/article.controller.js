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
