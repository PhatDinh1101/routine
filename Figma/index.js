$(document).ready(function () {
  $(".toggle").click(function () {
    $("nav").slideToggle();
  });
});
$(document).ready(function () {
  $("#panels").accordion();
});
$(function () {
  $(".accordion li").click(function () {
    $(this).toggleClass(" active ");
    $(this).siblings().removeClass(" active ");
    $(".submenu").stop().slideUp();
    $(".active .submenu").stop().slideDown();
    return false;
  });
});
