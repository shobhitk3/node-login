var express    = require("express");
var path    = require("path");
//var login = require('./routes/loginroutes');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//var router = express.Router();

// test route
app.get('/', function(req, res) {
	console.log("welcome to home page");
	res.sendFile(path.join(__dirname+'/static/welcome.html'));
});

//route to handle user registration
//app.post('/register',login.register);
//app.post('/login',login.login)
//app.use('/api', router);
app.listen(7000,function callback(){
	console.log("server is running at port 3000");
});