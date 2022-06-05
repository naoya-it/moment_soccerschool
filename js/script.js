$(function(){
    $('.slide_imgs').slick({
      dots:true,
      autoplay:true,
      arrows: false,
    autoplaySpeed:5000,
    centerMode: true,
    centerPadding: '10%',
    });
  });

  $(function () {
    $('.js-open').click(function () {
      $("body").addClass("no_scroll"); // 背景固定させるクラス付与
      $('#overlay, .modal-window').fadeIn();
    });
    $('.js-close').click(function () {
      $("body").removeClass("no_scroll"); //
      $('#overlay, .modal-window').fadeOut();
    });
  });