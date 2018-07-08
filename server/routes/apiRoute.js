const express = require('express');
const router = express.Router();

const apiController = require('../controllers/apiController');

router.get('/items', apiController.getItemsByCategoria);

module.exports = router;
