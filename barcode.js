var string   = require('string');
var verify   = require('./dac-mask');

module.exports = function (bar, callback) {

	try {

		var onlyDigits = string(bar).replaceAll(" ","")
									.replaceAll(".","")
									.replaceAll("-","")
		;

		var digits = onlyDigits.length;
		if(digits != 44) {
			throw new Error("Barcode numbers shoud have 44 digits "+ 
				"not " + digits + " digits");
		}
		else {

			var nums = onlyDigits.split('');

            var concess = false;
			var value = "not found";
			var date = "not found";

			if (string(onlyDigits).left(1)==8) {
				concess = true;
			}
			if(concess){


				if(nums[2] == 6 || nums[2] == 7){

					valid = verify.module_10(onlyDigits);

				}

				if(nums[2] == 8 || nums[2] == 9){

					valid = verify.module_11_concess(onlyDigits);

				}

				var day   = string(onlyDigits).left(27).right(2);
				var month = string(onlyDigits).left(25).right(2);
				var year  = string(onlyDigits).left(23).right(4);


				value = string(onlyDigits).left(15).right(10);
				date = day +"/"+month+"/"+year;
				

			}
			else {

				valid = verify.module_11(onlyDigits);

				var msinDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
				
				value = string(onlyDigits).left(19).right(10);
				date = string(onlyDigits).left(9).right(4);

				date = Number(date) + 10142;
				var dt = new Date();
				dt.setTime(date*msinDay);

				var day = dt.getDate();
				var month = Number(dt.getMonth())+1;
				var year = dt.getFullYear();
				
				date = day+"/"+month+"/"+year;
				
			}
			
			callback(null, {

				digits: function () {
					return 	string(onlyDigits).left(12) +
							" " + string(onlyDigits).left(24).right(12) +
							" " + string(onlyDigits).left(36).right(12) +
							" " + string(onlyDigits).left(44).right(12);
				},

				verify: function () {
					return valid;
				},

				dueDate: function () {
					return date;
				},

				chargeAmount: function () {
					return value/100;
				}
			});
		}
	}
	catch (error) {
		callback(error, null);
	}
}