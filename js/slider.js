const slider = $('.slider__list').bxSlider({
  pager: false,
  controls: false,
  touchEnabled: ($(window).width() < 769),
});

$(".slider__btn-left").click(e => {
  e.preventDefault();
  slider.goToPrevSlide();
});


$(".slider__btn-right").click(e => {
  e.preventDefault();
  slider.goToNextSlide();
});