const _ = require('lodash');
const defaults = require('./default.config.js');
// eslint-disable-next-line
const config = require(`./${(process.env.NODE_ENV || 'development')}.config.js`);
module.exports = _.merge({}, defaults, config);
