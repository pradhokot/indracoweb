document.writeln(`
   <nav class="navbar navbar-expand shadow">
      <div class="container">
         <ul class="navbar-nav flex-row column-gap-3 justify-content-evenly w-100 justify-content-lg-center">
            <li class="nav-item">
               <a href="index.html" class="nav-link" id="nav-home">
                  <span class="link-icon d-lg-none"><i class="fas fa-home"></i></span>
                  <span class="link-text d-none d-lg-inline">beranda</span>
               </a>
            </li>
            <li class="nav-item">
               <a href="gift.html" class="nav-link" id="nav-gift">
                  <span class="link-icon d-lg-none"><i class="fas fa-gift"></i></span>
                  <span class="link-text d-none d-lg-inline">hadiah</span>
               </a>
            </li>
            <li class="nav-item">
               <a href="tel:+62317668777" target="_blank" class="nav-link" id="nav-chat">
                  <span class="link-icon d-lg-none"><i class="fab fa-whatsapp"></i></span>
                  <span class="link-text d-none d-lg-inline">chat</span>
               </a>
            </li>
            <li class="nav-item d-none d-lg-block">
               <a href="https://indraco.com/uelink/" target="_blank" class="nav-link" id="nav-contact">
                  <span class="link-icon d-lg-none"><i class="fas fa-address-book"></i></span>
                  <span class="link-text d-none d-lg-inline">kontak</span>
               </a>
            </li>
            <li class="nav-item dropdown">
               <a data-bs-toggle="dropdown" href="#dropUser" class="nav-link" id="nav-user">
                  <span class="link-icon"><i class="fas fa-user"></i></span>
                  <span class="link-text d-none"></span>
               </a>
               <ul class="dropdown-menu dropdown-menu-end my-2 border-2 shadow border-primary" id="dropUser">
                  <li>
                     <a href="login.html" class="dropdown-item media">
                        <span class="link-icon media-header"><i class="fas fa-user-lock"></i></span>
                        <span class="link-text media-body">login</span>
                     </a>
                  </li>
                  <li><div class="dropdown-divider border-primary"></div></li>
                  <li>
                     <a href="register.html" class="dropdown-item media">
                        <span class="link-icon media-header"><i class="fas fa-user-plus"></i></span>
                        <span class="link-text media-body">register</span>
                     </a>
                  </li>
               </ul>
            </li>
         </ul>
      </div><!-- end container -->
   </nav><!-- end navbar -->`)