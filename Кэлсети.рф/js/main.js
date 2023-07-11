$(function () {

  $('.slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 2000,
  })

})

$(function () {

  $('.about-us__slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 2000,
  })

})

function BackToTop() {
  let button = $('.bottom-to-top');

  $(window).on('scroll', () => {
    if($(this).scrollTop() >= 150) {
      button.fadeIn();
    } else {
      button.fadeOut();
    }
  });

  button.on('click', (e) => {
    e.preventDefault();
    $('html').animate({scrollTop: 0}, 1000);
  })
}

BackToTop();
