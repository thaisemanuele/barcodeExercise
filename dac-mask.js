
exports.module_10 = function (bar) {

	var mask10 =[1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2];
	var nums = bar.split('');

	var sum = 0;

    for (var i = 0, pos = 4; i < mask10.length; i++,pos++) {
        	var mult = mask10[i]*nums[pos];
        	var rest = 1+mult%10;
        	var res = mult >= 10 ? rest : mult; 
        	sum = sum + res;
        }

        var fd0 = nums[0]*2 >= 10 ? Number(1+(nums[0]*2)%10) : nums[0]*2;
        var fd1 = nums[1];
        var fd2 = nums[2]*2 >= 10 ? Number(1+(nums[2]*2)%10) : nums[2]*2;
        sum +=  Number(fd0) + Number(fd1) + Number(fd2);

        var dac = sum%10 == 0 ? 0 : 10 - sum%10;
        var valid = dac == nums[3]? true : false;

        return valid;
}

exports.module_11_concess = function(bar) {

	var mask11_concess =[9,8,7,6,5,4,3,2,9,8,7,6,5,4,3,2,9,8,7,6,5,4,3,2,9,8,7,6,5,4,3,2,9,8,7,6,5,4,3,2];

	var nums = bar.split('');

	var sum = 0;

        for (var i = 0, pos = 4; i < mask11_concess.length; i++,pos++) {

        	var mult = mask11_concess[i]*nums[pos];
        	sum = sum + res;
        }

        var fd0 = nums[0]*4;
        var fd1 = nums[1]*3;
        var fd2 = nums[2]*2;

        sum +=  Number(fd0) + Number(fd1) + Number(fd2);

	    var rest = sum%11;
	    var dac = 11 -rest;
	    if(dac == 0 || dac == 1) dac = 0;
	    if(dac == 10) dac = 1;

        var valid = dac == nums[3]? true : false;

        return valid;

}

exports.module_11 = function(bar) {

	var mask11 =[8,7,6,5,4,3,2,9,8,7,6,5,4,3,2,9,8,7,6,5,4,3,2,9,8,7,6,5,4,3,2,9,8,7,6,5,4,3,2];

	var nums = bar.split('');

	var sum = 0;

        for (var i = 0, pos = 5; i < mask11.length; i++,pos++) {

        	var mult = mask11[i]*nums[pos];
        	sum = sum + mult;
        }

        var fd0 = nums[0]*4;
        var fd1 = nums[1]*3;
        var fd2 = nums[2]*2;
        var fd3 = nums[3]*9;

        sum +=  Number(fd0) + Number(fd1) + Number(fd2)+ Number(fd3);

	    var rest = sum%11;
	    var dac = 11 -rest;
	    if(dac == 0 || dac == 10 || dac == 11) dac = 1;
	    
        var valid = dac == nums[4]? true : false;

        return valid;

}