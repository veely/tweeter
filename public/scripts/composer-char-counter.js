$(document).ready(function() {
  const textbox = document.getElementById('textBox');
  let counter = 140;

  function countChar() {
    let num = counter - this.value.length;
    const textCounter = $(this).siblings(".counter");
    if (num >= 0) {
      textCounter.css("color", "black");
    } else {
      textCounter.css("color", "red");
    }
    $(this).siblings(".counter").text(num);
  }

  textbox.addEventListener('keyup', countChar);
});

