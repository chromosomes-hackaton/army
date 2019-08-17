const chalk = require('chalk');

global.warn = (...params) => console.log(chalk.green.bold(...params));
