/* (function () {
  let items = document.querySelectorAll(".slide");
  let container = document.querySelector(".slider__list");
  let rightButton = document.querySelector(".slider__btn-right");
  let leftButton = document.querySelector(".slider__btn-left");
  let step = setCurrentWidth();
  let maxRight = step * items.length;
  let currentRight = 0;

  container.style.right = currentRight;

  window.addEventListener("resize", () => {
    step = setCurrentWidth();
  });


  rightButton.addEventListener("click", (e) => {
    changeSlide(e, "right");
  });

  leftButton.addEventListener("click", (e) => {
    changeSlide(e, "left");
  });

  function changeSlide(e, direction) {
    e.preventDefault();
    if (direction == "right") {
      if (currentRight < maxRight) {
        currentRight += step;
        container.style.right = `${currentRight}px`
      }
      if (currentRight = maxRight) {
        currentRight += 0;
        container.style.right = `0px`
      }
    } else {

      if (currentRight >= 0) {
        currentRight -= step;
        container.style.right = currentRight + `px`;
      }
      if (currentRight < 0) {
        currentRight = maxRight - step;
        container.style.right = currentRight + `px`;
      }
    }
  }

  function setCurrentWidth() {
    let itemWidth = document.querySelector('.slider__list-wrap').clientWidth;
    items.forEach(item => {
      item.style.width = `${itemWidth}px`;
    })
    return itemWidth;
  }
})(); */

/* ИЛИ (но оба плохо работают :( )) */

const slider = $('.slider__list').bxSlider({
  pager: false,
  controls: false
});

$(".slider__btn-left").click(e => {
  e.preventDefault();
  slider.goToPrevSlide();
});


$(".slider__btn-right").click(e => {
  e.preventDefault();
  slider.goToNextSlide();
});