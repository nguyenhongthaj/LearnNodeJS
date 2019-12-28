var mongoose = require('mongoose');

var sessionSchema = new mongoose.Schema({
        idCard: String,
        productId: Array,
        userId: String,
    },
    {
        versionKey: false
    },
);

var Sessions = mongoose.model('Sessions', sessionSchema,'sessions');//tham số thứ 3 'users'  là tên collection
module.exports = Sessions;