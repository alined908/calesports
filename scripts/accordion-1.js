$(document).ready(function(){
  $(".accordion-top").click(function(){
    var answer = $(this).next();
    $(this).toggleClass('special');
    if ($(answer).is(':visible')){
      $(answer).slideUp();
      $(this).css("background-color", "white");
      $(this).css("color", "#003262");
    }
    else{
      $(this).css("background-color", "#003262");
      $(this).css("color", "white");
      $(answer).slideDown();
    }
  });
});
