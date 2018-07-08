const config = require('../config');

class author {
    constructor() {
        this.name = config.name;
        this.lastname = config.lastname;
    }
}

module.exports = author;