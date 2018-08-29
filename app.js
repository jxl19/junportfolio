// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      var el = $(event.target.getAttribute('href'));
      var elOffset = el.offset().top;
      console.log(elOffset);
      var elHeight = el.height();
      var windowHeight = $(window).height();
      var offset;
      if (elHeight < windowHeight) {
        console.log('el less');
        offset = elOffset - ((windowHeight / 2) - (elHeight / 2));
      }
      else {
        offset = elOffset - ((windowHeight / 0.53) - (elHeight / 2));
      }
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: offset
        }, 1000, function () {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          }
          // else {
          //   $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
          //   $target.focus(); // Set focus again
          // };
        });
      }
    }
  });

$(function () {
  var year = new Date().getFullYear()
  document.querySelector('footer p').innerHTML = '&copy; Jun Lei ' + year
  $('body').fadeIn().css({
    'display': 'block'
  });
});

