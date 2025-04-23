document.writeln(`
<nav class="navbar navbar-expand-lg p-0 fixed-top d-block">
   <div class="navbar-top navtop container">
      <div class="navtop-start d-lg-none">
         <button class="toggler-menu" data-bs-toggle="offcanvas" data-bs-target="#menu">
            <i class="fas fa-bars"></i>
         </button>
      </div><!-- end navtop start -->
      <div class="navtop-center">
         <h1>
            <a href="index.html" class="navbrand d-flex">
               <img src="../../asset/img/logo-indraco.png" width="100%" height="auto" class="img-dark" alt="INDRACO">
               <img src="../../asset/img/logo-indraco-invert.png" width="100%" height="auto" class="img-light" alt="INDRACO">
            </a>
         </h1>
      </div><!-- end navtop center -->
      <div class="navtop-end">
         <div class="float-end">
            <div class="d-lg-none">
               <script src="layout/toggler-search.js"></script>
            </div>
            <div class="d-none d-lg-block small">
               <script src="layout/nav-submenu.js"></script>
            </div>
         </div>
      </div><!-- end navtop end -->
   </div><!-- end navtop -->
   <div class="navbar-bottom">
      <div id="menu" class="offcanvas-lg offcanvas-start container-lg p-0 d-flex align-items-lg-baseline" z-index="-1">
         <div class="offcanvas-header menu-header">
            <button class="btn-close shadow-none" data-bs-toggle="offcanvas" data-bs-target="#menu"></button>
         </div><!-- end menu header -->
         <div class="offcanvas-body menu-body flex-lg-grow-1">
            <ul class="navbar-nav nav-divider menu-list">
               <li class="nav-item menu-item">
                  <a href="#" class="nav-link menu-link" id="nav-about">
                     <span>tentang kami</span>
                  </a>
               </li><!-- end nav about -->
               <li class="nav-item menu-item dropdown">
                  <a href="#" data-bs-toggle="dropdown" data-bs-target="#drop-product" class="nav-link menu-link" id="nav-product">
                     <span>produk</span>
                  </a>
                  <div class="dropdown-menu border-0 m-0" id="drop-product">
                     <div class="container-lg">
                        <header class="d-none d-lg-block">
                           <h5 class="fs-5 opacity-50">
                              <b class="fw-medium">
                                 Produk Kami
                              </b>
                           </h5>
                           <hr class="my-3">
                        </header>
                        <div class="row tab-row gx-lg-5">
                           <div class="col tab-col">
                              <nav class="nav nav-pills" role="tablist">
                                 <a href="#" class="nav-link" id="nav-product-consumen">
                                    <span data-bs-toggle="pill" data-bs-target="#tab-product-consumen">
                                       produk konsumen
                                    </span>
                                 </a>
                                 <a href="#" class="nav-link" id="nav-product-foodservice">
                                    <span data-bs-toggle="pill" data-bs-target="#tab-product-foodservice">
                                       food service
                                    </span>
                                 </a>
                                 <a href="#" class="nav-link" id="nav-product-machines">
                                    <span data-bs-toggle="pill" data-bs-target="#tab-product-machines">
                                       mesin-mesin & peralatan khusus
                                    </span>
                                 </a>
                              </nav><!-- end nav pills -->
                           </div><!-- end col -->
                           <div class="col tab-col">
                              <div class="tab-content">
                                 <div class="tab-pane fade" id="tab-product-consumen">
                                    <div class="row tab-row gx-lg-5">
                                       <div class="col tab-col">
                                          <nav class="nav nav-pills" role="tablist">
                                             <a href="#" class="nav-link" id="nav-product-supresso">
                                                <span data-bs-toggle="pill" data-bs-target="#tab-product-supresso">
                                                   supresso
                                                </span>
                                             </a>
                                             <a href="#" class="nav-link" id="nav-product-balicafe">
                                                <span data-bs-toggle="pill" data-bs-target="#tab-product-balicafe">
                                                   balicafe
                                                </span>
                                             </a>
                                             <a href="#" class="nav-link" id="nav-product-ucafe">
                                                <span data-bs-toggle="pill" data-bs-target="#tab-product-ucafe">
                                                   ucafe
                                                </span>
                                             </a>
                                             <a href="#" class="nav-link" id="nav-product-rs">
                                                <span data-bs-toggle="pill" data-bs-target="#tab-product-rs">
                                                   rasa sayang
                                                </span>
                                             </a>
                                             <a href="#" class="nav-link" id="nav-product-tb">
                                                <span data-bs-toggle="pill" data-bs-target="#tab-product-tb">
                                                   tugu buaya
                                                </span>
                                             </a>
                                             <a href="#" class="nav-link" id="nav-product-ue">
                                                <span data-bs-toggle="pill" data-bs-target="#tab-product-ue">
                                                   uang emas
                                                </span>
                                             </a>
                                             <a href="#" class="nav-link" id="nav-product-jaheku">
                                                <span data-bs-toggle="pill" data-bs-target="#tab-product-jaheku">
                                                   jaheku
                                                </span>
                                             </a>
                                             <a href="#" class="nav-link" id="nav-product-brochoco">
                                                <span data-bs-toggle="pill" data-bs-target="#tab-product-brochoco">
                                                   brochoco
                                                </span>
                                             </a>
                                             <a href="#" class="nav-link" id="nav-product-intirasa">
                                                <span data-bs-toggle="pill" data-bs-target="#tab-product-intirasa">
                                                   intirasa
                                                </span>
                                             </a>
                                          </nav>
                                       </div><!-- end col -->
                                       <div class="col tab-col">
                                          <div class="tab-content">
                                             <div class="tab-pane fade" id="tab-product-supresso">
                                                <h5 class="mb-3">
                                                   <img src="../../asset/img/logo-supresso.png" width="100%" height="auto" style="max-width: 5rem;" alt="">
                                                </h5>
                                                <p class="text-justify small mb-3">
                                                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum obcaecati accusantium iusto deserunt ad non sint dignissimos a dicta numquam, expedita et fugiat doloremque, qui nulla maxime suscipit! Perspiciatis, ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laudantium iste magni facere repellendus nemo obcaecati quasi! Voluptatibus obcaecati unde in sed doloribus accusamus eius aliquam! Ullam eligendi quod labore?
                                                </p>
                                                <script src="layout/menu-thumbnail.js"></script>
                                             </div><!-- end tab pane -->
                                             <div class="tab-pane fade" id="tab-product-balicafe">
                                                <h5 class="mb-3">
                                                   <img src="../../asset/img/logo-balicafe.png" width="100%" height="auto" style="max-width: 10rem;" alt="">
                                                </h5>
                                                <p class="text-justify small mb-3">
                                                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum obcaecati accusantium iusto deserunt ad non sint dignissimos a dicta numquam, expedita et fugiat doloremque, qui nulla maxime suscipit! Perspiciatis, ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laudantium iste magni facere repellendus nemo obcaecati quasi! Voluptatibus obcaecati unde in sed doloribus accusamus eius aliquam! Ullam eligendi quod labore?
                                                </p>
                                                <script src="layout/menu-thumbnail.js"></script>
                                             </div><!-- end tab pane -->
                                             <div class="tab-pane fade" id="tab-product-ucafe">
                                                <h5 class="mb-3">
                                                   <img src="../../asset/img/logo-ucafe.png" width="100%" height="auto" style="max-width: 8rem;" alt="">
                                                </h5>
                                                <p class="text-justify small mb-3">
                                                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum obcaecati accusantium iusto deserunt ad non sint dignissimos a dicta numquam, expedita et fugiat doloremque, qui nulla maxime suscipit! Perspiciatis, ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laudantium iste magni facere repellendus nemo obcaecati quasi! Voluptatibus obcaecati unde in sed doloribus accusamus eius aliquam! Ullam eligendi quod labore?
                                                </p>
                                                <script src="layout/menu-thumbnail.js"></script>
                                             </div><!-- end tab pane -->
                                             <div class="tab-pane fade" id="tab-product-rs">
                                                <h5 class="mb-3">
                                                   <img src="../../asset/img/logo-rasa-sayang.png" width="100%" height="auto" style="max-width: 6rem;" alt="">
                                                </h5>
                                                <p class="text-justify small mb-3">
                                                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum obcaecati accusantium iusto deserunt ad non sint dignissimos a dicta numquam, expedita et fugiat doloremque, qui nulla maxime suscipit! Perspiciatis, ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laudantium iste magni facere repellendus nemo obcaecati quasi! Voluptatibus obcaecati unde in sed doloribus accusamus eius aliquam! Ullam eligendi quod labore?
                                                </p>
                                                <script src="layout/menu-thumbnail.js"></script>
                                             </div><!-- end tab pane -->
                                             <div class="tab-pane fade" id="tab-product-tb">
                                                <h5 class="mb-3">
                                                   <img src="../../asset/img/logo-tugu-buaya.png" width="100%" height="auto" style="max-width: 8rem;" alt="">
                                                </h5>
                                                <p class="text-justify small mb-3">
                                                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum obcaecati accusantium iusto deserunt ad non sint dignissimos a dicta numquam, expedita et fugiat doloremque, qui nulla maxime suscipit! Perspiciatis, ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laudantium iste magni facere repellendus nemo obcaecati quasi! Voluptatibus obcaecati unde in sed doloribus accusamus eius aliquam! Ullam eligendi quod labore?
                                                </p>
                                                <script src="layout/menu-thumbnail.js"></script>
                                             </div><!-- end tab pane -->
                                             <div class="tab-pane fade" id="tab-product-ue">
                                                <h5 class="mb-3">
                                                   <img src="../../asset/img/logo-uang-emas.png" width="100%" height="auto" style="max-width: 6rem;" alt="">
                                                </h5>
                                                <p class="text-justify small mb-3">
                                                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum obcaecati accusantium iusto deserunt ad non sint dignissimos a dicta numquam, expedita et fugiat doloremque, qui nulla maxime suscipit! Perspiciatis, ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laudantium iste magni facere repellendus nemo obcaecati quasi! Voluptatibus obcaecati unde in sed doloribus accusamus eius aliquam! Ullam eligendi quod labore?
                                                </p>
                                                <script src="layout/menu-thumbnail.js"></script>
                                             </div><!-- end tab pane -->
                                             <div class="tab-pane fade" id="tab-product-jaheku">
                                                <h5 class="mb-3">
                                                   <img src="../../asset/img/logo-jaheku.png" width="100%" height="auto" style="max-width: 6rem;" alt="">
                                                </h5>
                                                <p class="text-justify small mb-3">
                                                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum obcaecati accusantium iusto deserunt ad non sint dignissimos a dicta numquam, expedita et fugiat doloremque, qui nulla maxime suscipit! Perspiciatis, ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laudantium iste magni facere repellendus nemo obcaecati quasi! Voluptatibus obcaecati unde in sed doloribus accusamus eius aliquam! Ullam eligendi quod labore?
                                                </p>
                                                <script src="layout/menu-thumbnail.js"></script>
                                             </div><!-- end tab pane -->
                                             <div class="tab-pane fade" id="tab-product-brochoco">
                                                <h5 class="mb-3">
                                                   <img src="../../asset/img/logo-brochoco.png" width="100%" height="auto" style="max-width: 6rem;" alt="">
                                                </h5>
                                                <p class="text-justify small mb-3">
                                                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum obcaecati accusantium iusto deserunt ad non sint dignissimos a dicta numquam, expedita et fugiat doloremque, qui nulla maxime suscipit! Perspiciatis, ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laudantium iste magni facere repellendus nemo obcaecati quasi! Voluptatibus obcaecati unde in sed doloribus accusamus eius aliquam! Ullam eligendi quod labore?
                                                </p>
                                                <script src="layout/menu-thumbnail.js"></script>
                                             </div><!-- end tab pane -->
                                             <div class="tab-pane fade" id="tab-product-intirasa">
                                                <h5 class="mb-3">
                                                   <img src="../../asset/img/logo-intirasa.png" width="100%" height="auto" style="max-width: 8rem;" alt="">
                                                </h5>
                                                <p class="text-justify small mb-3">
                                                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum obcaecati accusantium iusto deserunt ad non sint dignissimos a dicta numquam, expedita et fugiat doloremque, qui nulla maxime suscipit! Perspiciatis, ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laudantium iste magni facere repellendus nemo obcaecati quasi! Voluptatibus obcaecati unde in sed doloribus accusamus eius aliquam! Ullam eligendi quod labore?
                                                </p>
                                                <script src="layout/menu-thumbnail.js"></script>
                                             </div><!-- end tab pane -->
                                          </div><!-- end tab content -->
                                       </div><!-- end col -->
                                    </div><!-- end row -->
                                 </div><!-- end tab pane product consumen -->
                                 <div class="tab-pane fade" id="tab-product-foodservice">
                                    <div class="row tab-row gx-lg-5">
                                       <div class="col tab-col">
                                          <nav class="nav nav-pills" role="tablist">
                                             <a href="#" class="nav-link" id="nav-product-coffee">
                                                <span data-bs-toggle="pill" data-bs-target="#tab-product-coffee">
                                                   kopi
                                                </span>
                                             </a>
                                             <a href="#" class="nav-link" id="nav-product-creamer">
                                                <span data-bs-toggle="pill" data-bs-target="#tab-product-creamer">
                                                   krimer
                                                </span>
                                             </a>
                                             <a href="#" class="nav-link" id="nav-product-tea">
                                                <span data-bs-toggle="pill" data-bs-target="#tab-product-tea">
                                                   teh
                                                </span>
                                             </a>
                                             <a href="#" class="nav-link" id="nav-product-ginger">
                                                <span data-bs-toggle="pill" data-bs-target="#tab-product-ginger">
                                                   jahe
                                                </span>
                                             </a>
                                             <a href="#" class="nav-link" id="nav-product-chocolate">
                                                <span data-bs-toggle="pill" data-bs-target="#tab-product-chocolate">
                                                   cokealat
                                                </span>
                                             </a>
                                             <a href="#" class="nav-link" id="nav-product-sugar">
                                                <span data-bs-toggle="pill" data-bs-target="#tab-product-sugar">
                                                   gula
                                                </span>
                                             </a>
                                          </nav><!-- end nav pills -->
                                       </div><!-- end col -->
                                       <div class="col tab-col">
                                          <div class="tab-content">
                                             <div class="tab-pane fade" id="tab-product-coffee">
                                                <h5 class="fs-4 mb-3">
                                                   <b class="fw-medium">Coffee</b>
                                                </h5>
                                                <p class="text-justify small mb-3">
                                                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum obcaecati accusantium iusto deserunt ad non sint dignissimos a dicta numquam, expedita et fugiat doloremque, qui nulla maxime suscipit! Perspiciatis, ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laudantium iste magni facere repellendus nemo obcaecati quasi! Voluptatibus obcaecati unde in sed doloribus accusamus eius aliquam! Ullam eligendi quod labore?
                                                </p>
                                                <script src="layout/menu-thumbnail.js"></script>
                                             </div><!-- end tab pane -->
                                             <div class="tab-pane fade" id="tab-product-creamer">
                                                <h5 class="fs-4 mb-3">
                                                   <b class="fw-medium">Krimer</b>
                                                </h5>
                                                <p class="text-justify small mb-3">
                                                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum obcaecati accusantium iusto deserunt ad non sint dignissimos a dicta numquam, expedita et fugiat doloremque, qui nulla maxime suscipit! Perspiciatis, ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laudantium iste magni facere repellendus nemo obcaecati quasi! Voluptatibus obcaecati unde in sed doloribus accusamus eius aliquam! Ullam eligendi quod labore?
                                                </p>
                                                <script src="layout/menu-thumbnail.js"></script>
                                             </div><!-- end tab pane -->
                                             <div class="tab-pane fade" id="tab-product-tea">
                                                <h5 class="fs-4 mb-3">
                                                   <b class="fw-medium">Teh</b>
                                                </h5>
                                                <p class="text-justify small mb-3">
                                                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum obcaecati accusantium iusto deserunt ad non sint dignissimos a dicta numquam, expedita et fugiat doloremque, qui nulla maxime suscipit! Perspiciatis, ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laudantium iste magni facere repellendus nemo obcaecati quasi! Voluptatibus obcaecati unde in sed doloribus accusamus eius aliquam! Ullam eligendi quod labore?
                                                </p>
                                                <script src="layout/menu-thumbnail.js"></script>
                                             </div><!-- end tab pane -->
                                             <div class="tab-pane fade" id="tab-product-ginger">
                                                <h5 class="fs-4 mb-3">
                                                   <b class="fw-medium">Jahe</b>
                                                </h5>
                                                <p class="text-justify small mb-3">
                                                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum obcaecati accusantium iusto deserunt ad non sint dignissimos a dicta numquam, expedita et fugiat doloremque, qui nulla maxime suscipit! Perspiciatis, ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laudantium iste magni facere repellendus nemo obcaecati quasi! Voluptatibus obcaecati unde in sed doloribus accusamus eius aliquam! Ullam eligendi quod labore?
                                                </p>
                                                <script src="layout/menu-thumbnail.js"></script>
                                             </div><!-- end tab pane -->
                                             <div class="tab-pane fade" id="tab-product-chocolate">
                                                <h5 class="fs-4 mb-3">
                                                   <b class="fw-medium">Cokelat</b>
                                                </h5>
                                                <p class="text-justify small mb-3">
                                                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum obcaecati accusantium iusto deserunt ad non sint dignissimos a dicta numquam, expedita et fugiat doloremque, qui nulla maxime suscipit! Perspiciatis, ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laudantium iste magni facere repellendus nemo obcaecati quasi! Voluptatibus obcaecati unde in sed doloribus accusamus eius aliquam! Ullam eligendi quod labore?
                                                </p>
                                                <script src="layout/menu-thumbnail.js"></script>
                                             </div><!-- end tab pane -->
                                             <div class="tab-pane fade" id="tab-product-sugar">
                                                <h5 class="fs-4 mb-3">
                                                   <b class="fw-medium">Gula</b>
                                                </h5>
                                                <p class="text-justify small mb-3">
                                                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum obcaecati accusantium iusto deserunt ad non sint dignissimos a dicta numquam, expedita et fugiat doloremque, qui nulla maxime suscipit! Perspiciatis, ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laudantium iste magni facere repellendus nemo obcaecati quasi! Voluptatibus obcaecati unde in sed doloribus accusamus eius aliquam! Ullam eligendi quod labore?
                                                </p>
                                                <script src="layout/menu-thumbnail.js"></script>
                                             </div><!-- end tab pane -->
                                          </div><!-- end tab content -->
                                       </div><!-- end col -->
                                    </div><!-- end row -->
                                 </div><!-- end tab pane product foodservices -->
                                 <div class="tab-pane fade" id="tab-product-machines">
                                    <div class="row tab-row gx-lg-5">
                                       <div class="col tab-col">
                                          <nav class="nav nav-pills" role="tablist">
                                             <a href="#" class="nav-link" id="nav-machines-coffee">
                                                <span data-bs-toggle="pill" data-bs-target="#tab-machines-coffee">
                                                   mesin kopi
                                                </span>
                                             </a>
                                             <a href="#" class="nav-link" id="nav-machines-disspenser">
                                                <span data-bs-toggle="pill" data-bs-target="#tab-machines-disspensers">
                                                   dispenser minuman
                                                </span>
                                             </a>
                                             <a href="#" class="nav-link" id="nav-machines-accessories">
                                                <span data-bs-toggle="pill" data-bs-target="#tab-machines-accessories">
                                                   aksesoris
                                                </span>
                                             </a>
                                             <a href="#" class="nav-link" id="nav-machines-guarante">
                                                <span data-bs-toggle="pill" data-bs-target="#tab-machines-warranty">
                                                   pendaftaran garansi
                                                </span>
                                             </a>
                                          </nav><!-- end nav pills -->
                                       </div><!-- end col -->
                                       <div class="col tab-col">
                                          <div class="tab-content">
                                             <div class="tab-pane fade" id="tab-machines-coffee">
                                                <div class="row tab-row gx-lg-5">
                                                   <div class="col tab-col">
                                                      <nav class="nav nav-pills" role="tablist">
                                                         <a href="#" class="nav-link" id="nav-machines-full-automatic">
                                                            <span data-bs-toggle="pill" data-bs-target="#tab-machines-full-automatic">
                                                               mesin kopi full otomatis
                                                            </span>
                                                         </a>
                                                         <a href="#" class="nav-link" id="nav-machines-semi-automatic">
                                                            <span data-bs-toggle="pill" data-bs-target="#tab-machines-semi-automatic">
                                                               mesin kopi semi automatic
                                                            </span>
                                                         </a>
                                                         <a href="#" class="nav-link" id="nav-machines-brew">
                                                            <span data-bs-toggle="pill" data-bs-target="#tab-machines-brew">
                                                               sistem seduh kopi
                                                            </span>
                                                         </a>
                                                         <a href="#" class="nav-link" id="nav-machines-capsules">
                                                            <span data-bs-toggle="pill" data-bs-target="#tab-machines-capsules">
                                                               mesin kapsul kopi
                                                            </span>
                                                         </a>
                                                         <a href="#" class="nav-link" id="nav-machines-grinder">
                                                            <span data-bs-toggle="pill" data-bs-target="#tab-machines-grinder">
                                                               penggiling
                                                            </span>
                                                         </a>
                                                      </nav><!-- end nav pills -->
                                                   </div><!-- end col -->
                                                   <div class="col tab-col">
                                                      <div class="tab-content">
                                                         <div class="tab-pane fade" id="tab-machines-full-automatic">
                                                            <h5 class="fs-4 mb-3">
                                                               <b class="fw-medium">Mesin Kopi Full Otomatis</b>
                                                            </h5>
                                                            <p class="text-justify small">
                                                               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum obcaecati accusantium iusto deserunt ad non sint dignissimos a dicta numquam, expedita et fugiat doloremque, qui nulla maxime suscipit! Perspiciatis, ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laudantium iste magni facere repellendus nemo obcaecati quasi! Voluptatibus obcaecati unde in sed doloribus accusamus eius aliquam! Ullam eligendi quod labore?
                                                            </p>
                                                         </div><!-- end tab pane -->
                                                         <div class="tab-pane fade" id="tab-machines-semi-automatic">
                                                            <h5 class="fs-4 mb-3">
                                                               <b class="fw-medium">Mesin Kopi Semi Otomatis</b>
                                                            </h5>
                                                            <p class="text-justify small">
                                                               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum obcaecati accusantium iusto deserunt ad non sint dignissimos a dicta numquam, expedita et fugiat doloremque, qui nulla maxime suscipit! Perspiciatis, ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laudantium iste magni facere repellendus nemo obcaecati quasi! Voluptatibus obcaecati unde in sed doloribus accusamus eius aliquam! Ullam eligendi quod labore?
                                                            </p>
                                                         </div><!-- end tab pane -->
                                                         <div class="tab-pane fade" id="tab-machines-brew">
                                                            <h5 class="fs-4 mb-3">
                                                               <b class="fw-medium">Sistem Seduh Kopi</b>
                                                            </h5>
                                                            <p class="text-justify small">
                                                               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum obcaecati accusantium iusto deserunt ad non sint dignissimos a dicta numquam, expedita et fugiat doloremque, qui nulla maxime suscipit! Perspiciatis, ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laudantium iste magni facere repellendus nemo obcaecati quasi! Voluptatibus obcaecati unde in sed doloribus accusamus eius aliquam! Ullam eligendi quod labore?
                                                            </p>
                                                         </div><!-- end tab pane -->
                                                         <div class="tab-pane fade" id="tab-machines-capsules">
                                                            <h5 class="fs-4 mb-3">
                                                               <b class="fw-medium">Mesin Kapsul Kopi</b>
                                                            </h5>
                                                            <p class="text-justify small">
                                                               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum obcaecati accusantium iusto deserunt ad non sint dignissimos a dicta numquam, expedita et fugiat doloremque, qui nulla maxime suscipit! Perspiciatis, ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laudantium iste magni facere repellendus nemo obcaecati quasi! Voluptatibus obcaecati unde in sed doloribus accusamus eius aliquam! Ullam eligendi quod labore?
                                                            </p>
                                                         </div><!-- end tab pane -->
                                                         <div class="tab-pane fade" id="tab-machines-grinder">
                                                            <h5 class="fs-4 mb-3">
                                                               <b class="fw-medium">Penggiling</b>
                                                            </h5>
                                                            <p class="text-justify small">
                                                               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum obcaecati accusantium iusto deserunt ad non sint dignissimos a dicta numquam, expedita et fugiat doloremque, qui nulla maxime suscipit! Perspiciatis, ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laudantium iste magni facere repellendus nemo obcaecati quasi! Voluptatibus obcaecati unde in sed doloribus accusamus eius aliquam! Ullam eligendi quod labore?
                                                            </p>
                                                         </div><!-- end tab pane -->
                                                      </div><!-- end tab content -->
                                                   </div><!-- end col -->
                                                </div><!-- end row -->
                                             </div><!-- end tab pane -->
                                             <div class="tab-pane fade" id="tab-machines-disspensers">
                                                <div class="row tab-row gx-lg-5">
                                                   <div class="col tab-col">
                                                      <nav class="nav nav-pills" role="tablist">
                                                         <a href="#" class="nav-link" id="nav-machines-contoh">
                                                            <span data-bs-toggle="pill" data-bs-target="#tab-machines-instant">
                                                               mesin minuman instan
                                                            </span>
                                                         </a>
                                                         <a href="#" class="nav-link" id="nav-machines-contoh">
                                                            <span data-bs-toggle="pill" data-bs-target="#tab-machines-cold">
                                                               dispenser minuman dingin
                                                            </span>
                                                         </a>
                                                      </nav><!-- end nav pills -->
                                                   </div><!-- end col -->
                                                   <div class="col tab-col">
                                                      <div class="tab-content">
                                                         <div class="tab-pane fade" id="tab-machines-instant">
                                                            <h5 class="fs-4 mb-3">
                                                               <b class="fw-medium">Mesin Minuman Instan</b>
                                                            </h5>
                                                            <p class="text-justify small">
                                                               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum obcaecati accusantium iusto deserunt ad non sint dignissimos a dicta numquam, expedita et fugiat doloremque, qui nulla maxime suscipit! Perspiciatis, ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laudantium iste magni facere repellendus nemo obcaecati quasi! Voluptatibus obcaecati unde in sed doloribus accusamus eius aliquam! Ullam eligendi quod labore?
                                                            </p>
                                                         </div><!-- end tab pane -->
                                                         <div class="tab-pane fade" id="tab-machines-cold">
                                                            <h5 class="fs-4 mb-3">
                                                               <b class="fw-medium">Dispenser Minuman Dingin</b>
                                                            </h5>
                                                            <p class="text-justify small">
                                                               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum obcaecati accusantium iusto deserunt ad non sint dignissimos a dicta numquam, expedita et fugiat doloremque, qui nulla maxime suscipit! Perspiciatis, ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laudantium iste magni facere repellendus nemo obcaecati quasi! Voluptatibus obcaecati unde in sed doloribus accusamus eius aliquam! Ullam eligendi quod labore?
                                                            </p>
                                                         </div><!-- end tab pane -->
                                                      </div><!-- end tab content -->
                                                   </div><!-- end col -->
                                                </div><!-- end row -->
                                             </div><!-- end tab pane -->
                                             <div class="tab-pane fade" id="tab-machines-accessories">
                                                <div class="row tab-row gx-lg-5">
                                                   <div class="col tab-col">
                                                      <nav class="nav nav-pills" role="tablist">
                                                         <a href="#" class="nav-link" id="nav-machines-contoh">
                                                            <span data-bs-toggle="pill" data-bs-target="#tab-machines-milkchurning">
                                                               mesin pengaduk susu
                                                            </span>
                                                         </a>
                                                         <a href="#" class="nav-link" id="nav-machines-contoh">
                                                            <span data-bs-toggle="pill" data-bs-target="#tab-machines-kettle">
                                                               teko elektrik
                                                            </span>
                                                         </a>
                                                         <a href="#" class="nav-link" id="nav-machines-contoh">
                                                            <span data-bs-toggle="pill" data-bs-target="#tab-machines-fp">
                                                               french press
                                                            </span>
                                                         </a>
                                                         <a href="#" class="nav-link" id="nav-machines-contoh">
                                                            <span data-bs-toggle="pill" data-bs-target="#tab-machines-mokapot">
                                                               moka pot
                                                            </span>
                                                         </a>
                                                         <a href="#" class="nav-link" id="nav-machines-contoh">
                                                            <span data-bs-toggle="pill" data-bs-target="#tab-machines-glass">
                                                               gelas berlapis dua
                                                            </span>
                                                         </a>
                                                      </nav><!-- end nav pills -->
                                                   </div><!-- end col -->
                                                   <div class="col tab-col">
                                                      <div class="tab-content">
                                                         <div class="tab-pane fade" id="tab-machines-milkchurning">
                                                            <h5 class="fs-4 mb-3">
                                                               <b class="fw-medium">Mesin Pengaduk Susu</b>
                                                            </h5>
                                                            <p class="text-justify small">
                                                               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum obcaecati accusantium iusto deserunt ad non sint dignissimos a dicta numquam, expedita et fugiat doloremque, qui nulla maxime suscipit! Perspiciatis, ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laudantium iste magni facere repellendus nemo obcaecati quasi! Voluptatibus obcaecati unde in sed doloribus accusamus eius aliquam! Ullam eligendi quod labore?
                                                            </p>
                                                         </div><!-- end tab pane -->
                                                         <div class="tab-pane fade" id="tab-machines-kettle">
                                                            <h5 class="fs-4 mb-3">
                                                               <b class="fw-medium">Teko Elektrik</b>
                                                            </h5>
                                                            <p class="text-justify small">
                                                               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum obcaecati accusantium iusto deserunt ad non sint dignissimos a dicta numquam, expedita et fugiat doloremque, qui nulla maxime suscipit! Perspiciatis, ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laudantium iste magni facere repellendus nemo obcaecati quasi! Voluptatibus obcaecati unde in sed doloribus accusamus eius aliquam! Ullam eligendi quod labore?
                                                            </p>
                                                         </div><!-- end tab pane -->
                                                         <div class="tab-pane fade" id="tab-machines-fp">
                                                            <h5 class="fs-4 mb-3">
                                                               <b class="fw-medium">French Press</b>
                                                            </h5>
                                                            <p class="text-justify small">
                                                               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum obcaecati accusantium iusto deserunt ad non sint dignissimos a dicta numquam, expedita et fugiat doloremque, qui nulla maxime suscipit! Perspiciatis, ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laudantium iste magni facere repellendus nemo obcaecati quasi! Voluptatibus obcaecati unde in sed doloribus accusamus eius aliquam! Ullam eligendi quod labore?
                                                            </p>
                                                         </div><!-- end tab pane -->
                                                         <div class="tab-pane fade" id="tab-machines-mokapot">
                                                            <h5 class="fs-4 mb-3">
                                                               <b class="fw-medium">Moka Pot</b>
                                                            </h5>
                                                            <p class="text-justify small">
                                                               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum obcaecati accusantium iusto deserunt ad non sint dignissimos a dicta numquam, expedita et fugiat doloremque, qui nulla maxime suscipit! Perspiciatis, ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laudantium iste magni facere repellendus nemo obcaecati quasi! Voluptatibus obcaecati unde in sed doloribus accusamus eius aliquam! Ullam eligendi quod labore?
                                                            </p>
                                                         </div><!-- end tab pane -->
                                                         <div class="tab-pane fade" id="tab-machines-glass">
                                                            <h5 class="fs-4 mb-3">
                                                               <b class="fw-medium">Gelas Berlapis Dua</b>
                                                            </h5>
                                                            <p class="text-justify small">
                                                               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum obcaecati accusantium iusto deserunt ad non sint dignissimos a dicta numquam, expedita et fugiat doloremque, qui nulla maxime suscipit! Perspiciatis, ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laudantium iste magni facere repellendus nemo obcaecati quasi! Voluptatibus obcaecati unde in sed doloribus accusamus eius aliquam! Ullam eligendi quod labore?
                                                            </p>
                                                         </div><!-- end tab pane -->
                                                      </div><!-- end tab content -->
                                                   </div><!-- end col -->
                                                </div><!-- end row -->
                                             </div><!-- end tab pane -->
                                          </div><!-- end tab content -->
                                       </div><!-- end col -->
                                    </div><!-- end row -->
                                 </div><!-- end tab pane product machines -->
                              </div><!-- end tab content -->
                           </div><!-- end col -->
                        </div><!-- end row -->
                     </div><!-- end container -->
                  </div>
               </li><!-- end nav product -->
               <li class="nav-item menu-item">
                  <a href="#" class="nav-link menu-link" id="nav-businesses">
                     <span>bisnis</span>
                  </a>
               </li><!-- end nav businesses -->
               <li class="nav-item menu-item dropdown">
                  <a href="#" data-bs-toggle="dropdown" data-bs-target="#drop-store" class="nav-link menu-link" id="nav-store">
                     <span>toko</span>
                  </a>
                  <div class="dropdown-menu border-0 m-0" id="drop-store">
                     <div class="container-lg">
                        <header class="d-none d-lg-block">
                           <h5 class="fs-5 opacity-50">
                              <b class="fw-medium">
                                 Toko Resmi
                              </b>
                           </h5>
                           <hr class="my-3">
                        </header>
                        <div class="row tab-row gx-lg-5">
                           <div class="col tab-col">
                              <nav class="nav nav-pills" role="tablist">
                                 <a href="#" class="nav-link" id="nav-ecomm">
                                    <span data-bs-toggle="pill" data-bs-target="#tab-ecomm">
                                       E-Commerce
                                    </span>
                                 </a>
                                 <a href="#" class="nav-link" id="nav-market">
                                    <span data-bs-toggle="pill" data-bs-target="#tab-market">
                                       marketplace
                                    </span>
                                 </a>
                              </nav><!-- end nav pills -->
                           </div><!-- end col -->
                           <div class="col tab-col">
                              <div class="tab-content">
                                 <div class="tab-pane fade" id="tab-ecomm">
                                    <div class="row tab-row gx-lg-5">
                                       <div class="col tab-col">
                                          <nav class="nav nav-pills" role="tablist">
                                             <a href="#" class="nav-link" id="nav-ecomm-supresso">
                                                <span data-bs-toggle="pill" data-bs-target="#tab-ecomm-supresso">
                                                   supresso
                                                </span>
                                             </a>
                                             <a href="#" class="nav-link text-uppercase" id="nav-ecomm-indracostore">
                                                <span data-bs-toggle="pill" data-bs-target="#tab-ecomm-indracostore">
                                                   indracostore
                                                </span>
                                             </a>
                                          </nav><!-- end nav pills -->
                                       </div><!-- end col -->
                                       <div class="col tab-col">
                                          <div class="tab-content">
                                             <div class="tab-pane fade" id="tab-ecomm-supresso">
                                                <img src="../../asset/img/logo-supresso-typograph.png" width="100%" height="auto" style="max-width: 14rem;" alt="">
                                             </div><!-- end tab pane ecomm supresso -->
                                             <div class="tab-pane fade" id="tab-ecomm-indracostore">
                                                <img src="../../asset/img/logo-indracostore.png" width="100%" height="auto" style="max-width: 14rem;" alt="">
                                             </div><!-- end tab pane ecomm indracostore -->
                                          </div><!-- end tab content -->
                                       </div><!-- end col -->
                                    </div><!-- end row -->
                                 </div><!-- end tab pane ecomm -->
                                 <div class="tab-pane fade" id="tab-market">
                                    <div class="row tab-row gx-lg-5">
                                       <div class="col tab-col">
                                          <nav class="nav nav-pills" role="tablist">
                                             <a href="#" class="nav-link" id="nav-market-tokopedia">
                                                <span data-bs-toggle="pill" data-bs-target="#tab-market-tokopedia">
                                                   tokopedia
                                                </span>
                                             </a>
                                             <a href="#" class="nav-link" id="nav-market-shopee">
                                                <span data-bs-toggle="pill" data-bs-target="#tab-market-shopee">
                                                   shopee
                                                </span>
                                             </a>
                                             <a href="#" class="nav-link" id="nav-market-lazada">
                                                <span data-bs-toggle="pill" data-bs-target="#tab-market-lazada">
                                                   lazada
                                                </span>
                                             </a>
                                             <a href="#" class="nav-link" id="nav-market-blibli">
                                                <span data-bs-toggle="pill" data-bs-target="#tab-market-blibli">
                                                   blibli
                                                </span>
                                             </a>
                                             <a href="#" class="nav-link" id="nav-market-tiktokshop">
                                                <span data-bs-toggle="pill" data-bs-target="#tab-market-tiktokshop">
                                                   tikTok shop
                                                </span>
                                             </a>
                                          </nav><!-- end nav pills -->
                                       </div><!-- end col -->
                                       <div class="col tab-col">
                                          <div class="tab-content">
                                             <div class="tab-pane fade" id="tab-market-tokopedia">
                                                <img src="../../asset/img/logo-tokopedia.png" width="100%" height="auto" style="max-width: 14rem;" alt="">
                                             </div><!-- end tab pane -->
                                             <div class="tab-pane fade" id="tab-market-shopee">
                                                <img src="../../asset/img/logo-shopee.png" width="100%" height="auto" style="max-width: 14rem;" alt="">
                                             </div><!-- end tab pane -->
                                             <div class="tab-pane fade" id="tab-market-lazada">
                                                <img src="../../asset/img/logo-lazada.png" width="100%" height="auto" style="max-width: 14rem;" alt="">
                                             </div><!-- end tab pane -->
                                             <div class="tab-pane fade" id="tab-market-blibli">
                                                <img src="../../asset/img/logo-blibli.png" width="100%" height="auto" style="max-width: 14rem;" alt="">
                                             </div><!-- end tab pane -->
                                             <div class="tab-pane fade" id="tab-market-tiktokshop">
                                                <img src="../../asset/img/logo-tiktok.png" width="100%" height="auto" style="max-width: 14rem;" alt="">
                                             </div><!-- end tab pane -->
                                          </div><!-- end tab content -->
                                       </div><!-- end col -->
                                    </div><!-- end row -->
                                 </div><!-- end tab pane market -->
                              </div><!-- end tab content -->
                           </div><!-- end col -->
                        </div><!-- end row -->
                     </div><!-- end container -->
                  </div>
               </li><!-- end nav about -->
               <li class="nav-item menu-item">
                  <a href="#" class="nav-link menu-link" id="nav-news">
                     <span>berita & acara</span>
                  </a>
               </li><!-- end nav news -->
               <li class="nav-item menu-item">
                  <a href="#" class="nav-link menu-link" id="nav-brochure">
                     <span>brochure</span>
                  </a>
               </li><!-- end nav brochure -->
               <li class="nav-item menu-item">
                  <a href="#" class="nav-link menu-link" id="nav-career">
                     <span>karir</span>
                  </a>
               </li><!-- end nav career -->
               <li class="nav-item menu-item">
                  <a href="#" class="nav-link menu-link" id="nav-contact">
                     <span>kontak</span>
                  </a>
               </li><!-- end nav contact -->
            </ul>
         </div><!-- end menu body -->
         <div class="offcanvas-header menu-footer d-block py-lg-0 flex-lg-grow-0">
            <div class="d-lg-none">
               <script src="layout/nav-submenu.js"></script>
            </div>
            <div class="d-none d-lg-block">
               <script src="layout/toggler-search.js"></script>
            </div>
         </div><!-- end menu footer -->
      </div><!-- end menu -->
   </div><!-- end navbar bottom -->
</nav><!-- end navbar -->`)