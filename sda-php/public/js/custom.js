$(document).ready(function checkPosition() {
   if (window.matchMedia('(max-width: 991.98px)').matches) {
      $('#dropdown-about, #dropdown-products').removeClass('dropdown-menu');
      $('.navbar-toggler').click(function () {
         $('.navbar').toggleClass('shown');
         $('body').toggleClass('overflow-hidden');
      });
   } else if (window.matchMedia('(min-width: 992px)').matches) {
      $('#dropdown-about, #dropdown-products').removeClass('collapse');
      $('#dropdown-about, #dropdown-products').removeAttr('data-bs-parent');
      $('.dropdown > a').removeAttr('data-bs-toggle data-bs-target');

      document.querySelectorAll('.nav-tabs .nav-link > span').forEach(function (everyitem) {
         var tabTrigger = new bootstrap.Tab(everyitem)
         everyitem.addEventListener('mouseenter', function () {
            tabTrigger.show();
         });
      });
   }
});
$(window).scroll(function () {
   if ($(this).scrollTop() > 100) {
      $('body').addClass('on-scroll')
   } else {
      $('body').removeClass('on-scroll')
   }
});