$(document).ready(function(){
  $(".accordion-top").hover(function(){
    var answer = $(this).next();
    if ($(answer).is(':visible')){
    }
    else{
      $(this).css("background-color", "#003262");
      $(this).css("color", "white");
    }
  }, function(){
    var answer = $(this).next();
    if ($(answer).is(':visible')){
    }
    else{
      $(this).css("background-color", "white");
      $(this).css("color", "#003262");
    }
  });
});
