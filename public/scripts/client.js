/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Helper functions:

const addTweetElement = function(tweets) {
  for (let i = 0; i < tweets.length; i++) {
    $('#tweets-section').prepend(renderTweet(tweets[i]));
  }
};

//TODO update created_at to be relative
const renderTweet = function(tweet) {
  return `<article class="tweet">
    <header class="tweet-header">
      <div class="fullName">
        <div class="icon"><img src="${tweet.user.avatars}"></div>
        <p class="username">${tweet.user.name}</p>
      </div>
      <div class="userName">${tweet.user.handle}</div>
    </header>
    <div class="tweet">${tweet.content.text}</div>
    <footer class="tweet-footer">
      <div class="datePosted">${moment().to(tweet.created_at)}</div>
      <div class="tweeterIcons">🚩 🔀 ❤️</div>
    </footer>
  </article>`;
};

// don't let users insert scripts
const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const loadTweet = function(handleData) {
  $.ajax({method: 'GET',
    url: '../tweets',
    dataType: "json"
  }).done(function(data) {
    $("#tweets-section").empty();
    handleData(data);
  });
};

const navScrollListener = $(".nav-prompt").click(() => {
  $([document.documentElement, document.body]).animate({
    scrollTop: $("section.new-tweet").offset().top - 125
  }, 1000);
  $('textarea').focus();
});

const errorHandler = function(errorMsg) {
  $('.validationError').text(`${errorMsg}`).slideDown();
  setTimeout(function() {
    $('.validationError').slideUp().empty();
  }, 3000);
};

//tweet submission handler
const handleSubmit = $('#tweet-form').submit((event) => {
  event.preventDefault();
  const tweetData = escape($('#tweet-text').val());

  // empty tweet error
  if (tweetData === "") {
    errorHandler("Not enough tweet to tweet. Try adding some content ✍️");

    // tweet > 140 char
  } else if (tweetData.length > 140) {
    errorHandler("Too long, too long!! Try again with less than 140 characters 📝");

    //post case
  } else if (tweetData !== "") {
    $.ajax({method: 'POST',
      url: '/tweets',
      data: {text: tweetData}})
      .done(() => {
        loadTweet(addTweetElement);
      })
      .then(() => {
        $("#tweet-text").val("");
        $("output.counter").text("140");
      });
  }
});

const focusBorder = $("#tweet-text").on("focus", function() {
  $("section.new-tweet").css("box-shadow", "inset 0 0 0 5px #4056A1");
});
const blurBorder = $("#tweet-text").on("blur", function() {
  $("section.new-tweet").css("box-shadow", "none");
});

// jQuery on ready:
$(document).ready(function() {

  loadTweet(addTweetElement);
  navScrollListener;
  handleSubmit;
  focusBorder;
  blurBorder;

});