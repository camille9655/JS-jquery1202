$(".red").click(
  function red(){
    $(".title").css("color", "red");
  }
);

$(".blue").click(
  function blue(){
    $(".title").css("color", "blue");
  }
);

$(".green").click(
  function green(){
    $(".title").css("color", "green");
  }
);

$(".laugh").click(
  function laugh(){
    $(".title").html("^_^");
  }
);

$(".undo").click(
  function undo(){
    $(".title").css("color", "black");
    $(".title").html("YYY");
  }
);

$(".enter").click(
  function(){
    if($(".input").val().length > 0){
      $(".title").html($(".input").val());
      $(".input").val("");
    }
  }
);

$(".title").hover(
  function(){
    $(this).css("font-size", "40px");
  }, function(){
    $(this).css("font-size", "");
  }
);