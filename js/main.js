$(".details").click (function() {
  $(".fees").toggle("display");
  $(".fees").css({bottom: "100px"})
  $("#arrowU").toggle("display");
  $("#arrowD").toggle("display");
})

$(".btns").click(function(btn){
  $(".btns").css({backgroundColor: "#fff"});
  $(".btns").css({color: "#3f1f03"});
  $(this).css({backgroundColor: "#3f1f03"});
  $(this).css({color: "#fff"});
})

$("#btnhtl").click(function(display){
  $("#HotLunch").toggle("display");
})

$(".fa-trash-alt").click(function(remove){
  $(".items").remove();
})

$(".fa-minus").click(function(minus){
  $(".items").remove();
})
