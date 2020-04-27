
$("h1").text("bye");

$("button").html("<em>Don't click me<em>");


$("a").attr("href", "https://www.yahoo.com");

$("h1").click(function() {
  $("h1").css("color", "black");
});

$("button").click(function(){
  $("h1").css("color", "purple");
});


$("input").keypress(function(event){
 alert(event.key);
});

$(document).keypress(function(event){
  $("h1").text(event.key);
});

$("h1").on("mouseover", function(){
  $("h1").css("color", "red");
});

$("h1").after("<button>New After</button>");

$("button").on("click", function() {
  $("h1").animate({opacity: 0.5}).slideUp().slideDown(); //toggle, hide, show or fadeout, fadein, slideUp, slideDown, animate
});
