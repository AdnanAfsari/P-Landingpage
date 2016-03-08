    $(document).ready(function() {

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
	

     	// scrollspy//
     $('body').scrollspy({ target: '#amity-navbar-collapse' })

     
     $.scrollTo(document.getElementById('home'), 100);

     $.localScroll();

    });

