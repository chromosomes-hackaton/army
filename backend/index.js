const Express = require('express');
const Router = require('express').Router;
const cors = require('cors');
const bodyParser = require('body-parser');

const config = require('./config');
const connectDB = require('./helpers/connectDB');
require('./helpers/logger');

const PORT = process.env.PORT || 3002;

const app = new Express();

// const whitelist = ['http://localhost:3000'];

// const corsOptions = {
//   origin: (origin, callback) => whitelist.includes(origin)
//     ? callback(null, true)
//     : callback(new Error('Not allowed by CORS')),
// };

app.use(cors(
  // corsOptions
));

app.use(bodyParser.json());

const router = new Router();

router.use((req, res, next) => {
  console.log('middleware');
  next();
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

const onConnect = () => {
  const resources = require( './resources');
  resources(app);
};

const onError = () => {};

connectDB(onConnect, onError, config.mongoDB);
