const diseaseService = require('./disease.service');

module.exports.getDiseases = async (req, res) => {
  try {
    const data = await diseaseService.find();
    res.status(200);
    res.send([...data]);
  } catch(e) {
    console.log(e);
  }
};
