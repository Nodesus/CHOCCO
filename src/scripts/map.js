let myMap;

let zoom = 15;
$(window).on('load', function () {
  if ($(window).width() < 769) {
    zoom = 14;
  }
  if ($(window).width() < 481) {
    zoom = 13;
  }
});

const init = () => {
  myMap = new ymaps.Map("map", {
    center: [55.751396, 37.606147],
    zoom: zoom,
    controls: [],
  });

  const coords = [
    [55.746647, 37.583885],
    [55.759379, 37.585267],
    [55.758345, 37.623949],
    [55.750907, 37.608311],
  ];

  const myCollection = new ymaps.GeoObjectCollection({}, {
    draggable: false,
    iconLayout: 'default#image',
    iconImageHref: "/img/svg/marker.svg",
    iconImageSize: [58, 73],
    iconImageOffset: [-35, -52],
  });

  coords.forEach(coords => {
    myCollection.add(new ymaps.Placemark(coords));
  });

  myMap.geoObjects.add(myCollection);

  myMap.behaviors.disable('scrollZoom');
};

ymaps.ready(init);