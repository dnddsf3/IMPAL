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

export default Tentang;