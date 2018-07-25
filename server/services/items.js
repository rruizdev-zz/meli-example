const baseService = require('./base');
const config = require('../config');
const util = require('util');

exports.getItemById = query => {
    return baseService.getJsonFromUrl(util.format(config.endpoints.showItem, query));
}

exports.getDescriptionById = query => {
    return baseService.getJsonFromUrl(util.format(config.endpoints.showItem, query + config.paths.showDescription));
}