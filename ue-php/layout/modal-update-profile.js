document.writeln(`
<!-- --------------- modal update profile -->
<div id="modal-update-profile" class="modal" tabindex="-1">
   <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content border-primary border-3">
         <div class="modal-header border-0">
            <img src="../assets/img/logo-ue.png" width="32" height="auto" alt="" class="me-3">
            <h5 class="modal-title fs-2 text-primary">
               <b class="fw-bold">
                  Anda Yakin?
               </b>
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
         </div>
         <div class="modal-body">
            <p class="text-center fs-5">
               Anda akan merubah informasi profil data diri Anda
            </p>
            <p class="text-center fs-small m-0">
               Informasi profile data diri Anda sebelumnya akan dihapus.
            </p>
         </div>
         <div class="modal-footer border-0 flex-nowrap">
            <button type="submit" class="btn w-100 btn-primary">Simpan</button>
            <button type="button" class="btn w-100 btn-success" data-bs-dismiss="modal">Batal</button>
         </div>
      </div>
   </div>
</div>`)