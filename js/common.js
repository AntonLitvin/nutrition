$(window).on('load', function() { 
	$('.loader-inner').fadeOut(); 
	$('.loader').delay(400).fadeOut('slow'); 
});


$(function() {

// Mobile menu button
$('.toggle-btn').on('click', function() {
	$(this).toggleClass('on');
	$('.page-nav').slideToggle();
	return false;
});

$(window).resize(function(){
	if($(window).width() > '480')   {
		$('.page-nav').removeAttr('style');
		$('.toggle-btn').removeClass('on');
	}
});


// Scroll to block
$('.page-nav a, .mouse-scroll').on('click', function () {

	var headerHeight = $('.page-header').outerHeight();
	var elementClick = $(this).attr('href');
	var destination = $(elementClick).offset().top - headerHeight;

	if ($(elementClick).length != 0) { // проверка существования элемента
		$('html, body').animate({ scrollTop: destination }, 800);
		$('.page-nav').removeAttr('style');
		$('.toggle-btn').removeClass('on');
	}
	return false; 
});

	var mySwiper = new Swiper ('.swiper-container-1', {

		loop: true,
		effect: 'fade',
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},

	});

	var mySwiper2 = new Swiper ('.swiper-container-2', {

		loop: true,
		speed: 500,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

	});

	var wow = new WOW({
		boxClass:     'wow',      // animated element css class (default is wow)
		animateClass: 'animated', // animation css class (default is animated)
		offset:       60,          // distance to the element when triggering the animation (default is 0)
		mobile:       false,       // trigger animations on mobile devices (default is true)
		live:         true,       // act on asynchronously loaded content (default is true)
		scrollContainer: null // optional scroll container selector, otherwise use window
		}
	);
	wow.init();


});
