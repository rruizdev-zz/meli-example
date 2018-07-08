class priceItem {
    constructor(item) {
        this.currency = item.currency_id;
        this.amount = item.price;
        this.decimals = item.price && item.price.length ? 
            (item.price.split(".")[1] ? item.price.split(".")[1].length : 0) : 0;
    }
}

module.exports = priceItem;