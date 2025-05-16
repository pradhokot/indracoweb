document.writeln(`
<div class="topbar d-lg-none">
   <div class="container py-3">
      <div class="row g-0" style="display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; column-gap: 1rem;">
         <div class="col">
            <button class="btn shadow-none rounded-0 border-0 text-reset toggler-back" type="button" onclick="window.history.back()">
               <i class="fas fa-chevron-left"></i>
            </button>
         </div><!-- end col -->
         <div class="col">
            <h5 class="page-title m-0 lh-1 text-center text-capitalize fs-5 fw-medium"></h5>
         </div><!-- end col -->
         <div class="col">
            <button class="btn shadow-none rounded-0 border-0 text-reset float-end">
               <i class="fas fa-search"></i>
            </button>
         </div><!-- end col -->
      </div><!-- end row -->
   </div><!-- end container -->
</div><!-- end topbar -->`)