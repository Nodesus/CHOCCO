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

$('.menu__link').on('click', function () {
  $(".hamburger").removeClass('open');
  $(".menu").removeClass('menu--active');
});