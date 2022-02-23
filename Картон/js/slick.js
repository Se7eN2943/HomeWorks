$('.slider-top').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-bottom'
});
$('.slider-bottom').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-top',
  centerMode: true,
  focusOnSelect: true,
  prevArrow: '<button type="button" class="slick-btn-prev slick-btn">P</button>',
  nextArrow: '<button type="button" class="slick-btn-next slick-btn">N</button>'
});

$('.reviews-slider').slick({
  prevArrow: '<button type="button" class="rev-btn-prev slick-btn">P</button>',
  nextArrow: '<button type="button" class="rev-btn-next slick-btn">N</button>'
});