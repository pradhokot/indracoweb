<div class="navbar navbar-expand-lg fixed-top text-nowrap">
   <div class="container">
      <h1>
         <a href="index.html" class="navbar-brand">
            <img src="../assets/img/sda.svg" width="100%" height="auto" alt="">
         </a>
      </h1>
      <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navcol">
         <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse column-gap-lg-4 column-gap-xl-5" id="navcol">
         <ul class="navbar-nav ms-auto text-capitalize column-gap-xl-3 mb-4 mb-lg-0">
            <li class="nav-item dropdown">
               <a href="about.html" class="nav-link nav-about fw-medium" data-bs-toggle="collapse" data-bs-target="#dropdown-about">
                  about SDA
               </a>
               <div class="collapse dropdown-menu" id="dropdown-about" data-bs-parent="#navcol">
                  <ul class="navbar-nav flex-column px-3 px-lg-2">
                     <li class="nav-item">
                        <a href="workshop.html" class="nav-link nav-workshop">
                           workshop center
                        </a>
                     </li>
                     <li class="nav-item">
                        <a href="distribution.html" class="nav-link nav-distribution">
                           distribution network
                        </a>
                     </li>
                  </ul>
               </div>
            </li>
            <li class="nav-item dropdown">
               <a href="products.html" class="nav-link nav-products fw-medium" data-bs-toggle="collapse" data-bs-target="#dropdown-products">
                  products
               </a>
               <div class="collapse dropdown-menu" id="dropdown-products" data-bs-parent="#navcol">
                  <?php include 'layout/nav-product-mobile.php' ?>
                  <?php include 'layout/nav-product-desktop.php' ?>
               </div>
            </li>
            <li class="nav-item">
               <a href="industries.html" class="nav-link nav-industries fw-medium">
                  industries
               </a>
            </li>
            <li class="nav-item">
               <a href="https://tokosda.com/" target="_blank" class="nav-link nav-shop fw-medium">
                  where to buy
               </a>
            </li>
            <li class="nav-item">
               <a href="contact.html" class="nav-link nav-contact fw-medium">
                  contact us
               </a>
            </li>
         </ul>
         <ul class="navbar-nav column-gap-xl-3">
            <li class="nav-item">
               <a href="#" class="nav-link py-lg-0">
                  IN
               </a>
            </li>
            <li class="nav-item d-none d-lg-block">
               <div class="vr h-100"></div>
            </li>
            <li class="nav-item">
               <a href="#" class="nav-link py-lg-0 active">
                  EN
               </a>
            </li>
         </ul>
      </div>
   </div><!-- end container -->
</div><!-- end navbar -->