const baseService = require('./base');
const config = require('../config');
const util = require('util');

exports.searchItems = query => {
    return baseService.getPromise(util.format(config.endpoint.search, query));
}