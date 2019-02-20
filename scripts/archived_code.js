
<script>
  $(document).ready(function(){
    var windowHeight = $(window).height();
    var windowTopHalf = windowHeight * .1;
    var windowBottomHalf = windowHeight * .9;

    $(window).scroll(function(){
      var scroll = $(this).scrollTop();
      if(scroll > 60) {
        $("#homepage-header").addClass("active");
      }
      else{
        $("#homepage-header").removeClass("active");
      }

      $(".homepage-container").children().not(":first").each(function() {

        var divtop = $(this).offset().top - scroll;

        var background = $(this).css("background-image");
        if ((divtop + $(this).height()*.29 > windowTopHalf) && ((divtop + $(this).height()*.60) < windowBottomHalf)) {
          if (background.includes('linear')) {
          }
          else {
            var newBackground = 'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), ' + background;
            $(this).css("background-image", newBackground);
            $(this).css("opacity", "1");
          }
        }
        else {
          if (background.includes('linear')) {
            var string = background.substring(57);
            $(this).css("background-image", string);
            $(this).css("opacity", ".1");
          }
        }
      });
    });
  });
</script>
