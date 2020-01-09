$(document).ready(function () {
  let win = $(window), navbar = $('.navbar');

  win.on('scroll', () => {
    if (win.scrollTop() > 50) {
      navbar.addClass('nav-fixed').removeClass('fixed-top');
    } else {
      navbar.addClass('fixed-top').removeClass('nav-fixed');
    }
  });
});

