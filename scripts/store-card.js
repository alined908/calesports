$(document).ready(function(){
    $(".store-entry").hover(function(){
      var front = $(this).children(":first");
      var back = $(this).children(":first").next();
      $(front).hide();
      $(back).fadeTo(400, 1, "linear");
    },
    function(){
      var front = $(this).children(":first");
      var back = $(this).children(":first").next();
      $(back).hide();
      $(front).fadeTo(400,1,"linear");
    }
  );
});
