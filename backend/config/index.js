const port = parseInt(process.env.PORT, 10) || 3002;

const env = process.env.NODE_ENV || 'development';

const jwtConfig = ({
  secret: 'jwt chromosomes dev server',
  options: {
    expiresIn: '3h',
  },
});

const config = {
  development: {
    apiUrl: `http://localhost:${port}`,
    port,
    mongoDB: {
      name: 'army',
      url: 'mongodb+srv://John:fafafa@cluster0-bpvhy.mongodb.net?retryWrites=true&w=majority',
    },
    jwtConfig,
  },
};

module.exports = config[env];