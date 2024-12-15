import React from "react";
import "../../src/index.css";

function Galeri() {
  return (
    <div className="galeri">
      {/* Header */}
      <header className="header">
        <nav className="navbar">
          <ul>
            <li>Beranda</li>
            <li>Tentang</li>
            <li className="active">Asrama</li>
            <ul className="dropdown">
              <li>Informasi Asrama</li>
              <li>Berita</li>
              <li>Galeri</li>
              <li>TokenPay</li>
            </ul>
            <li>Kontak</li>
          </ul>
          <div className="search-profile">
            <input type="text" placeholder="Search" />
            <span className="profile-icon"></span>
          </div>
        </nav>
        <div className="header-banner">
          <h1>GALLERY</h1>
        </div>
      </header>

      {/* Main Section */}
      <main>
        <section className="intro-section">
          <p>
            MyDorm menawarkan lingkungan asrama yang nyaman dan mendukung,
            dengan fasilitas lengkap untuk menunjang kehidupan mahasiswa. Dari
            kamar yang tertata dengan baik hingga ruang umum yang bisa digunakan
            untuk bersosialisasi, semua dirancang untuk menciptakan pengalaman
            tinggal yang optimal bagi penghuni.
          </p>
        </section>

        <section className="gallery-section">
          <div className="gallery-grid">
            <img src="/galeri3.png" alt="Asrama 1" />
            <img src="/galeri4.png" alt="Asrama 2" />
            <img src="/galeri5.png" alt="Asrama 3" />
            <img src="/galeri6.png" alt="Asrama 4" />
            <img src="/asrama5.jpg" alt="Asrama 5" />
            <img src="/asrama6.jpg" alt="Asrama 6" />
          </div>
          <div className="check-in-info">
            <p>
              Proses check-in MyDorm mempermudah mahasiswa baru dalam memulai
              kehidupan di asrama. Di awal kedatangan, mereka akan dipandu oleh
              senior residents atau kakak-kakak asrama yang siap memberikan
              informasi dan bimbingan mengenai fasilitas dan aturan asrama. Hal
              ini membantu menciptakan transisi yang nyaman bagi penghuni baru.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer bg-[#B41515] text-white py-12 px-4 text-center">
        <img
          src="https://mf-chan.com/tel-u-logo/lib/Tel-U/primer-utama.png"
          alt="Telkom University"
          className="footer-logo mx-auto mb-4 h-12"
        />
        <div className="footer-links ml-24 mr-24">
          <a href="#link1" className="hover:underline">Link</a>
          <a href="#link2" className="hover:underline">Link</a>        </div>
        <div className="contact-info">
          <div className="kontak font-bold">KONTAK</div>
          <p>Senin - Jumat: 08.00 - 16.00 WIB</p>
          <p>asrama@telkomuniversity.ac.id</p>
          <p>Telkom University Students Dormitory Bandung Technoplex</p>
          <p>Jl. Telekomunikasi Terusan Buah Batu, Kabupaten Bandung, Provinsi Jawa Barat, Indonesia</p>
        </div>
      </footer>
    </div>
  );
}

export default Galeri;
