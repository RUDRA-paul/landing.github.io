$(document).ready(function () {
    $(".nav-toggler").each(function (_, navToggler) {
      var target = $(navToggler).data("target");
      $(navToggler).on("click", function () {
        $(target).animate({
          height: "toggle",
        });
      });
    });
    var myNav = document.getElementById("header");

    $(function () {
      $(document).scroll(function () {
        var $nav = $(".fixed");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
    });
    $(".dropdown-item").click(function(){
      $(this).children(".fa-solid").toggleClass("rotate-90");
      $(this).siblings(".dropdown-menu").toggle('slow');
    });
});

