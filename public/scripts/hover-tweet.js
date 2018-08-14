$(document).ready(function() {
  var container = document.getElementsByClassName('tweet')[0];

  function onHover() {
    $(this).css("opacity", "1");
  }

  function offHover() {
    $(this).css("opacity", ".5");
  }

  container.addEventListener('mouseover', onHover);
  container.addEventListener('mouseout', offHover);
});