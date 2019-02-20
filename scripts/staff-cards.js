$(document).ready(function(){
  $(".staff").click(function(){
    var outer = $(this).find('div:first').attr('id');
    var inner = "#staff-inner-" + outer.substring(12,14);
    var about = "#staff-about-" + outer.substring(12,14);
    if ($(inner).is(':visible')){
      $(inner).hide();
      $(about).fadeTo(300, 1);
      $(this).find(".staff-popout").hide();
    }
    else{
      $(inner).show();
      $(about).hide();
      $(this).find(".staff-popout").show();
    }
  });
});
