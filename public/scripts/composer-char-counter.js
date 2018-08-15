$(document).ready(function() {
  const textbox = $('#textBox');
  let counter = 140;

  function countChar() {
    $(".errorMessage").css("display", "none");
    let num = counter - $(this).val().length;
    const textCounter = $(this).siblings(".counter");
    if (num >= 0) {
      textCounter.css("color", "black");
    } else {
      textCounter.css("color", "red");
    }
    $(this).siblings(".counter").text(num);
  }

  textbox.on("input", countChar);
});

