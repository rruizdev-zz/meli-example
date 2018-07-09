const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('search', { title: 'Búsqueda en MercadoLibre' });
});

module.exports = router;
