const baseService = require('./baseService');
const config = require('../config');
const util = require('util');

exports.getItemDetails = id => {
    return baseService.getJsonFromUrl(util.format(config.endpoints.showDetails, id));
}