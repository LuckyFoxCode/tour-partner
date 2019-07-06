$(document).ready(function() {
	if ($(window).width() > 767) {
		$(".head_nav, .head_tel").css("display", "flex");
	}
	else $(".head_nav, .head_tel").css("display", "none");

	$(".menu_bar").click(function() {
		if ($(".head_nav").css("display") == "none") {
			$(".head_nav").css("display", "flex");
			if (($(".head_tel").css("display") == "flex") || ($(".head_nav").css("display") == "flex")) {
				$(".header").addClass("scroll_head");
			}
		}
		else {
			$(".head_nav").css("display", "none");
			if (($(".head_tel").css("display") == "none") && ($(".head_nav").css("display") == "none") && window.pageYOffset == 0) {
				$(".header").removeClass("scroll_head");
			}
		}
	});

	$(window).resize(function(){
		if ($(window).width() > 767) {
			$(".head_nav, .head_tel").css("display", "flex");
		}
	});
	$(window).resize(function(){
		if ($(window).width() < 768) {
			$(".head_nav, .head_tel").css("display", "none");
		}
	});


	$(".tel_svg").click(function() {
		if ($(".head_tel").css("display") == "none") {
			$(".head_tel").css("display", "flex");
			if (($(".head_tel").css("display") == "flex") || ($(".head_nav").css("display") == "flex")) {
				$(".header").addClass("scroll_head");
			}
		}
		else {
			$(".head_tel").css("display", "none");
			if (($(".head_tel").css("display") == "none") && ($(".head_nav").css("display") == "none") && window.pageYOffset == 0) {
				$(".header").removeClass("scroll_head");
			}
		}
	});
});


$(".head__items_linked").hover(function(){
	$(".this").removeClass("active");
	$(this).addClass("active");
}, function(){
	$(this).removeClass("active");
	$(".this").addClass("active");
});

window.onscroll = () => {
	if (window.pageYOffset >= 1){
		$(".header").addClass("scroll_head");
	} else if ((($(".head_tel").css("display") == "none") && ($(".head_nav").css("display") == "none") && window.pageYOffset == 0) || ($(window).width() > 767)){
		$(".header").removeClass("scroll_head");
	}
}


	$('.news-section__text').dotdotdot();
// (function($) {

// 	if ($(window).width() >= 993 && $(window).width() <= 1199) {
// 		var block = document.querySelector('.news-section__text');
// 		while (block.clientHeight > 160) {
// 			let testText = block.innerText;
// 			let text = testText.slice(0, testText.length - 1) + ' ...';
// 			alert(text);
// 			// break;			

// 		}
// 		// text = block.innerHTML,
// 		// clone = document.createElement('div');

// 		// clone.style.position = 'absolute';
// 		// clone.style.visibility = 'hidden';
// 		// clone.style.width = block.clientWidth + 'px';
// 		// clone.style.height = '183.4' + 'px';
// 		// clone.innerHTML = text;
// 		// document.body.appendChild(clone);

// 		// var l = text.length - 1;
// 		// for (; l >= 0 && clone.clientHeight > block.clientHeight; --l) {
// 		// 	clone.innerHTML = text.substring(0, l) + '...';
// 		// }

// 		// block.innerHTML = clone.innerHTML;


// 	}

// }(jQuery));

// // if ($(window).width() >= 993 && $(window).width() <= 1199) {

// // 	function truncateByHeight(element, height) {
// // 		var textContent = typeof element.textContent === 'undefined' ? 'innerText' : 'textContent';
// // 		var parts = element[textContent].split(' ');

// // 		while (parts.pop() && element.clientHeight > height) {
// // 			element[textContent] = parts.join(' ');
// // 		}
// // 	}


// // 	var element = document.querySelector('.news-section__text');
// // 	element.innerText ="hi";

// // 	truncateByHeight(element, 183.4);

// // }