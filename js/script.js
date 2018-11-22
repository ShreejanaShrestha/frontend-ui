//$(function () {
//    var inWrap = $('.inner-wrapper');
//    $('prev').on('click', function() {
//        inWrap.animate({left: '0%'},300, function(){
//            inWrap.css('left','-100%');
//            $('.slide').first().before($('.slide').last());
//        });
//    });
//});
//    
///*    
//$('.next').on('click', function () {
//    var currentImg = $('.active');
//    var nextImg = currentImg.next();
//
//    if (nextImg.length) {
//        currentImg.removeClass('active').css('z-index', -10);
//        nextImg.addClass('active').css('z-index', 10);
//    }
//});
//
//$('.prev').on('click', function () {
//    var currentImg
//}) = $('.active');
//var prevImg = currentImg.prev();
//
//if (prevImg.length) {
//    currentImg.removeClass('active').css('z-index', -10);
//    prevImg.addClass('active').css('z-index', 10);
//}
//});
//});
//*/

$(document).ready(function(){
  $('.next').on('click', function(){
    var currentImg = $('.active');
    var nextImg = currentImg.next();

    if(nextImg.length){
      currentImg.removeClass('active').css('z-index', -10);
      nextImg.addClass('active').css('z-index', 10);
    }
  });

  $('.prev').on('click', function(){
    var currentImg = $('.active');
    var prevImg = currentImg.prev();

    if(prevImg.length){
      currentImg.removeClass('active').css('z-index', -10);
      prevImg.addClass('active').css('z-index', 10);
    }
  });
});
