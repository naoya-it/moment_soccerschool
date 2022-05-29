$(function(){
  $('.menu-icon').on('click',function(){
      $('.js-modal').fadeIn();
      return false;
  });

  $('.js-modal-close').on('click',function(){
      $('.js-modal').fadeOut();
      return false;
  });
});

$(function(){
  $('.slide_img').slick({
    dots:true
  });
});




$(function(){

  var modalBtn = $('.js-modal__btn');
  var modalBtnClose = $('.js-modal__btn--close');
  var modalBg = $('.js-modal__bg');
  var modalMain = $('.js-modal__main');

  modalBtn.on('click', function (e) {
    $(this).next(modalBg).fadeToggle();
  });

  modalBtnClose.on('click', function (e) {
    modalBg.fadeOut();
  });

  modalMain.on('click', function (e) {
    e.stopPropagation();
  });

  modalBg.on('click', function () {
    $(this).fadeOut();
  });

});