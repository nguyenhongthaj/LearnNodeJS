var express = require('express');
var router = express.Router();
var controller = require('../controllers/product.controllers');

router.get('/',controller.index);
router.get('/createProduct',controller.create);
router.post('/createProduct',controller.postProduct)
router.get('/detail',controller.detail)


module.exports = router;