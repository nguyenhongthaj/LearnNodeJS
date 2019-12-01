var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    price: Number,
    },
    {
        versionKey:false
    }
);
var Product = mongoose.model('Product', productSchema,'products');//tham số thứ 3 'products'  là tên collection
module.exports = Product;