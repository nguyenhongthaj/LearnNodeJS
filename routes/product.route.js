var express = require('express');
var router = express.Router();
var controller = require('../controllers/product.controllers');

router.get('/product',controller.create);
router.post('/product',controller.postProduct)

module.exports = router;