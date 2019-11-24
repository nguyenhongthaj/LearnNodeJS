module.exports.postCreate =  function(req, res, next){
    var errors = [];
	if(!req.body.name)
	{
		errors.push('Name is Require !!!');
	}
	if(!req.body.phone){
		errors.push('Phone is Require !!!');
	}
	if(!req.body.email){
		errors.push('Email is Require !!!');
	}
	if(!req.body.password){
		errors.push('Password is Require !!!');
	}
	if(errors.length){
		res.render('users/create',{
			err : errors,
			values : req.body
		});	
		return ;
    }
    //res.locals.cs = true;
    next();
};