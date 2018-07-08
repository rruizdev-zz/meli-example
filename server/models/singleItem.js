const listItem = require('../models/listItem');

class singleItem extends listItem {
    constructor(item, price, description) {
        super(item, price);
        this.sold_quantity = item.sold_quantity;
        this.description = description;
    }
}

module.exports = singleItem;