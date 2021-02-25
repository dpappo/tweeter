$(document).ready(function() {
  $('#tweet-text').on('keyup',() => {
    //TODO discuss with classmates what can go into selector instead of counter and tweet-text
    $('.counter').text(140 - $('#tweet-text').val().length);
    if (Number($('.counter').text()) < 0) {
      $('.counter').addClass('below-140');
    } else {
      $('.counter').removeClass('below-140');
    }
  });
});
