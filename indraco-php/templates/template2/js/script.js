$(document).ready(function () {

   // responsive screen
   if ($(window).width() > 992) {
      // $('.page').addClass('bg-danger');
      // $('.page').removeClass('bg-primary');

      // when dropdown mouseover on desktop view
      $('.dropdown').mouseenter(function () {
         $('.navbar').addClass('drop-show');
      });
      $('.navbar').mouseleave(function () {
         $(this).removeClass('drop-show');
      });

      // remove dropdown toggler attribbute
      $('#nav-product, #nav-store')
         .removeAttr('data-bs-toggle')
         .removeAttr('data-bs-target')
         .attr('href', '#');

      // add active class on first navbar tab menu
      $('#menu .nav-pills>.nav-link:first-of-type>span').addClass('active');
      $('#menu .tab-content>.tab-pane:first-of-type').addClass('active show');
   } else {
      // $('.page').removeClass('bg-danger');
      // $('.page').addClass('bg-primary');
      
      // remove dropdown toggler attribbute
      $('.dropdown>a.nav-link')
         .removeAttr('href')
         .attr('data-bs-toggle', 'dropdown')
         .attr('data-bs-target', '#dropdownMenu');
   }

   // refresh page
   var windowWidth = $(window).width();
   $(window).resize(function () {
      if (windowWidth != $(window).width()) {
         location.reload();
         return;
      }
   });

   // change trigger nav-tabs from click to hover
   document.querySelectorAll('.nav-pills > .nav-link > span').forEach(function (everyitem) {
      var tabTrigger = new bootstrap.Tab(everyitem)
      everyitem.addEventListener('mouseenter', function () {
         tabTrigger.show();
      });
   });

   // scrolltop window
   $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
         $('.navbar').addClass('on-scroll');
      } else {
         $('.navbar').removeClass('on-scroll');
      };
   });

   // toggle scroll
   let prevScrollpos = $(window).scrollTop();
   $(window).on('scroll', function () {
      $('.navbar').toggleClass('toggle-scroll', prevScrollpos <= $(this).scrollTop());
      prevScrollpos = $(this).scrollTop();
   });
   
});