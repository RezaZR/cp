import React, { Component } from "react";

class Main extends Component {
    
    render() {
        return (
            <main>
                <section className="landing" id="landing">
                    <div className="container d-flex justify-content-center" style={{ height: "100%" }}>
                        <div className="row align-items-center">
                            <div className="col-md-6 hidden-sm-down">
                                <div className="tako-logo">
                                    <img src="assets/images/tako.png" alt="Tako Logo" />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className="landing-title">
                                    <p>TAKO,<br /> ADMINISTRATOR TERBAIK<br /> UNTUK <i>BISNIS ONLINE</i><br /> ANDA
                                    </p>
                                </div>
                                <div className="landing-caption">
                                    <p>Karena menjawab semua chat pembeli satu persatu, lama merespon pesanan yang masuk, dan kesulitan mengelola pesanan bukan merupakan bagian dari trend 2018.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="specialities" id="specialities">
                    <div className="container">
                        <div className="specialities-margin">
                            <div className="row align-items-center">
                                <div className="col-12 col-md-3">
                                    <div className="col-md-10 offset-md-1">
                                        <div className="specialities-content d-flex justify-content-center">
                                            <div className="d-flex">
                                                <div className="icon-div">
                                                    <span className="lnr lnr-smile"></span>
                                                </div>
                                                <div className="desc-div">
                                                    <h3 className="red-text">Amazingly</h3>
                                                    <p>Smart</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-3">
                                    <div className="col-md-10 offset-md-1">
                                        <div className="specialities-content d-flex justify-content-center">
                                            <div className="d-flex">
                                                <div className="icon-div">
                                                    <span className="lnr lnr-users"></span>
                                                </div>
                                                <div className="desc-div">
                                                    <h3 className="red-text">Faster</h3>
                                                    <p>Response</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-3">
                                    <div className="col-md-10 offset-md-1">
                                        <div className="specialities-content d-flex justify-content-center">
                                            <div className="d-flex">
                                                <div className="icon-div">
                                                    <span className="lnr lnr-pointer-up"></span>
                                                </div>
                                                <div className="desc-div">
                                                    <h3 className="red-text">Easier</h3>
                                                    <p>To Use</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-3">
                                    <div className="col-md-10 offset-md-1">
                                        <div className="specialities-content d-flex justify-content-center">
                                            <div className="d-flex">
                                                <div className="icon-div">
                                                    <span className="lnr lnr-laptop"></span>
                                                </div>
                                                <div className="desc-div">
                                                    <h3 className="red-text">24/7</h3>
                                                    <p>Non-Stop Working</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about" id="about">
                    <div className="container">
                        <div className="about-title">
                            <h2 className="margin-bottom-md">Tentang Talkabot</h2>
                            <img src="assets/images/hr-talkabot.png" alt="Talkabot Horizontal Line" />
                        </div>
                        <div className="about-content">
                            <div className="row">
                                <div className="col-sm-12 col-md-4">
                                    <div className="hidden-sm-down">
                                        <img src="assets/images/dummy-1.png" alt="" />
                                    </div>
                                    <div className="about-caption">
                                        <h3 className="red-text margin-top-lg">Tako</h3>
                                        <p>Tako akan menjadi <i>digital assistant</i> terbaik yang pernah Anda pekerjakan! Anda cukup duduk dan menikmati hidup Anda dan Tako akan mengurus satu per satu pesanan dengan pelanggan Anda!</p>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4">
                                    <div className="hidden-sm-down">
                                        <img src="assets/images/dummy-2.png" alt="" />
                                    </div>
                                    <div className="about-caption">
                                        <h3 className="red-text margin-top-lg">Admin Panel</h3>
                                        <p>Anda tidak perlu lagi membaca dan membalas ratusan chat yang masuk, cukup buka website kami pada komputer Anda dan pesanan yang <i>valid</i> siap untuk segera di-<i>packing</i> dan dikirim.</p>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4">
                                    <div className="hidden-sm-down">
                                        <img src="assets/images/dummy-3.png" alt="" />
                                    </div>
                                    <div className="about-caption">
                                        <h3 className="red-text margin-top-lg">Berbagai Platform Chat</h3>
                                        <p>Tako dapat menjawab semua pertanyaan pada berbagai macam platform (Line, Facebook, dll).</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row hidden-md-down">
                                <div className="document-row margin-top-xl">
                                    <div className="col-lg-9 offset-lg-7">
                                        <div className="row">
                                            <div className="d-flex">
                                                <p className="margin-right-md">Untuk lebih jelasnya, silahkan unduh proposal kami dengan cara menekan tombol di samping</p>
                                                <button className="btn btn-red"><a href="doc/proposal-client-(INDO).pdf" download="proposal-client.pdf"><span>Unduh Proposal</span></a></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row hidden-lg-up">
                                <div className="document-row-sm margin-top-xl">
                                    <div className="col-sm-12 col-md-12">
                                        <div className="row">
                                            <p>Untuk lebih jelasnya, silahkan unduh proposal kami dengan cara menekan tombol di bawah</p>
                                            <button className="btn btn-red"><a href="doc/proposal-client-(INDO).pdf" download="proposal-client.pdf"><span>Unduh Proposal</span></a></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="who" id="who">
                    <div className="container">
                        <div className="content content-margin hidden-md-down">
                            <h2>Siapa Tako Sebenarnya?</h2>
                            <img className="margin-x-md" src="assets/images/hr-talkabot.png" alt="Talkabot Horizontal Line" />
                            <p>Pernahkah Anda kewalahan menangani pertanyaan-pertanyaan yang bersifat redundan? <br /> Pernah kehilangan pelanggan karena slow response? ingin menambah tenaga kerja admin tapi tidak punya biaya? <br /> Atau sulit mencari pekerja yang
                                jujur?
                            </p>
                            <div className="flow-img margin-top-lg">
                                <img src="assets/images/flowfix.png" alt="Flow Tako" />
                            </div>
                        </div>
                        <div className="content content-margin hidden-lg-up">
                            <h2>Siapa Tako Sebenarnya?</h2>
                            <img className="margin-x-md" src="assets/images/hr-talkabot.png" alt="Talkabot Horizontal Line" />
                            <p>Pernahkah Anda kewalahan menangani pertanyaan-pertanyaan yang bersifat redundan? Pernah kehilangan pelanggan karena slow response? ingin menambah tenaga kerja admin tapi tidak punya biaya? Atau sulit mencari pekerja yang jujur?
                            </p>
                            <div className="flow-img margin-top-lg">
                                <img src="assets/images/flowfix.png" alt="Flow Tako" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="skillset" id="skillset">
                    <div className="container">
                        <div className="content content-margin">
                            <div className="hidden-md-down">
                                <h2>Skill Set Tako</h2>
                                <img className="margin-x-md" src="assets/images/hr-talkabot.png" alt="Talkabot Horizontal Line" />
                                <p>Kami selalu mencoba untuk mengembangkan Tako menjadi lebih baik lagi. <br /> Apabila Anda merasa ada skill set yang diperlukan pada online shop Anda namun belum tersedia di sini, <br /> <span style={{ display: "inline" }}>silahkan kirimkan masukan Anda melalui <a href="#contact" className="red-text">form ini</a>.</span> 
                                </p> 
                            </div>
                            <div className="hidden-lg-up">
                                <h2>Skill Set Tako</h2>
                                <img className="margin-x-md" src="assets/images/hr-talkabot.png" alt="Talkabot Horizontal Line" />
                                <p>Kami selalu mencoba untuk mengembangkan Tako menjadi lebih baik lagi. Apabila Anda merasa ada skill set yang diperlukan pada online shop Anda namun belum tersedia di sini, silahkan kirimkan masukan Anda melalui <a href="#contact" className="red-text">form ini</a>.
                                </p> 
                            </div>
                            <div className="row margin-top-xl">
                                <div className="col-sm-12 col-md-6 margin-bottom-md">
                                    <div className="content">
                                        <div className="invisible-card">
                                            <div className="round-icon">
                                                <span className="lnr lnr-book"></span>
                                            </div>
                                            <h5>Detail Produk</h5>
                                            <p>Pembeli dapat menanyakan detail dari produk yang Anda jual seperti warna, ukuran, dan juga stok dari barang tersebut.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 margin-bottom-md">
                                    <div className="content">
                                        <div className="invisible-card">
                                            <div className="round-icon">
                                                <span className="lnr lnr-sort-alpha-asc"></span>
                                            </div>
                                            <h5>List Produk</h5>
                                            <p>Pembeli dapat mengetahui list dari semua produk yang Anda jual.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 margin-bottom-md">
                                    <div className="content">
                                        <div className="invisible-card">
                                            <div className="round-icon">
                                                <span className="lnr lnr-database"></span>
                                            </div>
                                            <h5>Order</h5>
                                            <p>Pembeli dapat melakukan pemesanan dengan mudah dan cepat.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 margin-bottom-md">
                                    <div className="content">
                                        <div className="invisible-card">
                                            <div className="round-icon">
                                                <span className="lnr lnr-paperclip"></span>
                                            </div>
                                            <h5>Bukti Pembayaran</h5>
                                            <p>Pembeli dapat mengirimkan bukti pembayaran dan Anda dapat melihat bukti pembayaran tersebut untuk kemudian diperiksa.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 offset-md-3">
                                    <div className="content">
                                        <div className="invisible-card">
                                            <div className="round-icon">
                                                <span className="lnr lnr-bus"></span>
                                            </div>
                                            <h5>Kurir</h5>
                                            <p>Pembeli tidak hanya dapat mengetahui ongkos kirim yang harus ia bayarkan untuk setiap kota di Indonesia, namun dapat melacak keberadaan barang yang sedang dalam proses pengiriman.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="screenshot" id="screenshot">
                    <div className="container">
                        <div className="content-margin">
                            <div className="content">
                                <h2>Screenshot Percakapan</h2>
                                <img className="margin-x-md" src="assets/images/hr-talkabot.png" alt="Talkabot Horizontal Line" />
                                <p>Proses transaksi akan menjadi jauh lebih mudah dan praktis untuk Anda maupun calon pembeli Anda.
                                </p>
                            </div>
                            <div className="row margin-top-xl">
                                <div className="col-sm-12 col-md-12">
                                    <div className="owl-carousel owl-theme owl-loaded">
                                        <div className="owl-item">
                                            <img className="main-img" id="main-img-1" src="assets/images/screen1.jpg" alt="Screenshot 1" />
                                        </div>
                                        <div className="owl-item">
                                            <img className="main-img" id="main-img-2" src="assets/images/screen2.jpg" alt="Screenshot 2" />
                                        </div>
                                        <div className="owl-item">
                                            <img className="main-img" id="main-img-3" src="assets/images/screen3.jpg" alt="Screenshot 3" />
                                        </div>
                                        <div className="owl-item">
                                            <img className="main-img" id="main-img-4" src="assets/images/screen4.jpg" alt="Screenshot 4" />
                                        </div>
                                        <div className="owl-item">
                                            <img className="main-img" id="main-img-5" src="assets/images/screen5.jpg" alt="Screenshot 5" />
                                        </div>
                                        <div className="owl-item">
                                            <img className="main-img" id="main-img-6" src="assets/images/screen6.jpg" alt="Screenshot 6" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="price" id="price">
                    <div className="container">
                        <div className="content-margin">
                            <div className="content hidden-md-down">
                                <h2>Daftar Harga</h2>
                                <img className="margin-x-md" src="assets/images/hr-talkabot.png" alt="Talkabot Horizontal Line" />
                                <p><b>IT'S ALWAYS GONNA BE FREE!</b> <br /> Feedback dari Anda menjadi fokus kami saat ini.
                                </p>
                            </div>
                            <div className="content hidden-lg-up">
                                <h2>Daftar Harga</h2>
                                <img className="margin-x-md" src="assets/images/hr-talkabot.png" alt="Talkabot Horizontal Line" />
                                <p style={{ textAlign: "center" }}><b>IT'S ALWAYS GONNA BE FREE!</b> <br /> Feedback dari Anda menjadi fokus kami saat ini.
                                </p>
                            </div>
                            <div className="row margin-top-xl">
                                <div className="col-sm-3 col-md-4 offset-sm-3 offset-md-4">
                                    <div className="price-card margin-top-xl padding-x-md">
                                        <h4 className="margin-top-sm margin-bottom-md">FREE!</h4>
                                        <div className="price-number">
                                            <h2>Rp. 0.00<small>/bulan</small></h2>
                                        </div>
                                        <ul>
                                            <li><b>Skill Set:</b></li>
                                            <li><span className="lnr lnr-checkmark-circle margin-right-xs"></span>Detail Produk</li>
                                            <li><span className="lnr lnr-checkmark-circle margin-right-xs"></span>List Produk</li>
                                            <li><span className="lnr lnr-checkmark-circle margin-right-xs"></span>Order</li>
                                            <li><span className="lnr lnr-checkmark-circle margin-right-xs"></span>Bukti Pembayaran</li>
                                            <li><span className="lnr lnr-checkmark-circle margin-right-xs"></span>Ongkos Kirim</li>
                                            <li><span className="lnr lnr-checkmark-circle margin-right-xs"></span>24/7 Administrator</li>
                                            <li><span className="lnr lnr-checkmark-circle margin-right-xs"></span>Website Admin Panel</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="registration" id="registration">
                    <div className="container">
                        <div className="content-margin">
                            <div className="content hidden-sm-down">
                                <h2 className="white-text">Mulai Registrasi dan Pekerjakan Tako Sebagai Administrator Anda!</h2>
                                <img className="margin-x-md" src="assets/images/hr-talkabot.png" alt="Talkabot Horizontal Line" />
                                <p className="white-text">Silahkan isi form berikut ini.</p>
                            </div>
                            <div className="content hidden-md-up">
                                <h2 className="white-text" style={{ fontSize: "25px" }}>Mulai Registrasi dan Pekerjakan Tako Sebagai Administrator Anda!</h2>
                                <img className="margin-x-md" src="assets/images/hr-talkabot.png" alt="Talkabot Horizontal Line" />
                                <p className="white-text" style={{ textAlign: "center" }}>Silahkan isi form berikut ini.</p>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 col-md-6 offset-md-3">
                                    <form action="" method="POST">
                                        <div className="field">
                                            <input type="text" name="namadepan" id="namadepan" placeholder="ex. Kenny" required />
                                            <label htmlFor="namadepan">Nama Depan</label>
                                        </div>
                                        <div className="field">
                                            <input type="text" name="namabelakang" id="namabelakang" placeholder="ex. Lattimore" required />
                                            <label htmlFor="namabelakang">Nama Belakang</label>
                                        </div>
                                        <div className="field">
                                            <input type="text" name="telepon" id="telepon" placeholder="ex. 081242940291" required />
                                            <label htmlFor="telepon">Nomor Telepon</label>
                                        </div>
                                        <div className="field">
                                            <input type="email" name="email" id="email" placeholder="ex. kennylat@gmail.com" required />
                                            <label htmlFor="email">Alamat Email</label>
                                        </div>
                                        <div className="field">
                                            <input type="text" name="namatoko" id="namatoko" placeholder="ex. Toko Tako" required />
                                            <label htmlFor="namatoko">Nama Online Shop</label>
                                        </div>
                                        <div className="field">
                                            <input type="text" name="lokasitoko" id="lokasitoko" placeholder="ex. Jl. Ciumbuleuit No. 94, Hegarmanah, Cidadap, Kota Bandung, Jawa Barat 40141" />
                                            <label htmlFor="lokasitoko">Lokasi Online Shop</label>
                                        </div>
                                        <div className="field">
                                            <input type="text" name="info" id="info" placeholder="ex. teman" required />
                                            <label htmlFor="info">Informasi Diperoleh Dari</label>
                                        </div>
                                        <div className="field">
                                            <input type="text" name="jenisbarang" id="jenisbarang" placeholder="ex. baju, celana dan sepatu" required />
                                            <label htmlFor="jenisbarang">Jenis Barang yang Dijual</label>
                                        </div>
                                        <a className="btn-black-2 float-right" href=""><span>Registrasi!</span></a>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="contact" id="contact">
                    <div className="container">
                        <div className="content-margin last-margin">
                            <div className="content">
                                <h2 className="white-text">Terhubunglah dengan Kami!</h2>
                                <img className="margin-x-md" src="assets/images/hr-talkabot.png" alt="Talkabot Horizontal Line" />
                                <p className="white-text">Kami sangat senang untuk menerima berbagai masukan dari Anda! <br /> Bahkan kami sangat senang untuk menerima sekedar ucapan halo dari Anda :) <br /> <br /> Dengan mengisi form di bawah ini, Anda tidak akan berlangganan email apapun
                                    dari kami. Namun apabila Anda ingin berlangganan email dari kami untuk informasi seputar produk kami dan pembaharuan fitur, silahkan <a className="black-text" href="#newsletter" style={{ textDecoration: "underline"  }}>isi di bagian ini</a>.</p>
                            </div>
                            <div className="row margin-x-xl">
                                <div className="col-sm-12 col-md-6 offset-md-3">
                                    <form action="" method="POST">
                                        <div className="field-contact">
                                            <input type="text" name="namalengkap" id="namalengkap" placeholder="Masukkan Nama Lengkap Anda" required />
                                        </div>
                                        <div className="field-contact">
                                            <input type="text" name="telepon" id="telepon" placeholder="Masukkan Nomor Telepon Anda" required />
                                        </div>
                                        <div className="field-contact">
                                            <input type="email" name="email" id="email" placeholder="Masukkan Email Anda" required />
                                        </div>
                                        <div className="field-contact">
                                            <textarea name="pesan" id="pesan" placeholder="Tulis Pesan Anda" required></textarea>
                                        </div>
                                        <a className="btn-black-2 float-right" href=""><span>Kirim Pesan</span></a>
                                    </form>
                                </div>
                            </div>
                            <div className="footer hidden-md-down">
                                <div className="footer-card">
                                    <div className="row">
                                        <div className="footer-logo margin-bottom-xl">
                                            <a href="#"><img src="assets/images/footer-talkabot.png" alt="Talkabot Logo" /></a>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-4 col-md-4">
                                            <div className="col-md-12 offset-md-0">
                                                <div className="footer-info">
                                                    <span className="lnr lnr-location"></span>
                                                    <span className="footer-content margin-right-xs black-text"><a className="black-text" href="hello@talkabot.id">hello@talkabot.id</a></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 col-md-4">
                                            <div className="col-md-12 offset-md-0">
                                                <div className="footer-info">
                                                    <span className="lnr lnr-earth"></span>
                                                    <span className="footer-content margin-right-xs black-text"><a className="black-text" href="www.talkabot.id">www.talkabot.id</a></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 col-md-4">
                                            <div className="col-md-12 offset-md-0">
                                                <div className="footer-info">
                                                    <span className="lnr lnr-phone-handset margin-right-xs black-text"></span><span className="footer-content black-text">+62 857171 296 71</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="social">
                                            <div className="socmed">
                                                <a href="https://www.facebook.com/talkabot.id"><i className="fab fa-facebook-f"></i></a>
                                            </div>
                                            <div className="socmed">
                                                <a href="https://www.instagram.com/talkabot.id"><i className="fab fa-instagram"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="copyright">
                                        <p>Copyright © <b>Talkabot</b> 2017. All Rights Reserved</p>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-sm hidden-lg-up">
                                <div className="footer-card-sm">
                                    <div className="row">
                                        <div className="footer-logo margin-bottom-xl">
                                            <a href="#"><img src="assets/images/footer-talkabot.png" alt="Talkabot Logo" /></a>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12 col-md-4">
                                            <div className="footer-center">
                                                <div className="footer-info">
                                                    <span className="lnr lnr-location"></span>
                                                    <span className="footer-content margin-right-xs black-text"><a className="black-text" href="hello@talkabot.id">hello@talkabot.id</a></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4">
                                            <div className="footer-center">
                                                <div className="footer-info">
                                                    <span className="lnr lnr-earth"></span>
                                                    <span className="footer-content margin-right-xs black-text"><a className="black-text" href="www.talkabot.id">www.talkabot.id</a></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4">
                                            <div className="footer-center">
                                                <div className="footer-info">
                                                    <span className="lnr lnr-phone-handset margin-right-xs black-text"></span><span className="footer-content black-text">+62 857171 296 71</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="social">
                                            <div className="socmed">
                                                <a href="https://www.facebook.com/talkabot.id"><i className="fab fa-facebook-f"></i></a>
                                            </div>
                                            <div className="socmed">
                                                <a href="https://www.instagram.com/talkabot.id"><i className="fab fa-instagram"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="copyright">
                                        <p>Copyright © <b>Talkabot</b> 2017. All Rights Reserved</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default Main;