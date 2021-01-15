$(document).ready(function () {
  $(".container").hover(
    function () {
      $(this).find("div.overlay").css("opacity", 1)
    },
    function () {
      $(this).find("div.overlay").css("opacity", 0)
    }
  )
})