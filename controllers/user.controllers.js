//var db = require('../db');
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
	var errors = [];
	if(!req.body.name)
	{
		errors.push('Name is Require !!!');
	}
	if(!req.body.phone){
		errors.push('Phone is Require !!!');
	}
	if(errors.length){
		res.render('users/create',{
			err : errors,
			values : req.body
		});	
		return ;
	}
	else{
		Users.create(req.body);
		res.redirect('/users');
	}

};



