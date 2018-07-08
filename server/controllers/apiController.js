const apiService = require('../services/apiService');
const listItem = require('../models/listItem');
const globalResult = require('../models/globalResult');
const priceItem = require('../models/priceItem');
const author = require('../models/author');

exports.getItemsByCategoria = (req, res) => {
    var itemsByCategoria = apiService.getItemsByCategoria(req.query.q);

    var myResponse = new globalResult(new author(), [], [], undefined);
    itemsByCategoria.then((response) => {
        if (response && response.results && response.results.length) {
            response.results.forEach(function(item) {
                myResponse.categories.push(item.category_id);
                myResponse.items.push(new listItem(item, new priceItem(item)));
            });
        }

        res.send(myResponse);
    }, (error) => { res.send(myResponse); });
}