const mesureWidth = () => {
  return 500;
}

const slideItem = (sitem) => {
  const hiddenContent = sitem.find(".products-menu__content");
  const reqWidth = mesureWidth();

  hiddenContent.width(reqWidth);
}

$(".products-menu__title").on("click", (e) => {
  e.preventDefault();

  const $this = $(e.CurrentTarget);
  const sitem = $this.closest(".products-menu__item");

  slideItem(sitem);
});