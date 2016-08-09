$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why hello there!</li>");
    $("ul#webpage").children("li").first().addClass("green-background");
    $("ul#user").children("li").first().addClass("green-background");
  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");

    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });

    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");

    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });

    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#info-img").click(function() {
    $(".img-col").append("<img width='300' src='img/morganHall.jpg'> ");
  });
});
