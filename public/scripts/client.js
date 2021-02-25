/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

let createTweetElement = function(array) {
  for (let i = 0; i < array.length; i++) {
    $('#tweets-section').prepend(renderTweet(array[i]));
  }
};

let renderTweet = function(tweet) {
  return `
  <article class="tweet">
    <header class="tweet-header">
      <div class="fullName">
        <div class="icon"><img src="${tweet.user.avatars}"></div>
        <p class="username">${tweet.user.name}</p>
      </div>
      <div class="userName">${tweet.user.handle}</div>
    </header>
    <div class="tweet">${tweet.content.text}</div>
    <footer class="tweet-footer">
      <div class="datePosted">${moment(tweet.created_at)}</div>
      <div class="tweeterIcons">🚩 🔀 ❤️</div>
    </footer>
  </article>`;
};

let newTweet = function(tweet) {
  return `
  <article class="tweet">
    <header class="tweet-header">
      <div class="fullName">
        <div class="icon"><img src="./images/circle-cropped.png"></div>
        <p class="username">Dan Pappo</p>
      </div>
      <div class="userName">dpappo</div>
    </header>
    <div class="tweet">${tweet}</div>
    <footer class="tweet-footer">
      <div class="datePosted">${moment(new Date)}</div>
      <div class="tweeterIcons">🚩 🔀 ❤️</div>
    </footer>
  </article>`;
};

let submitNewTweet = function(tweet) {
  $(newTweet(tweet)).prependTo('#tweets-section');
};

// don't let users insert scripts
const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

$(document).ready(function() {

  // load tweets from db
  const loadTweet = function(handleData) {
    $.ajax({method: 'GET',
      url: '../tweets',
      dataType: "json"
    }).done(function(data) {
      handleData(data);
    });
  };

  loadTweet(createTweetElement);


  //scroll from nav to new tweet with focus
  $(".nav-prompt").click(() => {
    $([document.documentElement, document.body]).animate({
      scrollTop: $("section.new-tweet").offset().top - 125
    }, 1000);
    $('textarea').focus();
  });

  //submit tweet handler
  $('#tweet-form').submit((event) => {
    event.preventDefault();
    const tweetData = escape($('#tweet-text').val());

    // empty tweet error
    if (tweetData === "") {
      $('.validationError').text("Not enough tweet to tweet. Try adding some content ✍️").slideDown();
      setTimeout(function() {
        $('.validationError').empty();
        $('.validationError').slideUp();
      }, 3000);

      // tweet > 140 char
    } else if (tweetData.length > 140) {
      $('.validationError').text("Too long, too long!! Try again with less than 140 characters 📝").slideDown();
      setTimeout(function() {
        $('.validationError').empty();
        $('.validationError').slideUp();
      }, 3000);

      //post case
    } else if (tweetData !== "") {
      $.ajax({method: 'POST',
        url: '/tweets',
        data: {text: tweetData}})
        .done(() => {
          $("#tweets-section").empty();
          loadTweet(createTweetElement);
        })
        .then($("#tweet-text").val(""));
    }
  });



  //hover and focus border for new tweet section
  $("#tweet-text").on("focus", function() {
    $("section.new-tweet").css("box-shadow", "inset 0 0 0 5px #4056A1");
  });
  $("#tweet-text").on("blur", function() {
    $("section.new-tweet").css("box-shadow", "none");
  });

});