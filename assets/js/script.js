
$(document).ready(function(){
 
	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});
 
});

$("#location-bar a").click(function(event){
  event.preventDefault();
  
  var $this = $(this),
      $li = $this.parent(),
      selectedMap = $this.attr("href"),
      selectedLocation = $this.data('location');
 
  $li.addClass('active').siblings('li').removeClass('active');

  //Update #map bkimage with the image from the location
  $('#map').css('background-image', 'url(' + selectedMap + ')');  
  //update tooltip 'address'
  $('.selectedLocation').text(selectedLocation);
});