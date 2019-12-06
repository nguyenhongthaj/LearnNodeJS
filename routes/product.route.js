var express = require('express');
var router = express.Router();
var controller = require('../controllers/product.controllers');

router.get('/',controller.index);
router.get('/createProduct',controller.create);
router.post('/createProduct',controller.postProduct)

module.exports = router;