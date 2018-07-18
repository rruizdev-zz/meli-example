const itemService = require('../services/itemService');

exports.getItemDetails = (req, res) => {
    var itemDetail = itemService.getItemDetails(req.params.id);

    itemDetail.then(response => { 
        res.send(response); 
    }, error => { 
        res.send(); 
    });
}