const searchService = require('../services/search');
const baseController = require('../controllers/base');

exports.searchItems = (req, res) => {
    var allItems = searchService.searchItems(req.params.word);
    res.send(baseController.getResponse(allItems));
}