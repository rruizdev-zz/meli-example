class globalResult {
    constructor(author, categories, items, item) {
        this.author = author;
        if (categories) this.categories = categories;
        if (items) this.items = items;
        if (item) this.item = item;        
    }
}

module.exports = globalResult;