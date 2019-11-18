var express = require('express');
var router = express.Router(); 
var controller = require('../controllers/user.controllers');

router.get('/',controller.index);


/*------------Seacrch------**/
router.get('/search', controller.search);
//------------GET-------------------//
/*------------Create--------------*/
router.get('/create',controller.create);

//--------------POST------//
/*-----------req.body-----------*/
//Loai bỏ để test lowdb
/*router.post('/users/create',function(req,res){
	users.push(req.body);
	//console.log(users);
	res.redirect('/users');
});*/
// test 
router.post('/create',controller.postCreate);
//----------Get ID **-----------------//
router.get('/:id',controller.get);


module.exports =  router;