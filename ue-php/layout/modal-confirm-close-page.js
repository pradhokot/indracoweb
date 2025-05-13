document.writeln(`
<div class="modal" id="modalClose" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
   <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
         <div class="modal-header">
            <div class="row g-0 w-100 align-items-center" style="display: grid; grid-template-columns: 1fr auto 1fr;">
               <div class="col">
                  <img src="assets/img/logo-ue.png" width="100%" height="auto" alt="" style="max-width: 4rem;">
               </div><!-- end col -->
               <div class="col">
                  <h5 class="modal-title display-4 m-0 text-center" style="color: var(--color-primary);">
                     <b class="fw-bold">Tunggu!</b>
                  </h5>
               </div><!-- end col -->
               <div class="col position-relative h-100">
                  <button type="button" class="btn-close position-absolute top-0 end-0" data-bs-dismiss="modal" aria-label="Close"></button>
               </div><!-- end col -->
            </div><!-- end row -->
         </div>
         <div class="modal-body bg-light">
            <div class="container-fluid py-4">
               <p class="fs-4 text-center">
                  Anda yakin akan keluar dari website resmi  <b class="fw-medium">Uang Emas Goes To Mekah</b>
               </p>
            </div><!-- end container -->
         </div>
         <div class="modal-footer">
            <div class="row w-100 gx-2 row-gap-2 row-cols-1 row-cols-md-2">
               <div class="col">
                  <a href="index.html" class="btn btn-lg btn-danger w-100">
                     Ya
                  </a>
               </div><!-- end col -->
               <div class="col">
                  <button type="button" class="btn btn-lg btn-success w-100" data-bs-dismiss="modal">
                     Tidak
                  </button>
               </div><!-- end col -->
            </div><!-- end row -->
         </div>
      </div>
   </div>
</div><!-- end modal input code -->`)