const createService = require('../../helpers/createService');
const { collectionNames } = require('../constants');
const service = createService(collectionNames.USER);

module.exports = service;