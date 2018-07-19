const itemService = require('../services/item');
const baseController = require('../controllers/base');

exports.getItem = (req, res) => {
    var itemDetail = itemService.getItem(req.params.id);
    res.send(baseController.getResponse(itemDetail));
}