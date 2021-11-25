const MySwiper = new Swiper('.swiper', {
  // Optional parameters
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
});

