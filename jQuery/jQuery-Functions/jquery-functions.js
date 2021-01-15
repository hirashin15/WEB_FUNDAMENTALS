$(document).ready(function(){
  $("#hide-button").click(function(){
    console.log("hide button clicked");
    $('p.hide').hide(function(){
      console.log("paragraph is hiding");
    });
    $("#hide-button").hide(function(){
      console.log("hide button is hiding too");
    })
  });

  $("#show-button").click(function(){
    console.log("show button was clicked");
    $(".show").show(function(){
      console.log("show has occurred");
    })
  });

  $("#toggle-button").click(function(){
    console.log("toggle button clicked")
    $("p.toggle").toggle(500, function(){
      console.log("paragraph is toggled");
    });
  });

  // Do this one again*************************
  $("#slide-down-button").click(function(){
    console.log("slide down button clicked");
    $('.slide-down').slideDown(function(){
      console.log("h1 has slid down");
      $('.slide-down').append("<h1>Slide Down</h1>");
    });
  })

  $("#slide-up-button").click(function(){
    console.log("slide up button clicked");
    $('.slide-up').slideUp(function(){
      console.log("h1 has slid up");
    });
  });

  $("#slide-toggle-button").click(function(){
    console.log("slide toggle button clicked");
    $("p.slide-toggle").slideToggle(function(){
      console.log("slide toggle has happened");
    })
  });

  $("#fade-in-button").click(function(){
    console.log("fade in button clicked");
    $("p.fade-in").fadeIn(1500, function(){
      console.log("fade in has occurred");
    })
  })

  $("#fade-out-button").click(function(){
    console.log("fade out button was pressed");
    $(".fade-in").fadeOut(1500, function(){
      console.log("fade out occurred");
    });
  })

  $("#add-class-button").click(function(){
    console.log("add class button was pressed");
    $("#add-class p").addClass(function(){
      console.log("add class has occurred");
      return "selected";
    });
  })

  $("#before-button").click(function(){
    $("#before-after").before("Over here");
  })

  $("#after-button").click(function(){
    $("#before-after").after("Now over here");
  })

  $("#append-button").click(function(){
    $(".append").append("<p>I'm appending...</p>")
  })

  $("#html-button").click(function(){
    $(".html").html("<p>How could you change me!...</p>")
  })

  $("#attr-button").click(function(){
    $(".attr").html(
      $(".attr").attr("class")
    )
  })

  $("#val-button").click(function(){
    $(".val").text(function(){
      $("input").val();
    })
  })


})
