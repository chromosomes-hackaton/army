const userService = require('./user.service');

module.exports.getUsers = async (req, res) => {
  try {
    const data = await userService.find();
    res.status(200);
    res.send([...data]);
  } catch(e) {
    console.log(e);
  }
};

module.exports.getUserById = async (req, res) => {
  const { userId } = req.params;

  try {
    const data = await userService.findOne({ _id: userId });
    res.status(200);
    res.send({ ...data });
  } catch(e) {
    console.log(e);
  }
};

module.exports.signIn = async (req, res) => {
};

module.exports.signUp = async (req, res) => {

};
