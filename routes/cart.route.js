var express = require('express');
var router = express.Router();
var controller = require('../controllers/cart.controllers');
var validate = require('../validate/cart.validate');

router.get('/add/:productId',controller.addToCart);
router.get('/cart',controller.countCart);
module.exports = router;