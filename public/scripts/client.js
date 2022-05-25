/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {

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
    <span>${timeago.format(tweet.created_at)}</span>
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
    tweets.forEach((tweet) => {
      let $tweet = createTweetElement(tweet)
      $('.tweets-container').append($tweet);
    });
  }

  $('form').on('submit', function (event) {
    event.preventDefault();

    if ($('form textarea').val() === "" || $('form textarea').val().length > 140) {
      alert('Please match the number of letters to the form');
    }

    const $serializedText = $(this).serialize();
    $.ajax('/tweets/', { method: 'POST', data: $serializedText })
  });

  const loadTweets = function () {
    $.ajax('/tweets', { method: 'GET' })
      .done(function (response) {
        return response.json;
      })
      .done(function (jsonResponse) {
        return renderTweets(jsonResponse);
      })
      .fail(function (error) {
        console.error(error);
      })
  }

  loadTweets();

});

