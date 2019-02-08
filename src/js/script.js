svg4everybody(); // иницализация полифила для IE

$(document).ready(function(){

/* инициализация слайдера */

  $('.offer-slider').flexslider({
    animation: "slide",
    prevText: "",
    nextText: "",
    slideshow: true,
    pauseOnAction: true,
    pauseOnHover: true
  });

/* инициализация карусели*/

  $('.products-carousel').flexslider({
    animation: "slide",
    animationLoop: false,
    itemWidth: 210,
    itemMargin: 10,
    minItems: 2,
    maxItems: 4,
    controlNav: false,
    prevText: "",
    nextText: "",
    pauseOnHover: true,
    animationLoop: true,
    slideshow: false
  });

/* сортировка в товаров в карусели */

  $('.products__header-button--common').click(function () {
    $('.products-carousel__sort').show();
    $('.products__header-button').css('color', '#606060');
    $(this).css('color', '#e02d33');
  });

  $('.products__header-button--hit').click(function () {
    $('.products-carousel__sort').hide();
    $('.products-carousel--hit').show();
    $('.products__header-button').css('color', '#606060');
    $(this).css('color', '#e02d33');
  });

  $('.products__header-button--new').click(function () {
    $('.products-carousel__sort').hide();
    $('.products-carousel--new').show();
    $('.products__header-button').css('color', '#606060');
    $(this).css('color', '#e02d33');
  });

  $('.products__header-button--sale').click(function () {
    $('.products-carousel__sort').hide();
    $('.products-carousel--sale').show();
    $('.products__header-button').css('color', '#606060');
    $(this).css('color', '#e02d33');
  });
});

// Если на проекте нет jQuery, но хочется $( document ).ready... (IE9+)
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });
