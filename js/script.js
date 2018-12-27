$(function() {
  $('.header__menu').on('click',function() {
    console.log('clicked');
    $('.header__nav').toggleClass('is-show');
    });
  });
