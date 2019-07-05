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
			$(".head_nav").css("display", "flex");
		}
	});
	$(window).resize(function(){
		if ($(window).width() < 768) {
			$(".head_nav").css("display", "none");
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
	$(window).resize(function(){
		if ($(window).width() > 767) {
			$(".head_tel").css("display", "flex");
		}
	});
	$(window).resize(function(){
		if ($(window).width() < 768) {
			$(".head_tel").css("display", "none");
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

// Owl Carousel Testimonials start
$(".testimonials__carousel").owlCarousel({
  items: 1,
  dots: false,
  loop: true,
  nav: false,
  autoplay: true,
  autoplayTimeout: 10000,
});

window.onscroll = () => {
	if (window.pageYOffset >= 1){
		$(".header").addClass("scroll_head");
	} else if ((($(".head_tel").css("display") == "none") && ($(".head_nav").css("display") == "none") && window.pageYOffset == 0) || ($(window).width() > 767)){
		$(".header").removeClass("scroll_head");
	}
}

(function () {
  const buttonDrop = document.getElementById('drop-button');
  const buttonDropSec = document.getElementById('drop-button-sec');
  const menu = document.getElementById('drop-menu');
  const menuSec = document.getElementById('drop-menu-sec');
  const changeWiewDestinations = document.getElementById('change-wiew');

  buttonDrop.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.toggle('is-active');
  });

  buttonDropSec.addEventListener('click', (e) => {
    e.preventDefault();
    menuSec.classList.toggle('is-active');
  });

  changeWiewDestinations.addEventListener('click', () => {
    let bootstrapClass = document.getElementById('boxWiew').children;
    let rowClass = document.querySelectorAll('.destinations-page__card');
    let imgClass = document.querySelectorAll('.destinations-page__card-img-wrapper');

    bootstrapClass = Array.prototype.slice.call(bootstrapClass);
    rowClass = Array.prototype.slice.call(rowClass);
    imgClass = Array.prototype.slice.call(imgClass);

    bootstrapClass.forEach((item, i) => {
      item.classList.toggle('col-md-4');
      item.classList.toggle('col-md-12');
    });

    rowClass.forEach((item, i) => {
      item.classList.toggle('row-card');
    });

    imgClass.forEach((item, i) => {
      item.classList.toggle('resized');
    })
  });
})();

