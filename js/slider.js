var swiper = new Swiper('.swiper', {
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 1,
      allowTouchMove: true,
    },
    600: {
      slidesPerView: 1.5,
    },
    1025: {
      slidesPerView: 2.5,
      allowTouchMove: false,
      centeredSlides: false,
    },
    1150: {
      slidesPerView: 3,
      allowTouchMove: false,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.products-swiper-button-next',
    prevEl: '.products-swiper-button-prev',
  },
});
