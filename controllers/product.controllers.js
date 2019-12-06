var Product = require('../models/product.model');

module.exports.index = async function(req,res){
    var product = await Product.find();
    var page = parseInt(req.query.page || 1); //n -- so trang
    var perPage = 4; //x - so Items hien thi tren 1 trang
    var start = (page - 1) * perPage;
    var end = page * perPage;
	res.render('products/index',{
		Product: product.slice(start,end)
		});	
}
module.exports.create = function(req,res){
    res.render('products/createProduct');
}
module.exports.postProduct = function(req, res){
    Product.create(req.body);
    res.redirect('/products');
}