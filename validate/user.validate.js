module.exports.postCreate =  function(req, res, next){
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
    //res.locals.cs = true;
    next();
};