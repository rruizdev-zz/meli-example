const express = require('express');
const router = express.Router();

const itemController = require('../controllers/item');
const config = require('../config');

router.get('/:id', (req, res, next) => {
  res.render('detail', { 
    title: config.title.home, 
    description: config.description.home
  });
});

router.get('/query/:id', itemController.getItem);

module.exports = router;