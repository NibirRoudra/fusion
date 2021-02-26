!(function ($) {
	"use strict";


	var nav = $('nav');
	var navHeight = nav.outerHeight();

	$('.navbar-toggler').on('click', function () {
		if (!$('#mainNav').hasClass('navbar-reduce')) {
			$('#mainNav').addClass('navbar-reduce');
		}
	})

	/*--/ Navbar Menu Reduce /--*/
	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 50;
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-md').addClass('navbar-reduce');
			$('.navbar-expand-md').removeClass('navbar-trans');
		} else {
			if (!$('#navbarDefault').hasClass('show')) {
				$('.navbar-expand-md').removeClass('navbar-reduce');
			}
			$('.navbar-expand-md').addClass('navbar-trans');
		}

	});

	/*--/ Closes responsive menu when a scroll trigger link is clicked/--*/
	$('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});

	/*--/ Activate scrollspy to add active class to navbar items on scroll /--*/
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});
	/*--/ Star Scrolling nav /--*/
	var mainNav_height = $('#mainNav').outerHeight() - 22;
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				var scrollto = target.offset().top - mainNav_height;
				$('html, body').animate({
					scrollTop: scrollto
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	/*--/ Scroll to sections on load with hash links /--*/
	if (window.location.hash) {
		var initial_nav = window.location.hash;
		if ($(initial_nav).length) {
			var scrollto_initial = $(initial_nav).offset().top - mainNav_height;
			$('html, body').animate({
				scrollTop: scrollto_initial
			}, 1000, "easeInOutExpo");
		}
	}


	// Init AOS Animation
	$(function () {
		AOS.init({
			duration: 1000,
			once: true
		});
	});

	// PORTFOLIO DETAIL OWL CAROUSEL
	$(".portfolio-slider").owlCarousel({
		autoplay: true,
		dots: true,
		loop: true,
		items: 1,
		smartSpeed: 1000,
	});

	// TESTIMONIAL OWL CAROUSEL
	$(".testimonial-slider").owlCarousel({
		autoplay: true,
		dots: true,
		loop: true,
		items: 1,
		smartSpeed: 1000,
	});

	/*--/ Back to top button /--*/
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.back-to-top').fadeIn('slow');
		} else {
			$('.back-to-top').fadeOut('slow');
		}
	});

	$('.back-to-top').click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1500, 'easeInOutExpo');
		return false;
	});

})(jQuery);
