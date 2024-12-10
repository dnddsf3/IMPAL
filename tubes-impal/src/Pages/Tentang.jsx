import React from "react";
import "../../src/index.css";

function Tentang() {
  return (
    <div className="Tentang">
      <header className="header">
        <nav className="navbar">
          <ul>
            <li>Beranda</li>
            <li className="active">Tentang</li>
            <li>Asrama</li>
            <li>Kontak</li>
          </ul>
          <div className="search-profile">
            <input type="text" placeholder="Search" />
            <span className="profile-icon"></span>
          </div>
        </nav>
        <div className="header-banner">
          <h1>Tentang Kami</h1>
        </div>
      </header>

      <main>
        <section className="about-section">
          <h2>Tentang Asrama</h2>
          <p>
            Tahun 2012 adalah tahun diresmikannya program Asrama 1 (satu) tahun bagi mahasiswa baru Universitas Telkom. Pada awalnya, Asrama Universitas Telkom dikelola langsung oleh Yayasan Pendidikan Telkom (YPT). YPT fokus untuk menangani Asrama Putra yang bertempat di Apartemen Buah Batu Park dan menunjuk PT. Citra Sukapura Megah (CSM) untuk menangani Asrama Putri yang bertempat di lingkungan kampus Universitas Telkom. Kemudian dilakukan kerjasama dengan PT. Menara Karsa Mandiri (MKM) sebagai pengelola bangunan Asrama Putra dan PT. Graha Sarana Duta (GSD) sebagai pengelola 5 Gedung Asrama Putri.
          </p>
          <div className="dormitory-images">
            <img src="/dormitory-image1.jpg" alt="Asrama 1" />
            <img src="/dormitory-image2.jpg" alt="Asrama 2" />
          </div>
        </section>

        <section className="capacity-section">
          <h2>Kapasitas Asrama Mahasiswa</h2>
          <div className="capacity-cards">
            <div className="card">
              <h3>940</h3>
              <p>Kamar Asrama Putra</p>
            </div>
            <div className="card">
              <h3>3.760</h3>
              <p>Kapasitas (Orang)</p>
            </div>
            <div className="card">
              <h3>752</h3>
              <p>Kamar Asrama Putri</p>
            </div>
            <div className="card">
              <h3>3.008</h3>
              <p>Kapasitas (Orang)</p>
            </div>
          </div>
        </section>

        <section className="students-pillars">
          <h2>Students Management Pillar</h2>
          <p>
          Universitas Telkom mempersiapkan strategi untuk dapat melaksanakan pengelolaan mahasiswa, peningkatan kualitas mahasiswa, peningkatan soft skill mahasiswa, dan pembangunan karakter mahasiswa secara baik. Hal ini dapat terwujud karena Universitas Telkom memiliki beberapa faktor penunjang seperti bangunan dan fasilitas yang memadai serta karyawan dan staf yang mumpuni di bidangnya.
         </p>
          <ul>
            <li>Pengenalan Kehidupan Kampus Mahasiswa Baru (PKKMB) — “Know about University”</li>
            <li>Asrama Telkom University (Framework “ASAS”) - "Build the Character"</li>
            <li>Unit Kegiatan Mahasiswa (UKM) – “Practice about Organization"</li>
            <li>Kompetisi dan Kegiatan yang bermanfaat (Valuable Activity) – “Show the Quality”</li>
          </ul>
        </section>

        <section className="logo-section">
          <h2>Identitas</h2>
          <img src="/logo-students-dormitory.png" alt="Logo Asrama" />
          <p>
           Logo Pusat Asrama Mahasiswa berupa desain gedung yang bertuliskan Students Dormitory dengan logo monogram Telkom 
              University. Logo berwarna merah dan abu-abu sesuai dengan warna utama Telkom University.
          </p>
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

export default Tentang;