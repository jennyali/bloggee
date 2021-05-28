const dotEnv = require('dotenv');
const path = require('path');

global.APP_ROOT_PATH = __dirname;
const config = dotEnv.config({ path: path.resolve(__dirname, `config/.env`) });
module.exports = config.parsed;
