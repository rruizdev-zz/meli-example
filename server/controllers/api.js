const apiService = require('../services/api');
const listItem = require('../models/listItem');
const globalResult = require('../models/globalResult');
const priceItem = require('../models/priceItem');
const author = require('../models/author');

exports.getItemsByCategoria = (req, res) => {
    var itemsByCategoria = apiService.getItemsByCategoria(req.query.q);

    var myResponse = new globalResult(new author(), [], [], undefined);
    itemsByCategoria.then(response => {
        if (response) {
            if (response.results && response.results.length) response.results.forEach(item => {
                myResponse.items.push(new listItem(item, new priceItem(item)));
            });
            var ownCategory = response.filters && response.filters.length ? 
                response.filters.find(filter => filter.id === "category") : undefined;
            if (ownCategory) ownCategory.values[0].path_from_root.forEach(category => {
                myResponse.categories.push(category.name);
            });
        }
        res.send(myResponse);
    }, error => { res.send(myResponse); });
}