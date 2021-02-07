require('dotenv').config();
const convertStringToBoolean = require('./utils/convert-string-to-boolean.util');

const config = {
  useTestData: convertStringToBoolean(process.env.USE_TEST_DATA),
};

module.exports = config;
