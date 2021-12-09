function closeNoti() {
  document.getElementById("notification-bar").style.display = "none";
}

$(document).ready(function () {
  // 1. toogle nav-bar
  $("#btnOpen").click(function () {
    $("#nav-bar").slideToggle();
  });

  // 2. change icon on click burger icon to cross icon
  var imgs = 0;
  $("#btnOpen").click(function () {
    if (imgs == 0) {
      $(".image").attr("src", "assets/img/menu-close-icon.png");
      imgs = 1;
    } else if (imgs == 1) {
      $(".image").attr("src", "assets/img/burger-icon.png");
      imgs = 0;
    }
  });

  // 3. add & remove class to body onclick
  $("#btnOpen").click(function () {
    $("body").toggleClass("overflow");
  });

  // 4. main slider
  $(".main-slider-1").slick({
    dots: true,
    infinite: true,
    arrows: true,

    prevArrow: $(".left-arrow"),
    nextArrow: $(".right-arrow"),

    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    nav: true,
  });
  // main slider ends
  

  // 5. thumnails slider starts
  $(".owl-carousel-2").owlCarousel({
    loop: true,
    // autoplay: true,
    // autoplayTimeout: 2000,
    // smartSpeed: 1500,
    navText: [
      "<img src='assets/img/hero-slider-leftt-arrow.png'>",
      "<img src='assets/img/hero-slider-right-arrow.png'>",
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      400: {
        items: 2,
        nav: false,
      }, 
       600: {
        items: 3,
        nav: false,
      },
      1024: {
        items: 4,
        nav: true,
      },
    },
  });
  // thumbnails slider ends
});
// main document brackets close


