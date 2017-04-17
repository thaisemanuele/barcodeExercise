var argv = require('yargs')
	.usage('[options] <command> <text>')
	.demand(['b'])
	.string('b')
	.argv;


var barcode = require('./barcode');

function extractFromBarcode(b) {
 	
	barcode(b, function(err, barcode) {
		if (err) {
			console.log(err);
		}
		else {

			if(true == barcode.verify()){
				
				console.log("\nThe barcode " + barcode.digits() +" is valid");	

				console.log("The due date of the barcode is = " + barcode.dueDate());

				console.log("The value of the barcode is = " + barcode.chargeAmount());
			}
			else {
				console.log("\nThe barcode" + barcode.digits() +"is invalid");		
			}
		}
	});
};

extractFromBarcode(argv.b);