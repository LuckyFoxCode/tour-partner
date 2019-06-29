$(document).ready(function() {
	if ($(".menu_bar").css("display") == "none") {
		$(".head__items_link").show();
	}
	$(".menu_bar").click(function() {
		if ($(".head__items_link").css("display") == "none") {
			$(".head__items_link").show();
		}
		else {
			$(".head__items_link").hide();
		}
	});
});

window.onscroll = () => {
	if (window.pageYOffset >= 1){
		$(".header").addClass("scroll_head");
	} else {
		$(".header").removeClass("scroll_head");
	}
}

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