class listItem {
    constructor(item, price) {
        this.id = item.id;
        this.title = item.title;
        this.price = price;
        this.picture = item.thumbnail;
        this.condition = item.condition;
        this.free_shipping = item.shipping ? item.shipping.free_shipping : false;
    }
}

module.exports = listItem;