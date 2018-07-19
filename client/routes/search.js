const express = require('express');
const router = express.Router();

const searchController = require('../controllers/search');

router.get('/', (req, res, next) => {
  res.render('search', { 
    title: 'Mercado Libre Argentina' 
  });
});

router.get('/items', (req, res, next) => {
  res.render('results', { 
    title: 'Resultados para ' + req.query.search + ' en Mercado Libre Argentina', 
    query: req.query.search 
  });
});

router.get('/query/:word', searchController.searchItems);

module.exports = router;
