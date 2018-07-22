const express = require('express');
const util = require('util');
const router = express.Router();

const searchController = require('../controllers/search');
const config = require('../config');

router.get('/', (req, res, next) => {
  res.render('search', { 
    title: config.title.home,
    description: config.description.home
  });
});

router.get('/items', (req, res, next) => {
  var queryDecoded = decodeURI(req.query.search);
  res.render('results', { 
    title: util.format(config.title.results, queryDecoded), 
    query: queryDecoded,
    description: util.format(config.description.results, queryDecoded)
  });
});

router.get('/query/:word', searchController.searchItems);

module.exports = router;
