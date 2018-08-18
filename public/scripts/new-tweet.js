$(document).ready(function() {
  $( "section.new-tweet form input" ).click(function( event ) {
    event.preventDefault();
    var escape = function(str) {
      var div = document.createElement('div');
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    };
    var tweetBox = $("section.new-tweet form #textBox");
    var textFromUser = $(tweetBox).val();

    const safeHTML = `${escape(textFromUser)}`;
    $(tweetBox).val(safeHTML);

    if ($(tweetBox).val().length > 0) {
      if ($(tweetBox).val().length <= 140) {
        var data = $(tweetBox).serialize();
        console.log(data);
        $.post("tweets", data, function(){
          loadTweets();
          $(".container #counter").text("140");
          $(tweetBox).val("");
        });
      } else {
        $("#tooMany").slideToggle();
      }
    } else {
      $("#notEnough").slideToggle();
    }

  });
});