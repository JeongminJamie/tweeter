/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {

  const data = [
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
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

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
  // }

  // const $tweet = createTweetElement(tweetData);

  // // Test / driver code (temporary)
  // console.log("tweet data: ", $tweet) // to see what it looks like
  // $('.tweets-container').append($tweet); //

  const createTweetElement = function (tweet) {
    let $tweet = `<article class="tweets-article">
  <header class="tweets-container-header">
    <div class="left-tweets-header">
      <img src="${tweet.user.avatars}">
      &nbsp
      <span>${tweet.user.name}</span>
    </div>
    <span>${tweet.user.handle}</span>
  </header>
  <textarea name="text" class="tweets-textarea">${tweet.content.text}
  </textarea>
  <footer class="tweets-footer">
    <span>${tweet.created_at}</span>
    <div class="right-tweets-footer">
      <i class="fa-solid fa-flag" id="first-tweets-icon"></i>
      &nbsp
      &nbsp
      <i class="fa-solid fa-retweet" id="second-tweets-icon"></i>
      &nbsp
      &nbsp
      <i class="fa-solid fa-heart" id="third-tweets-icon"></i>
    </div>
  </footer>
</article>`;
    return $tweet;
  }

  const renderTweets = function (tweets) {
    // loops through tweets

    // calls createTweetElement for each tweet
    tweets.forEach((tweet) => {
      let $tweet = createTweetElement(tweet)
      $('.tweets-container').append($tweet);
    });
    // takes return value and appends it to the tweets container
  }

  renderTweets(data);
});

