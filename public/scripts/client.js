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
        <p>${tweet.user.name}</p>
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
  {"user": {
    "name": "wint",
    "avatars": "https://pbs.twimg.com/profile_images/847818629840228354/VXyQHfn0_400x400.jpg",
    "handle": "@dril"
  },
  "content": {
    "text": "i shou;ld be allowed on the roof of any building"
  },
  "created_at": "2:38 PM · Nov 15, 2020"},
  {"user": {
    "name": "ye 🌍",
    "avatars": "https://pbs.twimg.com/profile_images/1353936799484301312/fyN3pz3__400x400.jpg",
    "handle": "@yedoye_"
  },
  "content": {
    "text": "every day I wake up and begin the 16 hour process of getting ready for bed"
  },
  "created_at": "3:41 PM · Feb 2, 2021"},{"user": {
    "name": "Christina",
    "avatars": "https://pbs.twimg.com/profile_images/1282382759118483459/aK0lRqto_400x400.jpg",
    "handle": "@floozyesq"
  },
  "content": {
    "text": "me: it’s okay to be a person struggling with productivity during a prolonged crisis \nmy brain: not u though \nme: not me though"
  },
  "created_at": "12:06 PM · Oct 7, 2020"},
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
  },
  
];

createTweetElement(tweetData);

