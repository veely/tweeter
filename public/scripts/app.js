/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
  function loadTweets() {
    $('#tweets-container').empty();
    $.ajax('/tweets', { method: 'GET' })
    .then(function (tweets) {
      renderTweets(tweets);
    });
  }

  function renderTweets(data) {
    for(tweet of data) {
      $('#tweets-container').append(createTweetElement(tweet));
    }
  }

  function createTweetElement(data) {
    let name = data.user.name;
    let handle = data.user.handle;
    let content = data.content.text;
    let dateCreated = new Date(data.created_at);
    let currentDate = new Date();
    let diffDays = parseInt((Date.parse(currentDate) - Date.parse(dateCreated)) / (1000 * 60 * 60 * 24));
    let avatarUrl = data.user.avatars.small;
    let html = `
      <article class="tweet">
        <header><img class="avatar" src=${avatarUrl}><h2>${name}</h2>
          <p>${handle}</p>
        </header>
        <h3>${content}</h3>
        <footer>
          <p>${diffDays} days ago</p>
          <div id="buttons">
            <a href="/" class="fas fa-flag"></a>
            <a href="/" class="fas fa-retweet"></a>
            <a href="/" class="fas fa-heart"></a>
          </div>
        </footer>
      </article>
      `;
    return html;
  }


$(document).ready(function() {

  $(".button").click(function() {
    $(".new-tweet").slideToggle( function() {
      $("#textBox").focus();
    });
  });

  loadTweets();
});