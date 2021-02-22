$(document).ready(function() {
  $('#tweet-text').on('keyup',(event) => {
  //TODO discuss with classmates what can go into selector instead of counter and tweet-text
    $('.counter').text(140 - $('#tweet-text').val().length);
    if (Number($('.counter').text()) < 0) {
      $('.counter').css('color', 'red');
    } else {
      $('.counter').css('color', '#55514b');
    }
  });
});
