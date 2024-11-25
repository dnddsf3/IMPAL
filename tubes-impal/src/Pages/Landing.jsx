import React, { useState } from "react";
import "../../src/index.css";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const [isAsramaDropdownOpen, setIsAsramaDropdownOpen] = useState(false);
  const [isKontakDropdownOpen, setIsKontakDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleAsramaDropdown = () => {
    setIsAsramaDropdownOpen(!isAsramaDropdownOpen);
    setIsKontakDropdownOpen(false); // Close other dropdown
  };
  
  const toggleKontakDropdown = () => {
    setIsKontakDropdownOpen(!isKontakDropdownOpen);
    setIsAsramaDropdownOpen(false); // Close other dropdown
  };
  

  return (
    <div className="landing-page">
      <header className="header fixed top-0 left-0 right-0 flex items-center justify-between px-8 py-4 bg-white shadow-md z-50">
        <img src="https://mf-chan.com/tel-u-logo/lib/Tel-U/primer-utama.png" alt="Telkom University" className="logo h-12" />
        <nav className="navbar flex justify-center space-x-10 flex-grow">
          <button onClick={() => navigate("/")} className="text-[#B41515] hover:text-[#B41515] border-b-2 border-[#B41515] pb-1">Beranda</button>
          <button onClick={() => navigate("/tentang")} className="text-black hover:text-[#B41515]">Tentang</button>

          {/* dropdown Asrama */}
          <div className="relative">
            <button
              onClick={toggleAsramaDropdown}
              className="text-black hover:text-[#B41515] flex items-center"
            >
              Asrama
              <span className="ml-2">▼</span>
            </button>

            {/* dropdown */}
            {isAsramaDropdownOpen && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 right-0 w-48 z-10">
                <button
                  onClick={() => navigate("/asrama/asrama")}
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                >
                  Informasi Asrama
                </button>
                <button
                  onClick={() => navigate("/asrama/berita")}
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                >
                  Berita
                </button>
                <button
                  onClick={() => navigate("/asrama/galeri")}
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                >
                  Galeri
                </button>
                <button
                  onClick={() => navigate("/asrama/tokenpay")}
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                >
                  TokenPay
                </button>
              </div>
            )}
          </div>

          {/* dropdown Kontak */}
          <div className="relative">
            <button
              onClick={toggleKontakDropdown}
              className="text-black hover:text-[#B41515] flex items-center"
            >
              Kontak
              <span className="ml-2">▼</span>
            </button>

            {/* dropdown */}
            {isKontakDropdownOpen && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 right-0 w-48 z-10">
                <button
                  onClick={() => navigate("/kontak/hubungi")}
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                >
                  Hubungi
                </button>
                <button
                  onClick={() => navigate("/kontak/masalah")}
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                >
                  Laporan Masalah
                </button>
                <button
                  onClick={() => navigate("/kontak/faq")}
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                >
                  FAQ
                </button>
              </div>
            )}
          </div>
          
        </nav>

        <div className="header-icons flex space-x-4">
          {/*<span className="search-icon text-2xl">🔍</span>*/}
          <img 
            src="public/user.png" 
            alt="User Profile" 
            className="profile-icon w-8 h-8 rounded-full cursor-pointer"
            onClick={() => navigate("/profile")} 
          />
        </div>

      </header>

      <section className="hero text-center py-12 bg-gray-200 mt-20">
        {/*<img src="dormitory.jpg" alt="Dormitory" className="hero-image mx-auto w-3/4 md:w-1/2" />*/}
        <h1 className="text-3xl font-bold mt-6">TELKOM UNIVERSITY DORMITORY</h1>
      </section>

      <section className="intro py-12 px-4 text-center">
        <h2 className="text-2xl font-bold text-[#B41515]">ASRAMA TELKOM UNIVERSITY</h2>
        <div className="flex items-center justify-center mt-4 space-x-8">
          <img 
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDauO-C1vdx6SLqHBm9sH-XscdkXiyZ_O_JJelpF3QHweEFtt7leMgJcVoGE49TYgPilpGUhDM31bCba9VPnW_uN0LRnkZiANqs1CPB15uYwNGoAymhvwvMhSZA-SBz2JYdsNA9GKC8X1EfpuLj8CUmsSikpkoIvy3R3BnAnGEsXpHFKNbkBldvzzCHvU/s16000/Check%20in%20Asrama%20Telkom%20University%20Bandung%20(3).jpg" 
            alt="Asrama Telkom University" 
            className="w-1/4 h-auto rounded-lg" 
          />
          <p className="text-black w-2/3 text-left">
          Asrama Telkom University memiliki letak yang sangat strategis karena dekat  dengan gedung kuliah umum (Gd. Tokong Nanas 10 lantai). Asrama ini  menjadi salah satu sarana kampus yang dibangun untuk tempat tinggal  Mahasiswa/i baru pada 1 tahun pertama masa perkuliahan di Telkom  University sehingga para orang tua tidak perlu khawatir meninggalkan  putra dan putri untuk melanjutkan studinya. Luas keseluruhan asrama …  hektar yang terdiri dari 8 gedung asrama putri dan 10 gedung asrama  putra. Setiap gedung asrama memiliki kakak asrama yang biasa disebut  sebagai Senior Residents serta Helpdesk di setiap  lantai dasar gedung sehingga kenyamanan dan keamanan akan tetap terjaga. 
          </p>
        </div>
        <div className="info-cards flex flex-wrap justify-center mt-8 space-x-4">
          <div className="card bg-white shadow-md p-4 rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <h3 className="font-semibold text-[#B41515]">Bangunan Asrama</h3>
            <p className="text-black">Bangunan Asrama Mahasiswa Telkom University terdiri dari 8 Gedung Asrama Putri dan 10 Gedung Asrama Putra.</p>
          </div>
          <div className="card bg-white shadow-md p-4 rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <h3 className="font-semibold text-[#B41515]">Kamar Asrama</h3>
            <p className="text-black">Kamar Asrama Mahasiswa Telkom University terdiri dari lebih dari 7500 kamar.</p>
          </div>
          <div className="card bg-white shadow-md p-4 rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <h3 className="font-semibold text-[#B41515]">Fasilitas Asrama</h3>
            <p className="text-black">Keamanan 24 jam, ruang diskusi di setiap lantai, titik akses (wifi gratis), aula asrama, dll.</p>
          </div>
        </div>
      </section>

      <section className="news py-12 px-4">
      <h2 className="text-2xl font-bold text-center text-[#B41515]">BERITA</h2>
      <p className="text-4x1 mt-4 font-medium text-center text-[#444444]">Berita terbaru tentang aktivitas, program khusus, dan kegiatan yang mempererat kebersamaan di asrama.</p>
      <div className="news-cards flex flex-wrap justify-center mt-8 space-x-4">
        <div className="news-card bg-white shadow-md p-4 rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <h3 className="font-semibold text-black">Welcoming Day</h3>
          <p className="text-black mt-5">Pada 5 Oktober 2024, asrama menyelenggarakan *Welcoming Day* bagi penghuni baru. Acara ini meliputi tur asrama, perkenalan antar-penghuni, dan permainan kelompok untuk membangun kebersamaan. Semoga penghuni baru merasa nyaman dan cepat beradaptasi di lingkungan asrama!</p>
          <button
            className="mt-4 bg-[#B41515] text-white px-4 py-2 rounded hover:bg-red-700"
            onClick={() => navigate("/berita/welcoming-day")}
          >
            Baca Selengkapnya
          </button>
        </div>
        <div className="news-card bg-white shadow-md p-4 rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <h3 className="font-semibold text-black">Lomba Kebersihan Antar-Kamar</h3>
          <p className="text-black mt-5">Dalam rangka menjaga kebersihan dan kenyamanan bersama, lomba kebersihan antar-kamar diselenggarakan pada 18 Oktober 2024. Setiap kamar dinilai berdasarkan kerapian, kebersihan, dan dekorasi kreatif. Pemenang akan mendapatkan hadiah menarik!</p>
          <button className="btn bg-[#B41515] text-white mt-11">Baca Selengkapnya</button>
        </div>
        <div className="news-card bg-white shadow-md p-4 rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <h3 className="font-semibold text-black">Earth Hour</h3>
          <p className="text-black mt-5">Pada 25 Maret 2024, asrama turut serta dalam Earth Hour dengan mematikan lampu selama satu jam mulai pukul 20.30. Acara ini juga diisi diskusi singkat tentang lingkungan untuk meningkatkan kesadaran penghuni tentang pentingnya hemat energi. Terima kasih atas partisipasinya!</p>
          <button className="btn bg-[#B41515] text-white mt-11">Baca Selengkapnya</button>
        </div>
      </div>
    </section>


      <section className="activities py-12 px-4">
        <h2 className="text-2xl font-bold text-center text-[#B41515]">KEGIATAN ASRAMA</h2>
        <p className="text-4x1 mt-4 font-medium text-center text-[#444444]">Kegiatan asrama untuk meningkatkan kebersamaan, keterampilan, dan pengalaman berharga bagi seluruh penghuni.</p>
        <div className="activity-list flex flex-col items-center mt-8 space-y-4">
          <div className="activity bg-white-100 p-4 rounded-lg shadow-md w-full max-w-lg">
            <h3 className="font-semibold text-[#B41515]">Dorm Sport and Fun Games</h3>
            <p className="font-medium text-[#444444]">Kerja tim dan penyegaran</p>
            <p className="text-[#B41515]">08:00 - 16:00</p>
          </div>
          <div className="activity bg-white-100 p-4 rounded-lg shadow-md w-full max-w-lg">
            <h3 className="font-semibold text-[#B41515]">Dorm Percussion</h3>
            <p className="font-medium text-[#444444]">Belajar tentang harmonis dan kerja sama</p>
            <p className="text-[#B41515]">09:15</p>
          </div>
          <div className="activity bg-white-100 p-4 rounded-lg shadow-md w-full max-w-lg">
            <h3 className="font-semibold text-[#B41515]">Dorm Academic Week</h3>
            <p className="font-medium text-[#444444]">Talk Show tentang akademik</p>
            <p className="text-[#B41515]">10:00 - 12:00</p>
          </div>
        </div>
      </section>

      <section className="map-section py-28 px-8 relative mt-28 flex items-center justify-between">
        <div className="map-container flex-shrink-0">
          <img 
            src="https://hamsa.co.id/wp-content/uploads/2024/01/image_2024-02-07_213323604.png" 
            alt="Map" 
            className="map w-96 h-auto rounded-lg"
          />
        </div>
        
        <div className="text-container ml-10">
          <h2 className="text-2xl text-[#B41515] font-bold">DORMITORY TELKOM UNIVERSITY</h2>
          <p className="text-black mt-5 text-[#868686]">Alamat: </p>
          <p className="text-black mt-2 text-[#868686]">Bandung Technoplex</p>
          <p className="text-black mt-1 text-[#868686]">Jl. Telekomunikasi Terusan Buah Batu, Kabupaten Bandung, Provinsi Jawa Barat, Indonesia</p>
        </div>
      </section>

      <footer className="footer bg-[#B41515] text-white py-12 px-4 text-center">
        <img src="https://mf-chan.com/tel-u-logo/lib/Tel-U/primer-utama.png" alt="Telkom University" className="footer-logo mx-auto mb-4 h-12" />
        <div className="footer-links space-x-4">
          <a href="#link1" className="hover:underline">Link</a>
          <a href="#link2" className="hover:underline">Link</a>
          <a href="#contact" className="hover:underline">Kontak</a>
        </div>
        <div className="contact-info mt-6">
          <p>Senin - Jumat: 08.00 - 16.00 WIB</p>
          <p>asrama@telkomuniversity.ac.id</p>
          <p>Telkom University Students Dormitory Bandung Technoplex</p>
          <p>Jl. Telekomunikasi Terusan Buah Batu, Kabupaten Bandung, Provinsi Jawa Barat, Indonesia</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
