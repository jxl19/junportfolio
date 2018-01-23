//js portion will just basically be jquery for the dataspy
//nav bar will be jun lei and each one of the projects

// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});
// function showProfile() {
//     $('.main-content .content-wrap').children().hide();
//     $('#profile').fadeIn();
//     $('.main-content').addClass("align-center");
//     $('.main-content').removeClass("clear-padding");
// }

// function showProjects() {
//     $('#section1').hide();
//     $('#section2').removeClass("clear-padding");
//     $('#section2').fadeIn();
// }

// function showProjects() {
//     $('.main-content .content-wrap').children().hide();
//     $('#about').fadeIn();
//     $('.main-content').removeClass("clear-padding");
//     $('.main-content').addClass("align-center");
// }

// creates li for each nav item
// function createNav() {
//     var content = ["Jun Lei", "Projects"];
//     content.forEach(function (i) {
//         var liItem = $("<li><a id='" + content.indexOf(i) +
//             "' class='nav-link'>" + i + "</a></li>");
//         $('.justify-content-center').append(liItem);
//         liItem.click(function () {
//             navRouter(liItem);
//         });
//     });
// }

// function navRouter(i) {
//     if (i.text() === "Jun Lei") {
//         navAnimation('#0');
//         showProfile();
//     }
//     else if (i.text() === "Projects") {
//         navAnimation('#1');
//         showProjects();
//     }
// }

// function navAnimation(selection) {
//     if (selection === '#0') {
//         $('#0').addClass('nav-link-open');
//         $('#1, #2').removeClass('nav-link-open');
//     }
//     else if (selection === '#1') {
//         $('#1').addClass('nav-link-open');
//         $('#0, #2').removeClass('nav-link-open');
//     }
// }

$(function () {
    var year = new Date().getFullYear()
    document.querySelector('footer p').innerHTML = '&copy; Jun Lei ' + year
    // createNav();
    // navAnimation('#0');
    // showProfile();
    $('body').fadeIn().css({
        'display': 'block'
    });
});

