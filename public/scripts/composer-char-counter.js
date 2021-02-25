$(document).ready(function() {
  $('#tweet-text').on('keyup',() => {
    $('.counter').text(140 - $('#tweet-text').val().length);
    if (Number($('.counter').text()) < 0) {
      $('.counter').addClass('below-140');
    } else {
      $('.counter').removeClass('below-140');
    }
  });
});
