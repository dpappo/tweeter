/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// let renderArticlesHTML = function(obj) {
// for (let tweet in obj) {
// $('main.container').append(createTweetElement(obj));
// }
// };

// let createTweetElement = function(tweet) {
//   return `<section class="tweet-container">
//   <article class="tweet">
//     <header class="tweet-header">
//       <div class="fullName">
//         <div class="icon">${tweet.user.avatars}</div>
//         ${tweet.user.name}
//       </div>
//       <div class="userName">${tweet.user.handle}</div>
//     </header>
//     <div class="tweet">${tweet.content.tweet}</div>
//     <footer class="tweet-footer">
//       <div class="datePosted">${tweet.created_at}</div>
//       <div class="tweeterIcons">🚩 🔀 ❤️</div>
//     </footer>
//   </article>`;
// };

// const tweetData = {
//   "user": {
//     "name": "Newton",
//     "avatars": "https://i.imgur.com/73hZDYK.png",
//     "handle": "@SirIsaac"
//   },
//   "content": {
//     "text": "If I have seen further it is by standing on the shoulders of giants"
//   },
//   "created_at": 1461116232227
// };


// $('main.container').append(`<section class="tweet-container">
// <article class="tweet">
//   <header class="tweet-header">
//     <div class="fullName">
//       <div class="icon">${tweetData.user.avatars}</div>
//       ${tweetData.user.name}
//     </div>
//     <div class="userName">${tweetData.user.handle}</div>
//   </header>
//   <div class="tweet">${tweetData.content.tweet}</div>
//   <footer class="tweet-footer">
//     <div class="datePosted">${tweetData.created_at}</div>
//     <div class="tweeterIcons">🚩 🔀 ❤️</div>
//   </footer>
// </article>`);

// renderArticlesHTML(tweetData);

let VariableWithUniqueName = "";