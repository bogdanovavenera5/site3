$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,       
        //adaptiveHeight: true,
        prevArrow:'<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              arrows: false,
              dots: true,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              arrows: false,
              dots: true,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              arrows: false,
              dots: true,
            },
          },
        ]
    })       
});

