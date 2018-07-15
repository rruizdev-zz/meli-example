const baseService = require('./baseService');
const config = require('../config');
const util = require('util');

exports.getAllItems = query => {
    return baseService.getJsonFromUrl(util.format(config.endpoints.showItems, query));
}