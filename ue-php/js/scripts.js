$(document).ready(function() {

   // page body height
   var windowHeight = $(window).height();
   var headerHeight = $('.navbar').outerHeight();
   var footerHeight = $('.page-footer').outerHeight();
   var bodyHeight = windowHeight - headerHeight - footerHeight;
   $('.page-body').css('min-height', bodyHeight + 'px');

   // refresh page responsive width
   var windowWidth = $(window).width();
   $(window).resize(function () {
      if (windowWidth != $(window).width()) {
         location.reload();
         return;
      }
   });
})