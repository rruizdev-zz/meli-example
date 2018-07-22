const itemService = require('../services/item');

exports.getItem = (req, res) => {
    var itemDetail = itemService.getItem(req.params.id);
    
    itemDetail.then(response => {
        res.send(response);
    }, error => { res.send(); });
}