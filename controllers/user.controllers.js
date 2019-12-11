//var db = require('../db');
var md5 = require('md5');
var Users = require('../models/user.model')
/*--------------Index---********/
module.exports.index = async function(request, response){
	// response.render('users/index',{
	// 	users: db.get('users').value()
	//});
	var users = await Users.find();
	response.render('users/index',{
		users: users
		});	
};
/*--------------search---********/
module.exports.search = async function(request, response){
	var q = request.query.q;
	var matchedUsers =  await Users.filter(function(user){
		return user.name.indexOf(q) !== -1;
	})
	response.render('/index',{
		users:matchedUsers
	});
};
/*--------------create---********/
module.exports.create =function(req,res){

	res.render('users/create');

}

/*---------------get ID--********/
module.exports.get = async function(req,res){
	var id = req.params.id;
	var users = await Users.find({_id: id });
	res.render('users/view',{
		user: users[0]
	});
}
/*--------------createPost---********/
module.exports.postCreate = function(req,res){	
		//console.log(res.locals);
		req.body.password = md5(req.body.password);
		req.body.avatar = req.file.path.split('\\').slice(1).join('\\');
		Users.create(req.body);
		res.redirect('/users');
}
/*---------------cookie---*/
module.exports.cookie = function(req, res, next){
		console.log(req.cookies);
		res.cookie('name', 12345);
		res.send('Hello-Cookie');
}
