document.writeln(`
<nav class="menu text-capitalize fs-5 shadow">
   <div class="container py-3 py-lg-4 d-lg-flex justify-content-center column-gap-5 align-items-center">
      <div class="d-none d-lg-block">
         <img src="assets/img/logo-ue.png" width="56" height="auto" alt="">
      </div>
      <ul class="nav justify-content-evenly justify-content-lg-center column-gap-3 column-gap-lg-4 m-0">
         <li class="nav-item">
            <a href="index.html" class="nav-link" id="nav-home">
               <span class="link-icon d-inline d-lg-none">
                  <i class="fas fa-home"></i>
               </span>
               <span class="link-text d-none d-lg-inline">
                  <b class="fw-medium">beranda</b>
               </span>
            </a>
         </li>
         <li class="nav-item">
            <a href="tel:+6281333322610" target="_blank" class="nav-link" id="nav-chat">
               <span class="link-icon d-inline d-lg-none">
                  <i class="fab fa-whatsapp"></i>
               </span>
               <span class="link-text d-none d-lg-inline">
                  <b class="fw-medium">live chat</b>
               </span>
            </a>
         </li>
         <li class="nav-item">
            <a href="https://indraco.com/uelink/" target="_blank" class="nav-link" id="nav-contact">
               <span class="link-icon d-inline d-lg-none">
                  <i class="fas fa-contact-book"></i>
               </span>
               <span class="link-text d-none d-lg-inline">
                  <b class="fw-medium">hubungi kami</b>
               </span>
            </a>
         </li>
         <li class="nav-item d-none d-lg-block">
            <a href="#" class="nav-link" id="nav-search">
               <span class="link-icon d-inline">
                  <i class="fas fa-search"></i>
               </span>
               <span class="link-text d-none">
                  <b class="fw-medium">cari</b>
               </span>
            </a>
         </li>
         <li class="nav-item dropdown">
            <a data-bs-toggle="dropdown" href="#dropUser" class="nav-link position-relative" id="nav-user">
               <span class="link-icon d-inline">
                  <i class="fas fa-user"></i>
               </span>
               <span class="link-text d-none">
                  <b class="fw-medium">user</b>
               </span>
               <span class="icon-notification position-absolute top-0 start-100 translate-middle text-warning small"><i class="fas fa-circle small"></i></span>
            </a>
            <ul class="dropdown-menu dropdown-menu-end shadow my-2" id="dropUser">
               <li>
                  <a href="faq.html" class="dropdown-item media" id="nav-faq">
                     <span class="media-header"><i class="fas fa-question"></i></span>
                     <span class="media-body">FAQ</span>
                  </a>
               </li>
               <li>
                  <a href="terms.html" class="dropdown-item media" id="nav-terms">
                     <span class="media-header"><i class="fas fa-question"></i></span>
                     <span class="media-body">S & K</span>
                  </a>
               </li>
               <li>
                  <a href="log.html" class="dropdown-item media" id="nav-log">
                     <span class="media-header"><i class="fas fa-bell"></i></span>
                     <span class="media-body">Aktifitas</span>
                  </a>
               </li>
               <li>
                  <a href="coupon.html" class="dropdown-item media" id="nav-coupon">
                     <span class="media-header"><i class="fas fa-ticket"></i></span>
                     <span class="media-body">kupon anda</span>
                  </a>
               </li>
               <li><div class="dropdown-divider"></div></li>
               <li>
                  <a href="profile.html" class="dropdown-item media" id="nav-profile">
                     <span class="media-header"><i class="fas fa-id-card"></i></span>
                     <span class="media-body">profile user</span>
                  </a>
               </li>
               <li>
                  <a href="changepass.html" class="dropdown-item media" id="nav-change-pass">
                     <span class="media-header"><i class="fas fa-key"></i></span>
                     <span class="media-body">ganti password</span>
                  </a>
               </li>
               <li>
                  <a href="login.html" class="dropdown-item media" id="nav-login">
                     <span class="media-header"><i class="fas fa-user-lock"></i></span>
                     <span class="media-body">login</span>
                  </a>
               </li>
               <li>
                  <a href="register.html" class="dropdown-item media" id="nav-reg">
                     <span class="media-header"><i class="fas fa-user-plus"></i></span>
                     <span class="media-body">register</span>
                  </a>
               </li>
               <li>
                  <a data-bs-toggle="modal" href="#modal-confrim-logout" class="dropdown-item media" id="nav-logout">
                     <span class="media-header"><i class="fas fa-right-from-bracket"></i></span>
                     <span class="media-body">logout</span>
                  </a>
               </li>
            </ul>
         </li>
      </ul>
   </div>
</nav>`)