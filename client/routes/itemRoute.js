const express = require('express');
const router = express.Router();

const itemController = require('../controllers/itemController');

router.get('/:id', (req, res, next) => {
  res.render('detail', { title: 'Mercado Libre Argentina' });
});

router.get('/query/:id', itemController.getItemDetails);

module.exports = router;
