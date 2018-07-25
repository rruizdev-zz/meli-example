const itemsService = require('../services/items');
const singleItem = require('../models/singleItem');
const globalResult = require('../models/globalResult');
const priceItem = require('../models/priceItem');
const author = require('../models/author');

exports.getItemById = (req, res) => {
    var itemById = itemsService.getItemById(req.params.id);
    var descriptionById = itemsService.getDescriptionById(req.params.id);

    var myResponse = new globalResult(new author(), undefined, undefined, {});
    Promise.all([itemById, descriptionById]).then(responses => {
        const myDescription = responses[1] ? responses[1].plain_text : '';
        if (responses[0]) myResponse.item = new singleItem(responses[0], new priceItem(responses[0]), myDescription);
        res.send(myResponse);
    }, error => { res.send(myResponse); });
}