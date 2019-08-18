const bcrypt = require('bcrypt');

const jwtService = require('../../services/jwtService');
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
  try {
    const { username, password } = req.body;
  
    if (!username || !password) {
      throw new Error('Username and password are required!');
    }
    const user = await userService.findOne({ username });
    if (!user) {
      throw new Error('User doesn\'t exist!');
    }

    const match = await bcrypt.compare(password, user.passwordHash);
    if (!match) {
      throw new Error('Wrong password!');
    }
    const token = jwtService.sign({ username: user.username });
    res.status(200);
    res.send({ user, token });
  } catch (e) {
    res.status(404);
    res.send(e.message);
  }
};

module.exports.signUp = async (req, res) => {
  try {
    const { username, password } = req.body;
  
    if (!username || !password) {
      throw new Error('Username and password are required!');
    }
    const user = await userService.findOne({ username });
    if (user) {
      throw new Error('User is already exist!');
    }

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    if (!passwordHash) {
      throw new Error('Cannot hash password!');
    }
    
    const createdUser = await userService.create({ username, passwordHash });

    const token = jwtService.sign({ username: createdUser.username });
    res.status(200);
    res.send({ user: createdUser, token });
    throw new Error('Wrong password!');
  } catch (e) {
    res.status(404);
    res.send(e.message);
  }
};

module.exports.update = async (req, res) => {
    const { userId } = req.params;
    try {
        await userService.update({ _id: userId }, req.body);
        res.sendStatus(200);
    } catch (e) {
      res.status(404);
      res.send(e.message);
    }
  };
