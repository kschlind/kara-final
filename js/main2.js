$(function() {
  // Handler for .ready() called.

  $( window ).resize(function() {
	  if ($( window ).width() >= 1200) {
	  	$('.header-feature').show();
	  	$('.header-mobile').hide();
	  	$('.featureContent h2').hide();
	  	$('aside').show();
	  } else {
	  	$('.header-mobile').show();
	  	$('.header-feature').hide();
	  	$('.featureContent h2').show();
	  	$('aside').hide();
	  }
  });

  $('.burger').click(function() {
  	$('.dropdown').slideToggle();
  });

  $(window).scroll(function (){
  	if($(window).scrollTop() >= 700) {
  		$('.fixedCallout').show();
  		$('.staticCallout').hide();
  	} else {
  		$('.staticCallout').show();
  		$('.fixedCallout').hide();
  	}
  });

  $('.bxslider').bxSlider({
  	mode: 'fade',
  	captions: true
	});

});