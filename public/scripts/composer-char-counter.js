$(document).ready(function() {
  $('#tweet-text').on('keyup',(event) => {
  //TODO discuss with classmates what can go into selector instead of counter and tweet-text
    $('.counter').text(140 - $('#tweet-text').val().length);
    if (Number($('.counter').text()) < 0) {
      // not wrong, but, jQuery add and remove Class is preferred
      // $('.counter').css('color', 'red');
      $('.counter').addClass('below-140');
      
    } else {
      $('.counter').removeClass('below-140');
      // $('.counter').css('color', '#55514b');
    }
  });
});
