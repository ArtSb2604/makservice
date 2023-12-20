



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

const rem = parseFloat($('html').css('font-size'));

var swiper_rec = new Swiper(".recommendations-swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: rem * 10,
  navigation: {
    nextEl: ".recommendations-next",
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

window.addEventListener('resize', () => {
  spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
});




document.addEventListener('DOMContentLoaded', function () {
  // Получаем элемент с классом "main-info"
  var aboutSection = document.querySelector('.main-info-block');

  // Создаем новый экземпляр Intersection Observer
  var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      // Если секция "about" видима
      if (entry.isIntersecting) {
        // Получаем все элементы с классом "odometer" внутри текущей видимой секции
        var odometers = entry.target.querySelectorAll('.odometer');
        // Устанавливаем значения в зависимости от идентификатора
        odometers.forEach(function (odometer) {
          if (odometer.id === 'odometer-1') {
            odometer.innerHTML = 70;
          } else {
            odometer.innerHTML = 17;
          }
        });

        // Прекращаем отслеживать видимость, так как код выполнился
        observer.disconnect();
      }
    });
  });

  // Начинаем отслеживать видимость секции "about"
  observer.observe(aboutSection);
});

document.addEventListener('DOMContentLoaded', function () {
  let lastScrollTop = 0;
  const blocks = document.querySelectorAll('.digit-decor');
  const initialPositions = Array.from(blocks, block => block.getBoundingClientRect().top + window.scrollY - 700); // Вычесть 300 для начала анимации раньше

  window.addEventListener('scroll', function () {
      const st = window.pageYOffset || document.documentElement.scrollTop;

      blocks.forEach(function (block, index) {
          const distance = st - initialPositions[index];

          // Проверяем, находится ли блок в видимой области
          const isInViewport = block.getBoundingClientRect().top <= window.innerHeight && block.getBoundingClientRect().bottom >= 0;
          if (isInViewport) {
              const translateY = Math.max(0, Math.min(distance / 4, 200)); // Подстройте коэффициент деления для более плавного/быстрого движения

              if (distance > 0) {
                  // Прокрутка вниз
                  block.style.transform = 'translateY(' + translateY + 'px)';
              } else {
                  // Прокрутка вверх
                  block.style.transform = 'translateY(' + translateY + 'px)';
              }
          } 
      });

      lastScrollTop = st;
  });
});

