/* Load jQuery.
--------------------------*/
jQuery(document).ready(function ($) {
  // Homepage blocks
  $(".region-content-home-top .block, .region-content-home-bottom .block").wrapInner( '<div class="container"></div>' );
  $(".about-frontpage-content").on({
    mouseenter: function () {
      $('.about-frontpage-content').addClass('animate__animated animate__bounce');
    },
    mouseleave: function () {
      $('.about-frontpage-content').removeClass('animate__animated animate__bounce');
    }
  });
});