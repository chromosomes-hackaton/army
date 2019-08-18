const userRouter = require('./user');
const specialistRouter = require('./specialist');
const articleRouter = require('./article');
const diseaseRouter = require('./disease');
const questionRouter = require('./question');
const imbRouter = require('./imb');
require('./parse');

module.exports = (app) => {
  app.use('/user', userRouter);
  app.use('/specialist', specialistRouter);
  app.use('/article', articleRouter);
  app.use('/disease', diseaseRouter);
  app.use('/question', questionRouter);
  app.use('/imb', imbRouter);
};