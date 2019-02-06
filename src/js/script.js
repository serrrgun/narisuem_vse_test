svg4everybody(); // иницализация полифила для IE

$(document).ready(function(){

  $('.flexslider').flexslider({
    animation: "slide",
    prevText: "",
    nextText: "",
    slideshow: true,
    pauseOnAction: true
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
