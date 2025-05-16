document.writeln(`
<!-- --------------- modal peringatan belum login/ register -->
<div id="modal-warning-reglog" class="modal" tabindex="-1">
   <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content border-primary border-3">
         <div class="modal-header border-0">
            <img src="assets/img/logo-ue.png" width="32" height="auto" alt="" class="me-3">
            <h5 class="modal-title fs-2 text-primary">
               <b class="fw-bold">
                  Oops!
               </b>
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
         </div>
         <div class="modal-body">
            <p class="text-center fs-5">
               Kamu belum Login/ Registrasi di website <br class="d-none d-md-inline"><b class="fw-bold">Uang Emas Goes To Mekah</b>
            </p>
         </div>
         <div class="modal-footer border-0 flex-nowrap">
            <a href="login.html" type="button" class="btn w-100 btn-primary">Login</a>
            <a href="register.html" type="button" class="btn w-100 btn-success">Registrasi</a>
         </div>
      </div>
   </div>
</div>`)