$(window).scroll(function() {
    if ($("#menu").offset().top > 56) {
        $("#menu").addClass("bg-warning");
    } else {
        $("#menu").removeClass("bg-warning");
    }
  });