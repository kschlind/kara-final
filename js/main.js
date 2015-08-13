$(function() {
  // Handler for .ready() called.

  /*$('.bxslider').bxSlider();*/

  $(window).scroll(function (){
  	if($(window).scrollTop() >= 170) {
  		$('.header-lg').hide();
  		if ($( window ).width() >= 768) {
  			$('.header-sm').show();
  			$('.header-mobile').hide();
  			$('.noJump').show();
  		} else {
  			$('.header-mobile').show();
  			$('.header-sm').hide();
  			$('.noJump').show();
  		}
  	} else {
  		$('.header-sm').hide();
  		$('.header-mobile').hide();
  		$('.header-lg').show();
  		$('.noJump').hide();
  	}
  });

  $('.burger').click(function() {
  	$('.dropdown').slideToggle();
  });
  
});