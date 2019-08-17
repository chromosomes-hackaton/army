const port = parseInt(process.env.PORT, 10) || 3002;

const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    apiUrl: `http://localhost:${port}`,
    port,
    mongoDB: {
      name: 'bump',
      url: 'mongodb+srv://John:fafafa@cluster0-bpvhy.mongodb.net?retryWrites=true&w=majority',
    },
  },
};

module.exports = config[env];