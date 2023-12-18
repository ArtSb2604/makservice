

const mySwiper = new Swiper('.swiper-category', {
  spaceBetween: 30,
  initialSlide: 0,
  centerInsufficientSlides: true,
  loop: false,
  freeMode: true,
  freeModeSticky: true,
  grid: {
    fill: 'row',
    rows: '2'
  },
  slidesPerView: 2,
});



var productThumbs = new Swiper(".product-thumbs", {
  spaceBetween: 30,
  slidesPerView: 6,
  freeMode: true,
  watchSlidesProgress: true,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
});
var productSlider = new Swiper(".product-slider", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 1,
  loopedSlides: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: productThumbs,
  },
  
});



const spaceHolder = document.querySelector('.space-holder');
const horizontal = document.querySelector('.horizontal');
spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;

function calcDynamicHeight(ref) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const objectWidth = ref.scrollWidth;
  return objectWidth - vw + vh + 150; // 150 is the padding (in pixels) desired on the right side of the .cards container. This can be set to whatever your styles dictate
}

window.addEventListener('scroll', () => {
  const sticky = document.querySelector('.sticky');
  horizontal.style.transform = `translateX(-${sticky.offsetTop}px)`;
});

window.addEventListener('resize', () => {
  spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
});