const specialistService = require('./specialist.service');

module.exports.getSpecialists = async (req, res) => {
  try {
    const data = await specialistService.find();
    res.status(200);
    res.send([...data]);
  } catch(e) {
    console.log(e);
  }
};
