/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

let createTweetElement = function(array) {
  for (let i = 0; i < array.length; i++) {
    $('main.container').append(renderTweet(array[i]));
  }
};

let renderTweet = function(tweet) {
  return `<section class="tweet-container">
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
      "name": "Dan Pappo",
      "avatars": "./images/circle-cropped.png"
      ,
      "handle": "@dpappo"
    },
    "content": {
      "text": "it's kind of crazy to consider how cheap books are; each one represents hundreds and hundreds or maybe thousands of hours of work, thinking, writing, editing, research, and interviewing....for a total cost of $10-15."
    },
    "created_at": "6:56 PM · Feb 4, 2021"
  },
  {
    "user": {
      "name": "Linus Tech Tips",
      "avatars": "https://pbs.twimg.com/profile_images/1034493707553140736/cDlQGimm_400x400.jpg",
      "handle": "@LinusTech" },
    "content": {
      "text": "tech tip: tell your PC that you appreciate it once in a while"
    },
    "created_at": "10:46 AM · Jan 26, 2021"
  },
  
];


let submitTweet = function(tweet) {
  return `<section class="tweet-container">
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
      <div class="datePosted">${new Date}</div>
      <div class="tweeterIcons">🚩 🔀 ❤️</div>
    </footer>
  </article>`;
};


$(document).ready(function() {
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
    const tweetData = ($('#tweet-form').serialize());
    console.log(tweetData);
    if (tweetData === "text=") {
      alert('Your tweet is bad and you should feel bad. Try adding some content ✍️');
    } else if (tweetData.length > 145) {
      alert("Too long, too long!! Try again with less than 140 characters.");
    } else if (tweetData !== "text=") {
      $.ajax({method: 'POST',
        url: '../tweets',
        data: tweetData});
    }
  });

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

});