$(document).ready(function(){
    $('.slider__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left_arrow.png"></img> </button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right_arrow.png"></button>',
        responsive: [
            {
            breakpoint: 992,
            settings: {
                arrows: false,
                dots: true,
                }
            }
        ]
    });
  });