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
      $('#overlay, .modal-window').fadeIn();
    });
    $('.js-close').click(function () {
      $('#overlay, .modal-window').fadeOut();
    });
  });