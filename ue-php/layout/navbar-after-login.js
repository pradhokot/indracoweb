document.writeln(`
<nav class="navbar navbar-expand-lg fixed-top shadow">
   <div class="container d-block">
      <div class="navbar-header d-lg-none" style="display: grid; grid-template-columns: 1fr auto 1fr; column-gap: 1rem;">
         <div class="navbar-start">
            <button class="btn border-0 shadow-none" type="button" toggler-back" onclick="window.history.back()">
               <i class="fas fa-chevron-left"></i>
            </button>
         </div>
         <div class="navbar-body d-flex h-100 align-items-center">
            <h5 class="title-page fw-medium text-center fs-4"></h5>
         </div>
         <div class="navbar-end">
            <button class="btn border-0 shadow-none float-end" type="button" data-bs-toggle="collapse" data-bs-target="#navcol">
               <i class="fas fa-bars"></i>
            </button>
         </div>
      </div><!-- end navbar header -->
      <div class="navbar-footer">
         <div class="navbar-collapse collapse" id="navcol">
            <ul class="navbar-nav w-100 flex-lg-row column-gap-lg-3 justify-content-lg-center pt-3 pt-lg-0">
               <li class="nav-item">
                  <a href="home.html" class="nav-link" id="nav-home">
                     <span class="link-icon d-none"><i class="fas fa-home"></i></span>
                     <span class="link-text d-inline">beranda</span>
                  </a>
               </li>
               <li class="nav-item">
                  <a href="gift2.html" class="nav-link" id="nav-gift">
                     <span class="link-icon d-none"><i class="fas fa-gift"></i></span>
                     <span class="link-text d-inline">hadiah</span>
                  </a>
               </li>
               <li class="nav-item">
                  <a href="news.html" class="nav-link" id="nav-news">
                     <span class="link-icon d-none"><i class="fas fa-newspaper"></i></span>
                     <span class="link-text d-inline">berita</span>
                  </a>
               </li>
               <li class="nav-item">
                  <a href="tel:+62317668777" target="_blank" class="nav-link" id="nav-chat">
                     <span class="link-icon d-none"><i class="fab fa-whatsapp"></i></span>
                     <span class="link-text d-inline">chat</span>
                  </a>
               </li>
               <li class="nav-item">
                  <a href="history.html" class="nav-link" id="nav-history">
                     <span class="link-icon d-none"><i class="fab fa-clock-rotate-left"></i></span>
                     <span class="link-text d-inline">riwayat</span>
                  </a>
               </li>
               <li class="nav-item">
                  <a href="https://indraco.com/uelink/" target="_blank" class="nav-link" id="nav-contact">
                     <span class="link-icon d-none"><i class="fas fa-address-book"></i></span>
                     <span class="link-text d-inline">kontak</span>
                  </a>
               </li>
               <li class="nav-item dropdown">
                  <a data-bs-toggle="dropdown" href="#dropUser" class="nav-link" id="nav-user">
                     <span class="link-icon d-none d-lg-inline"><i class="fas fa-user"></i></span>
                     <span class="link-text d-lg-none">akun saya</span>
                  </a>
                  <ul class="dropdown-menu dropdown-menu-end my-lg-2 border-2 shadow border-primary" id="dropUser">
                     <li>
                        <a href="#" class="dropdown-item media">
                           <span class="link-icon media-header"><i class="fas fa-user-circle"></i></span>
                           <span class="link-text media-body">informasi pribadi</span>
                        </a>
                     </li>
                     <li><div class="dropdown-divider border-primary"></div></li>
                     <li>
                        <a href="#" class="dropdown-item media">
                           <span class="link-icon media-header"><i class="fas fa-lock-open"></i></span>
                           <span class="link-text media-body">ubah password</span>
                        </a>
                     </li>
                     <li>
                        <a data-bs-toggle="modal" href="#modalClose" class="dropdown-item media">
                           <span class="link-icon media-header"><i class="fas fa-arrow-right-from-bracket"></i></span>
                           <span class="link-text media-body">logout</span>
                        </a>
                     </li>
                  </ul>
               </li>
            </ul>
         </div>
      </div><!-- end navbar footer -->
   </div><!-- end container -->
</nav><!-- end navbar -->`)