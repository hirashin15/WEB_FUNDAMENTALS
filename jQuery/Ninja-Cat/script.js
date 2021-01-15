$(document).ready(function(){

  $("img").click(function(){
    console.log("image was clicked")
    var altImg = $(this).attr("data-alt-src");
    var srcImg = $(this).attr("src");
      $(this).attr("data-alt-src", srcImg);
      console.log()
      $(this).attr("src", altImg);
  })

})