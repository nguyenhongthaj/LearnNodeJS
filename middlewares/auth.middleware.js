var Users = require('../models/user.model')

module.exports.requireAuth = async function(req, res, next){
    if(!req.cookies.userId){
        res.redirect('/auth/login');
        return;
    }
    
    var user = await Users.find({id: req.cookies.userId});
    if(!user){
        res.redirect('auth/login');
        return;
    }
    next();
};