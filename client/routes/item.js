const express = require('express');
const router = express.Router();

const itemController = require('../controllers/item');

router.get('/:id', (req, res, next) => {
  res.render('detail', { 
    title: 'Mercado Libre Argentina' 
  });
});

router.get('/query/:id', itemController.getItem);

module.exports = router;