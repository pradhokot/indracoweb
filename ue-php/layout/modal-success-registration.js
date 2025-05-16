document.writeln(`
<!-- --------------- modal berhasil registrasi -->
<div id="modal-success-registration" class="modal" tabindex="-1">
   <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content border-primary border-3">
         <div class="modal-header border-0">
            <img src="assets/img/logo-ue.png" width="32" height="auto" alt="" class="me-3">
            <h5 class="modal-title fs-2 text-primary">
               <b class="fw-bold">
                  Yey!
               </b>
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
         </div>
         <div class="modal-body">
            <p class="text-center fs-5">
               Selamat, proses registrasi Anda berhasil.
            </p>
            <p class="text-center fs-small m-0">
               Sekarang anda dapat mendaftarkan lebih dari satu kode unik dengan menggunakan akun ini. Semoga beruntung!
            </p>
         </div>
         <div class="modal-footer border-0 flex-nowrap">
            <a href="login.html" class="btn w-100 btn-primary">Login</a>
         </div>
      </div>
   </div>
</div>`)