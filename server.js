var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var barcode = require('./barcode');

var hostname = 'localhost';
var port = 9090;

var app = express();
var router = express.Router();
router.use(bodyParser.json());

app.use(morgan('dev'));

router.route('/')

	.all( function (req, res, next) {
		res.writeHead(200, {'Content-Type':'text/plain'});
		next();
	});

router.route('/:bar')
	
	.get( function (req, res, next) {

		var b = req.params.bar;

		console.log("value of b: "+b);

		barcode(b,function(err, bar) {

			if (err) {
				res.end('<p>'+err+'</p>')
				console.log(err);
			}
			else {

				if(true == bar.verify()){

					res.end('<p>The code '+bar.digits()+' is valid</p>'+
				  		'<p>The due date is '+bar.dueDate()+' </p>'+
				  		'<p>The amount is '+bar.chargeAmount()+'</p>');
					}
				else {
					res.end('<p>The code '+bar.digits()+' is invalid</p>');
				}
			}
		});

	});

app.use('/validate', router);
app.use(express.static(__dirname + '/public'));

app.listen (port, hostname, function (){
	console.log("Server running at http://"+hostname+":"+port+"/");
})