var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: String,
    avatar:String,
    phone: String,
    email: String,
    password: String,
    },
    {
        versionKey:false
    }
);

var User = mongoose.model('User', userSchema,'users');//tham số thứ 3 'users'  là tên collection
module.exports = User;