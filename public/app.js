$(document).ready(function() {

    $('#sendbar').click(function() {
    	
		var barcode = $('#barcode').val();

    	$.get('http://localhost:9090/validate/'+barcode, function(res) {
              $('#response').html(res); 
            });
        });

 });