 $({someValue: 0}).animate({someValue: 17}, {
 	duration: 2000,
 	easing:'swing',
 	step: function() {
 		$('#17').text(commaSeparateNumber(Math.round(this.someValue)));
 	}
 });

 function commaSeparateNumber(val){
 	while (/(\d+)(\d{3})/.test(val.toString())){
 		val = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
 	}
 	return val;
 }
 $({someValue: 0}).animate({someValue: 213}, {
 	duration: 2000,
 	easing:'swing',
 	step: function() {
 		$('#213').text(commaSeparateNumber(Math.round(this.someValue)));
 	}
 });

 function commaSeparateNumber(val){
 	while (/(\d+)(\d{3})/.test(val.toString())){
 		val = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
 	}
 	return val;
 }
 $({someValue: 0}).animate({someValue: 11923}, {
 	thousandSeparator: " ",
 	duration: 1500,
 	easing:'swing',
 	step: function() {
 		$('#11923').text(commaSeparateNumber(Math.round(this.someValue)));
 	}
 });

 function commaSeparateNumber(val){
 	while (/(\d+)(\d{3})/.test(val.toString())){
 		val = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
 	}
 	return val;
 }
 $({someValue: 0}).animate({someValue: 15}, {
 	duration: 2000,
 	easing:'swing',
 	step: function() {
 		$('#15').text(commaSeparateNumber(Math.round(this.someValue)));
 	}
 });

 function commaSeparateNumber(val){
 	while (/(\d+)(\d{3})/.test(val.toString())){
 		val = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
 	}
 	return val;
 }