var mySwiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.arrow',
  },
  breakpoints: {
    540: {
      slidesPerView: 2,
    }
  }
});

var menuButton = document.querySelector('.menu-button');
var menu = document.querySelector('.header__content');

menuButton.addEventListener('click', function() {
  menuButton.classList.toggle('menu-button-active');
  menu.classList.toggle('header-active');
});