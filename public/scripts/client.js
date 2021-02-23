/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

let createTweetElement = function(obj) {
  for (let tweet of obj) {
    $('main.container').append(renderTweet(tweet));
  }
};

let renderTweet = function(tweet) {
  return `<section class="tweet-container">
  <article class="tweet">
    <header class="tweet-header">
      <div class="fullName">
        <div class="icon"><img src="${tweet.user.avatars}"></div>
        ${tweet.user.name}
      </div>
      <div class="userName">${tweet.user.handle}</div>
    </header>
    <div class="tweet">${tweet.content.text}</div>
    <footer class="tweet-footer">
      <div class="datePosted">${tweet.created_at}</div>
      <div class="tweeterIcons">🚩 🔀 ❤️</div>
    </footer>
  </article>`;
};

const tweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];

createTweetElement(tweetData);

