$(document).ready(function() {
	"use strict";
	/*
	|----------------------------------------------------------------------------
	| PRELOADER
	|----------------------------------------------------------------------------
	*/
	// makes sure the whole site is loaded
	$(window).on('load', function() {
	// will first fade out the loading animation
	$(".loader").fadeOut();
	//then background color will fade out slowly
	$(".pre-loader").delay(50).fadeOut("slow");
	});

	/*
	|----------------------------------------------------------------------------
	| STICKY NAVBAR
	|----------------------------------------------------------------------------
	*/
	if ( matchMedia( 'only screen and (min-width: 768px)' ).matches ) {
	$(document).on('scroll', function() {
	var scrollPos = $(this).scrollTop();

	if( scrollPos > 150 ) {
	$('.navbar-fixed-top').removeClass('navbar-home');
	} else {
	$('.navbar-fixed-top').addClass('navbar-home');
	}
	});
	}


	/*
	|----------------------------------------------------------------------------
	| VIDEO
	|----------------------------------------------------------------------------
	*/
	/* default settings */
	$('.venobox').venobox(); 


	/* custom settings */
	$('.venobox_custom').venobox({
	framewidth: '400px',        // default: ''
	frameheight: '300px',       // default: ''
	border: '10px',             // default: '0'
	// bgcolor: '#5dff5e',         // default: '#fff'
	titleattr: 'data-title',    // default: 'title'
	numeratio: true,            // default: false
	infinigall: true            // default: false
	});

	/* auto-open #firstlink on page load */
	$("#firstlink").venobox().trigger('click');

	/*
	|----------------------------------------------------------------------------
	|	SCREENSHOOTS
	|----------------------------------------------------------------------------
	*/	       
	var screenShot_1 = new Swiper ('.screenshot-slides', {
	autoplay: 3000,
	slidesPerView: 5,
	loop: true,
	centeredSlides: true,
	paginationClickable: true,
	spaceBetween: 15,
	// nextButton: '.swiper-button-next',
	// prevButton: '.swiper-button-prev',
	pagination: '.swiper-pagination',
	breakpoints: {
	991: {
	 slidesPerView: 3,
	 spaceBetween: 5,
	},

	480: {
	 spaceBetween: 5,
	 slidesPerView: 1
	}    
	}
	});


	/*
	|----------------------------------------------------------------------------
	| TESTOMONIAL
	|----------------------------------------------------------------------------
	*/
	var testimonials_1 = new Swiper('.testimonials-1 .testimonials-content', {
	slidesPerView: 1,
	autoplay: 3000,
	slideToClickedSlide: true
	});

	var testimonialsThumb = new Swiper('.testimonials-1 .testimonials-thumb', {
	slidesPerView: 6,
	centeredSlides: true,
	slideToClickedSlide: true,
	slideActiveClass: 'active',
	spaceBetween:-22,
	virtualTranslate:true,
	breakpoints: {
    // when window width is <= 320px
    320: {
      slidesPerView: 1,
      spaceBetweenSlides:5
    },
    // when window width is <= 480px
    480: {
      slidesPerView: 2,
      spaceBetweenSlides:5
    },
    // when window width is <= 640px
    640: {
      slidesPerView: 3,
      spaceBetweenSlides: 30
    }
  }
});

testimonials_1.params.control = testimonialsThumb;
testimonialsThumb.params.control = testimonials_1;



$('body').scrollspy({ target: '#theme-navbar-collapse' })


$.scrollTo(document.getElementById('home'), 100);

$.localScroll();
 });
