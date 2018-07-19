const baseService = require('./base');
const config = require('../config');
const util = require('util');

exports.getItem = id => {
    return baseService.getPromise(util.format(config.endpoint.item, id));
}