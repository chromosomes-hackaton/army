const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    apiUrl: 'http://localhost:3002',
  },
};

module.exports = config[env];
