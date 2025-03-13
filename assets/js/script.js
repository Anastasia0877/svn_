$(document).ready(function(){
    $('.blog__slider').slick({
      slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    appendArrows:".blog__slider-arrow",
    arrows: true,
    responsive: [
      {
          breakpoint: 1120,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 914,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
  ]
    
    });
  });

  function formatDate(date) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options); // Форматируем в нужный вид
  }

  // Функция для добавления даты ко всем постам
  function addDateToPosts() {
    const posts = document.querySelectorAll('.date'); // Находим все элементы с классом date

    posts.forEach((post, index) => {
      const currentDate = new Date(); // Получаем текущую дату
      post.textContent = formatDate(currentDate); // Устанавливаем дату для каждого поста
    });
  }

  // Запуск функции при загрузке страницы
  window.onload = addDateToPosts;


  document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".trust-line");
    track.innerHTML += " " + track.innerHTML + " " + track.innerHTML + " " + track.innerHTML ; // 4 цикла
    // Дублируем контент для бесконечной прокрутки
  });

  $(document).ready(function(){
    $('.certificate__slider').slick({
      slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    appendArrows:".certificate__slider-arrow",
    arrows: true,
    responsive: [
      {
          breakpoint: 1120,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 914,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
  ]
    
    });
  });

  // Плавная прокрутка
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});


// Бургер меню
$('.menu-icon').on('click', function(){
  $('.menu-icon, .menu').toggleClass("active");
  // $('body').toggleClass("overlay");
})

$(document).click(function(e) {
  if (!$(e.target).hasClass("active") &&
      $(e.target).parents(".site-nav").length === 0) {
        $('.menu-icon, .menu').removeClass("active");
        // $('body').removeClass("overlay");
  }
});
$('.menu-item').on('click', function(){
  $('.menu-icon, .menu').removeClass("active");
  // $('body').removeClass("overlay");
}) 



// button-back-to-top
function backToTop() {
  var button = $('.back-to-top');
  $(window).on('scroll', () => {
      if ($(this).scrollTop() >= 200) {
          button.fadeIn();
      } else {
          button.fadeOut();
      }
  });
  button.on('click', (e) => {
      e.preventDefault();
      $('html').animate({
          scrollTop: 0
      }, '100');
  })
}
backToTop();

// Маска номера телефона
document.getElementById('phone').addEventListener('input', function(e) {
  let input = e.target.value.replace(/\D/g, ''); // Убираем все нецифровые символы
  if (input.length <= 2) {
      input = '+38' + input; // Добавляем +38 для начала
  } else if (input.length <= 5) {
      input = '+38 (' + input.slice(2); // Добавляем ( после +38
  } else if (input.length <= 8) {
      input = '+38 (' + input.slice(2, 5) + ') ' + input.slice(5);
  } else if (input.length <= 10) {
      input = '+38 (' + input.slice(2, 5) + ') ' + input.slice(5, 8) + '-' + input.slice(8);
  } else {
      input = '+38 (' + input.slice(2, 5) + ') ' + input.slice(5, 8) + '-' + input.slice(8, 10) + '-' + input.slice(10, 12);
  }

  e.target.value = input;
});