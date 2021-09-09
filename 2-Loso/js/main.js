/* https://css-tricks.com/snippets/jquery/smooth-scrolling/ */
/* https://bxslider.com/ :for screens slider */
/* https://github.com/bfintal/Counter-Up :CounterUp*/
/* https://github.com/imakewebthings/waypoints :support for counterUp */
/* https://animate.style/ :for animate */
/* https://github.com/graingert/wow */
/* http://www.responsinator.com/ : checking responsive design with different devices */
/* https://validator.w3.org/ : For markup validation */
/* https://tinypng.com/ : Image Optimization */

/* Show and hide menu */

$(document).ready(function () {
  "use strict";

  $(window).scroll(function () {
    "use strict";

    if ($(window).scrollTop() < 80) {
      $(".navbar").css({
        "margin-top": "-100px",
        opacity: "0",
      });

      $(".navbar-default").css({
        "background-color": "rgba(59, 59 , 59, 0)",
      });
    } else {
      $(".navbar").css({
        "margin-top": "0px",
        opacity: "1",
      });

      $(".navbar-default").css({
        "background-color": "rgba(59, 59 , 59, 0.7)",
        "border-color": "#444",
      });

      $(".navbar-brand img").css({
        height: "35px",
        "padding-top": "0px",
      });

      $(".navbar-nav > li > a ").css({
        "padding-top": "15px",
      });
    }
  });
});

//add smooth scrolling
$(document).ready(function () {
  "use strict";

  // Select all links with hashes
  $(".nav-item, #scroll-to-top")
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000,
            function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });
});

// Active menu item on click
$(document).ready(function () {
  "use strict";

  $(".navbar-nav li a").click(function () {
    "use strict";

    $(".navbar-nav li a").parent().removeClass("active");

    $(this).parent().addClass("active");
  });
});

// highlight menu item on scroll
$(document).ready(function () {
  "use strict";

  $(window).scroll(function () {
    "use strict";

    $("section").each(function () {
      "use strict";

      var bb = $(this).attr("id"); // ABOUT, CONTACT, DOWNLOAD
      var hei = $(this).outerHeight(); // It will returns the outer height of padding and border. outerHeight(true): Margin outer height
      var grttop = $(this).offset().top - 70;

      if (
        $(window).scrollTop() > grttop &&
        $(window).scrollTop() < grttop + hei
      ) {
        $(".navbar-nav li a[href='#" + bb + "']")
          .parent()
          .addClass("active");
      } else {
        $(".navbar-nav li a[href='#" + bb + "']")
          .parent()
          .removeClass("active");
      }
    });
  });
});

// add auto padding to header

$(document).ready(function () {
  "use strict";

  setInterval(function () {
    "use strict";

    var windowHeight = $(window).height();
    var containerHeight = $(".header-container").height();
    var padTop = windowHeight - containerHeight;

    $(".header-container").css({
      "padding-top": Math.round(padTop / 2) + "px",
      "padding-bottom": Math.round(padTop / 2) + "px",
    });
  }, 10); // 10 is the lowest milisecond
});

// Add bx slider to screens
$(document).ready(function () {
  $(".bxslider").bxSlider({
    slideWidth: 292.5,
    auto: true,
    minSlides: 1,
    maxSlides: 3,
    slideMargin: 50,
  });
});

// Add Counter
$(document).ready(function () {
  $(".counter-num").counterUp({
    delay: 10,
    time: 2000,
  });
});

// Add Animation/ Initialize Wow
$(document).ready(function () {
  "use strict";

  new WOW().init();
});
