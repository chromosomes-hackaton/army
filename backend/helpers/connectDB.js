const mongo = require('mongodb').MongoClient;
const isFunction = require('./isFunction');

module.exports = async (resolve, reject, {
  url = '',
  name = '',
  forceRecreate = false,
} = {}) => {
  let database = global.db;

  if (database && !forceRecreate) {
    if (isFunction(resolve)) {
      return resolve(database);
    }
    return database;
  }

  try {
    const client = await mongo.connect(url, { useNewUrlParser: true });
    database = client.db(name);
    global.db = database;
    warn(`Connected to MongoDB: "${url}"`);
    if (isFunction(resolve)) {
      resolve(database);
    }
    return database;
  } catch (err) {
    console.log("ERR", err);
    if (isFunction(reject)) {
      reject(err);
    }
    throw err;
    return err;
  }
};