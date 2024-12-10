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
            <img src="/asrama1.jpg" alt="Asrama 1" />
            <img src="/asrama2.jpg" alt="Asrama 2" />
            <img src="/asrama3.jpg" alt="Asrama 3" />
            <img src="/asrama4.jpg" alt="Asrama 4" />
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
      <footer className="bg-red-700 text-white mt-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img 
              src="https://mf-chan.com/tel-u-logo/lib/Tel-U/primer-utama.png" 
              alt="Telkom University" 
              className="h-12 mb-4 brightness-0 invert"
              />
              <div className="flex space-x-4">
                <a href="https://instagram.com/telkomuniversity" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
                  <img src="/instagram-icon.svg" alt="Instagram" className="w-6 h-6" />
                </a>
                <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
                  <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-6 h-6" />
                </a>
                <a href="https://youtube.com/@TelkomUniversity" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
                  <img src="/youtube-icon.svg" alt="YouTube" className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">LINK CEPAT</h3>
              <ul className="space-y-2">
                <li><a href="/" className="hover:text-gray-200">Beranda</a></li>
                <li><a href="/tentang" className="hover:text-gray-200">Tentang</a></li>
                <li><a href="/asrama/informasi-asrama" className="hover:text-gray-200">Informasi Asrama</a></li>
                <li><a href="/asrama/berita" className="hover:text-gray-200">Berita</a></li>
                <li><a href="/asrama/tokenpay" className="hover:text-gray-200">TokenPay</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">LINK PENTING</h3>
              <ul className="space-y-2">
                <li><a href="https://telkomuniversity.ac.id" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">Telkom University</a></li>
                <li><a href="https://igracias.telkomuniversity.ac.id" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">iGracias</a></li>
                <li><a href="https://lms.telkomuniversity.ac.id" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">CeLOE</a></li>
                <li><a href="/kontak/faq" className="hover:text-gray-200">FAQ</a></li>
                <li><a href="/kontak/masalah" className="hover:text-gray-200">Laporan Masalah</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">KONTAK</h3>
              <div className="space-y-2">
                <p>Senin - Jumat: 08.00 - 16.00 WIB</p>
                <p>asrama@telkomuniversity.ac.id</p>
                <p>WhatsApp: +62 812-3456-7890</p>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Alamat:</h4>
                  <p>Gedung Asrama Putra/Putri</p>
                  <p>Telkom University</p>
                  <p>Jl. Telekomunikasi No. 1</p>
                  <p>Bandung, Jawa Barat 40257</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Telkom University. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Galeri;
