var Product = require('../models/product.model');

module.exports.index = async function(req,res){
    var product = await Product.find();
    var page = parseInt(req.query.page || 1); //n -- so trang-- VD: page = 2
    var perPage = 4; //x - so Items hien thi tren 1 trang --        Items = 4
    var start = (page - 1) * perPage; // diem bat dau cat --        start = 4  
    var end = page * perPage; // diem ket thuc cat        --        end = 8 --- hien thi items 4 5 6 7
	res.render('products/index',{
		Product: product.slice(start,end)                     //--- hien thi items 4 5 6 7
		});	
}
module.exports.create = function(req,res){
    res.render('products/createProduct');
}
module.exports.postProduct = function(req, res){
    Product.create(req.body);
    res.redirect('/products');
}