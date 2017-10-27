$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
  	items:1,
  	loop:true,
  	nav:true,
  	navText:false,
  	autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    smartSpeed:1000
  });
  $('.owl-prev, .owl-next').addClass('owl-nav-item');

  $('.win-price-menu__item').mouseover(function () {
  	$(this).children('.win-price-menu__img').css('opacity','0.7');

  }).mouseleave(function () {
  	$(this).children('.win-price-menu__img').css('opacity','1');
  });


  $('.article__button').on('click', function () {
    $(this).text(function(i, text){
        return text === "Читать полностью" ? "Свернуть" : "Читать полностью";
    })
    $(this).siblings('.article__description').toggleClass(' article__description-active');
    $(this).toggleClass(' article__button-active');
  });
});