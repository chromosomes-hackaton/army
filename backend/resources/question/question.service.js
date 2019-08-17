const createService = require('../../helpers/createService');
const { collectionNames } = require('../constants');
const service = createService(collectionNames.QUESTION);


module.exports = service;