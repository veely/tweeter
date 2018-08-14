/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": {
          "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
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
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];


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
    let html = `
      <article class="tweet">
        <header><h2>${name}</h2>
          <p>${handle}</p>
        </header>
        <h3>${content}</h3>
        <footer>
          <p>${diffDays} days ago</p>
          <div id="buttons">test</div>
        </footer>
      </article>
      `;
    return html;
  }

  var $tweet = renderTweets(data);

  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});
// <article class="tweet">
//   <header>
//     <h2>Tweet Title</h2>
//     <p>@Diesel</p>
//   </header>
//   <h3>Your tweet here</h3>
//   <footer>
//     <p>10 days ago</p>
//     <div id="buttons">test</div>
//   </footer>
// </article>