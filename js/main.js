$(function () {
  var mixer = mixitup('.directions__list');
  $('.directions__filter-btn').on('click', function () {
    $('.directions__filter-btn').removeClass('directions__filter-btn--active')
    $(this).addClass('directions__filter-btn--active')
  })
  $('.team__slider').slick({
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: false,
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 550,
        settings: {
          centerMode: true,
          slidesToShow: 1,

        }
      }
    ]
  })
  $('.team__slider-prev').on('click', function(e) {
    e.preventDefault(),
    $('.team__slider').slick('slickPrev')
  })
  $('.team__slider-next').on('click', function(e) {
    e.preventDefault(),
    $('.team__slider').slick('slickNext')
  })

  $('.testimonials__slider').slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,  
    waitForAnimate: false,
    dots: true,
    appendDots: $('.testimonials__dots'),
  })
  $('.testimonials__prev').on('click', function(e) {
    e.preventDefault(),
    $('.testimonials__slider').slick('slickPrev')
  })
  $('.testimonials__next').on('click', function(e) {
    e.preventDefault(),
    $('.testimonials__slider').slick('slickNext')
  })

  setInterval(() => {
    if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
      $('.burger').addClass('burger--follow')
    } else {
      $('.burger').removeClass('burger--follow')
    }
  }, 0)
  $('.burger, .overlay, .header__top a').on('click', function(e) {
    e.preventDefault()
    $('.header__top').toggleClass('header__top--open')
    $('.burger').toggleClass('burger--close')
    $('.overlay').toggleClass('overlay--show')
  })  

})
