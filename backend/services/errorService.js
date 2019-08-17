module.exports.ERROR_TYPES = [
  'default',
  'auth',
];

module.exports.throwErr = (message = 'Unexpected error occured', type = 'default') => {
  throw Error(JSON.stringify({
    message,
    type,
  }));
};

module.exports.throwAuthErr = (message = 'Auth error occured') => {
  throw Error(JSON.stringify({
    message,
    type: 'auth',
  }));
};
