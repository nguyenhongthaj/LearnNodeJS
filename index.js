/* Khai bao Express - va port :3000*/
var express = require('express');
var app = express();
/* Khai bao req.body*/
var bodyParser = require('body-parser');
/*-------------------*/
var userRouters = require('./routes/user.route');
var authRouters = require('./routes/auth.route');
/*Khai vao cookie*/
var cookieParser = require('cookie-parser');
/*Khai bao mongo*/

var mongoose = require('mongoose');
mongoose.connect ("mongodb://localhost/express-demo", {useNewUrlParser: true, useUnifiedTopology: true});
var port = 3000;

 /*Khai bao Pug*/
app.set('view engine', 'pug');
app.set('views', './views');
/* Khai bao req.Body*/
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));
app.use(cookieParser());
//#######################################################################33
app.get('/',function(request,response){
	response.render('index',{
		name:'Thai'
	});
});

app.use('/users', userRouters);
app.use('/auth', authRouters);

app.listen(port, function(){
	console.log('Sever listening on port '+ port);
});


