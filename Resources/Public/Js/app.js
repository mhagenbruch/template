$(document).ready(function() {
  $('.slider').each(function() {
    $(this).find('img').each(function() {
      $(this).removeAttr('height').removeAttr('width')
    });
  });
  $('.slider').bxSlider({
    responsive: true
  });
});