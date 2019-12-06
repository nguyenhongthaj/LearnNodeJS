var Product = require('../models/product.model');

module.exports.index = async function(req,res){
    var product = await Product.find();
	res.render('products/index',{
		Product: product.slice(0,4)
		});	
}
module.exports.create = function(req,res){
    res.render('products/createProduct');
}
module.exports.postProduct = function(req, res){
    Product.create(req.body);
    res.redirect('/products');
}