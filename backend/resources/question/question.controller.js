const questionService = require('./question.service');
const specialistService = require('../specialist/specialist.service');

module.exports.getQuestions = async (req, res) => {
  try {
    const specialists = await specialistService.find();
    console.log({ specialists })
    const questions = await questionService.find();
    console.log({ questions });
    const data = questions.map(q => ({
      ...q,
      specialistName: (specialists.find((spec) => spec._id.toString() === q.specialistId)).name,
    }));
    res.status(200);
    res.send([...data]);
  } catch(e) {
    console.log(e);
  }
};
