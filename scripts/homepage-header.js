$(document).ready(function(){
  var height = $("#homepage-header").height() + "px";
  $(".navbar-toggle").click(function(){
    $(this).toggleClass('open');
    if($(".navbar-items").width() == 0){
      document.getElementById("side-nav").style.width = "120px";
      document.getElementById("side-nav").style.top = height;
      document.getElementsByTagName("main")[0].style.opacity = 0.5;
      document.getElementsByTagName("footer")[0].style.opacity = 0.5;
    }
    else{
      document.getElementById("side-nav").style.width = "0";
      document.getElementsByTagName("main")[0].style.opacity = 1;
      document.getElementsByTagName("footer")[0].style.opacity = 1;
    }
  });
});
