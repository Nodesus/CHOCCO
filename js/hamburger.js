$(".hamburger").click(function(e) {
  e.preventDefault();
  $(".hamburger").not(this).removeClass('active');
  $('.menu').toggleClass('menu--active');
});


$(document).ready(function(e){
	$('.hamburger').click(function(){
		$(this).toggleClass('open');
	});
});