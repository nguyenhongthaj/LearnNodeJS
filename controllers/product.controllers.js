var Product = require('../models/product.model');

module.exports.create = function(req,res){
    res.render('products/product');
}
module.exports.postProduct = function(req, res){
    Product.create(req.body);
    res.redirect('/users');
}