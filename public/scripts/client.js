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
  <div class="tweets-underline">${tweet.content.text}
  </div>
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
      $('#error-message').slideDown("slow");
    } else {
      $('#error-message').slideUp();
      const $serializedText = $(this).serialize();

      $.ajax('/tweets/', { method: 'POST', data: $serializedText })
        .done(function () {
          $('.tweets-container').empty();
          loadTweets();
        })
        .fail(function (error) {
          console.error(error);
        })
    }
  });

  const loadTweets = function () {
    $.ajax('/tweets', { method: 'GET' })
      .done(function (response) {
        return response.json;
      })
      .done(function (jsonResponse) {
        let sortedArray = jsonResponse.sort((a, b) => b.created_at - a.created_at);
        return renderTweets(sortedArray);
      })
      .fail(function (error) {
        console.error(error);
      })
  };

  loadTweets();

});

