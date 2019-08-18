const jwt = require('jsonwebtoken');
const jwtConfig = require('../config').jwtConfig;
const throwAuthErr = require('./errorService').throwAuthErr;

module.exports.sign = (data = {}) => jwt.sign(data, jwtConfig.secret, jwtConfig.options);

module.exports.verify = (token = '') => jwt.verify(token, jwtConfig.secret);

module.exports.verifyRequest = (request) => {
  if (request && request.headers) {
    const authHeader = request.headers.Authorization || request.headers.authorization;
    if (!authHeader) throwAuthErr('Authorization header is missing');

    const [authType, token] = request.headers.authorization.split(' ');
    if (authType === 'Bearer' && token) {
      try {
        return module.exports.verify(token);
      } catch(e){
        throwAuthErr('Auth token is invalid');
      }
    } else {
      throwAuthErr('Auth token is missing');
    }
  }
  throwAuthErr('Request\'s verification failed');
};
