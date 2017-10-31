$(document).ready(function(){

  $('nav').on('click', 'a.item__mini-img', function () {
   $(this).addClass('current').siblings().removeClass('current');
   $(this).parent().siblings().children().attr('src', $(this).prop('href'));
   // $('.item__main-img').attr('src', $(this).prop('href'));
   return false;
})

});