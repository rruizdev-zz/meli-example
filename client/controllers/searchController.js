const searchService = require('../services/searchService');

exports.getQueryResults = (req, res) => {
    var allItems = searchService.getAllItems(req.params.word);

    allItems.then(response => { 
        res.send(response); 
    }, error => { 
        res.send(); 
    });
}