var express = require('express');
var router = express.Router(); 
var multer = require('multer');

var controller = require('../controllers/user.controllers');
var validate = require('../validate/user.validate');
var upload = multer({ dest: './public/uploads/' });

router.get('/',controller.index);

/*function middleware(req, res, next){
    console.log('Middleware 1');
    next();
}
function middleware2(req, res, next){
    console.log('m2');
    res.send('m2');
}
router.get('/test', middleware, middleware2);
*/
router.get('/cookie', controller.cookie);

/*------------Seacrch------**/
router.get('/search', controller.search);
//------------GET-------------------//
/*------------Create--------------*/
router.get('/create',controller.create);



//--------------POST------//
router.post('/create',
    upload.single('avatar'),
    validate.postCreate,
    controller.postCreate
    );
//----------Get ID **-----------------//
router.get('/:id',controller.get);



module.exports =  router;