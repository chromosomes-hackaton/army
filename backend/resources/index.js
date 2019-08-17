const userRouter = require('./user');
const specialistRouter = require('./specialist');
const articleRouter = require('./article');
const diseaseRouter = require('./disease');
require('./parse');

module.exports = (app) => {
  app.use('/user', userRouter);
  app.use('/specialist', specialistRouter);
  app.use('/article', articleRouter);
  app.use('/disease', diseaseRouter);
};