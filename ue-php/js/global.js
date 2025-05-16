$(document).ready(function () {
   $('.page').css('min-height', $(window).height());

   // add minimal height di page-body
   // var windowHeight = $(window).height();
   // var headerHeight = $('.menu').outerHeight();
   // var footerHeight = $('.menu').outerHeight();
   // var bodyHeight = windowHeight - headerHeight - footerHeight;
   // $('.page-body').css('min-height', bodyHeight + 'px');

   // responsive display width
   if ($(window).width() < 992) {
      // $('body').addClass('bg-warning');
      $('.menu').addClass('fixed-bottom');
      $('.page').css('padding-bottom', $('.menu').outerHeight());
   }
   else {
      // desktop preview
      $('.menu').addClass('fixed-top');
      $('.page').css('padding-top', $('.menu').outerHeight());
      $('#nav-user').addClass('dropdown-toggle');
   }




   // default vaidaton form from Bootstrap
   (() => {
      'use strict'

      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      const forms = document.querySelectorAll('.needs-validation')

      // Loop over them and prevent submission
      Array.from(forms).forEach(form => {
         form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
               event.preventDefault()
               event.stopPropagation()
            }

            form.classList.add('was-validated')
         }, false)
      })
   })()



   // refresh page saat responsive width
   var windowWidth = $(window).width();
   $(window).resize(function () {
      if (windowWidth != $(window).width()) {
         location.reload();
         return;
      }
   });

});