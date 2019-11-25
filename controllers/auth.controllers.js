var Users = require('../models/user.model')

module.exports.login = function(req, res){
    res.render('auth/login');
}
module.exports.postLogin = async function(req, res){
    var email = req.body.email;
    var password = req.body.password;

    var user = await Users.find({email: email });
    
    if(!user.length){
        res.render('auth/login', {
            errors: [
                'User dose not Exists !!!'
            ],
            values: req.body
        });
        return;
    }
    if(user[0].password !== password){
        res.render('auth/login', {
            errors: [
                'Wrong Password !!!'
            ],
            values: req.body
        });
        return;
    }     

    res.cookie('userId', user[0].id);
    res.redirect('/users');
}