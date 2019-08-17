const questionService = require('./question.service');

module.exports.getQuestions = async (req, res) => {
  try {
    const data = await questionService.find();
    res.status(200);
    res.send([...data]);
  } catch(e) {
    console.log(e);
  }
};
