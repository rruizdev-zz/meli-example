const searchService = require('../services/search');

exports.searchItems = (req, res) => {
    var searchItems = searchService.searchItems(req.params.word);
    searchItems.then(response => {
        res.send(response);
    }, error => { 
        res.send();
    });
}