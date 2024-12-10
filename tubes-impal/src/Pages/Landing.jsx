import React, { useState } from "react";
import "../../src/dinda.css";
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
          <button onClick={() => navigate("/tentang")} className="text-[#1E1E1E] hover:text-[#B41515]">Tentang</button>

          {/* dropdown Asrama */}
          <div className="relative">
            <button
              onClick={toggleAsramaDropdown}
              className="text-[#1E1E1E] hover:text-[#B41515] flex items-center"
            >
              Asrama
              <span className="ml-2">▼</span>
            </button>

            {/* dropdown */}
            {isAsramaDropdownOpen && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 right-0 w-48 z-10">
                <button
                  onClick={() => navigate("/asrama/informasi-asrama")}
                  className="block px-4 py-2 text-[#1E1E1E] hover:bg-gray-200"
                >
                  Informasi Asrama
                </button>
                <button
                  onClick={() => navigate("/asrama/berita")}
                  className="block px-4 py-2 text-[#1E1E1E] hover:bg-gray-200"
                >
                  Berita
                </button>
                <button
                  onClick={() => navigate("/asrama/galeri")}
                  className="block px-4 py-2 text-[#1E1E1E] hover:bg-gray-200"
                >
                  Galeri
                </button>
                <button
                  onClick={() => navigate("/asrama/tokenpay")}
                  className="block px-4 py-2 text-[#1E1E1E] hover:bg-gray-200"
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
              className="text-[#1E1E1E] hover:text-[#B41515] flex items-center"
            >
              Kontak
              <span className="ml-2">▼</span>
            </button>

            {/* dropdown */}
            {isKontakDropdownOpen && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 right-0 w-48 z-10">
                <button
                  onClick={() => navigate("/kontak/hubungi")}
                  className="block px-4 py-2 text-[#1E1E1E] hover:bg-gray-200"
                >
                  Hubungi
                </button>
                <button
                  onClick={() => navigate("/kontak/masalah")}
                  className="block px-4 py-2 text-[#1E1E1E] hover:bg-gray-200"
                >
                  Laporan Masalah
                </button>
                <button
                  onClick={() => navigate("/kontak/faq")}
                  className="block px-4 py-2 text-[#1E1E1E] hover:bg-gray-200"
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
            src="/user.png" 
            alt="User Profile" 
            className="profile-icon w-8 h-8 cursor-pointer"
            onClick={() => navigate("/profile")} 
          />
        </div>

      </header>

      <section className="hero text-center">
        <div className="relative w-full h-[400px]">
          <img
            src="https://dormitory.telkomuniversity.ac.id/wp-content/uploads/2022/11/4-1536x1024.jpg"
            alt="Dormitory"
            className="hero-image w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-3xl font-bold text-white">TELKOM UNIVERSITY DORMITORY</h1>
          </div>
        </div>
      </section>

      <section className="intro py-12 px-4 text-center">
        <h2 className="text-2xl font-bold text-[#B41515]">ASRAMA TELKOM UNIVERSITY</h2>
        <div className="flex items-center justify-center mt-4 space-x-8 px-32 py-10">
          <img 
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDauO-C1vdx6SLqHBm9sH-XscdkXiyZ_O_JJelpF3QHweEFtt7leMgJcVoGE49TYgPilpGUhDM31bCba9VPnW_uN0LRnkZiANqs1CPB15uYwNGoAymhvwvMhSZA-SBz2JYdsNA9GKC8X1EfpuLj8CUmsSikpkoIvy3R3BnAnGEsXpHFKNbkBldvzzCHvU/s16000/Check%20in%20Asrama%20Telkom%20University%20Bandung%20(3).jpg" 
            alt="Asrama Telkom University" 
            className="w-1/3 h-auto rounded-lg" 
          />
          <p className="text-[#1E1E1E] w-2/3 text-justify">
          Asrama Telkom University memiliki letak yang sangat strategis karena dekat  dengan gedung kuliah umum (Gd. Tokong Nanas 10 lantai). Asrama ini  menjadi salah satu sarana kampus yang dibangun untuk tempat tinggal  Mahasiswa/i baru pada 1 tahun pertama masa perkuliahan di Telkom  University sehingga para orang tua tidak perlu khawatir meninggalkan  putra dan putri untuk melanjutkan studinya. Luas keseluruhan asrama …  hektar yang terdiri dari 8 gedung asrama putri dan 10 gedung asrama  putra. Setiap gedung asrama memiliki kakak asrama yang biasa disebut  sebagai Senior Residents serta Helpdesk di setiap  lantai dasar gedung sehingga kenyamanan dan keamanan akan tetap terjaga. 
          </p>
        </div>
        <div className="info-cards flex flex-wrap justify-center mt-8 space-x-4">
          <div className="card bg-[white] shadow-md p-4 rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <h3 className="font-semibold text-[#B41515]">Bangunan Asrama</h3>
            <p className="text-[#1E1E1E]">Bangunan Asrama Mahasiswa Telkom University terdiri dari 8 Gedung Asrama Putri dan 10 Gedung Asrama Putra.</p>
          </div>
          <div className="card bg-white shadow-md p-4 rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <h3 className="font-semibold text-[#B41515]">Kamar Asrama</h3>
            <p className="text-[#1E1E1E]">Kamar Asrama Mahasiswa Telkom University terdiri dari lebih dari 7500 kamar.</p>
          </div>
          <div className="card bg-white shadow-md p-4 rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <h3 className="font-semibold text-[#B41515]">Fasilitas Asrama</h3>
            <p className="text-[#1E1E1E]">Keamanan 24 jam, ruang diskusi di setiap lantai, titik akses (wifi gratis), aula asrama, dll.</p>
          </div>
        </div>
      </section>

      <section className="news py-12 px-4">
      <h2 className="text-2xl font-bold text-center text-[#B41515]">BERITA</h2>
      <p className="text-4x1 mt-4 font-medium text-center text-[#444444]">Berita terbaru tentang aktivitas, program khusus, dan kegiatan yang mempererat kebersamaan di asrama.</p>
      <div className="news-cards flex flex-wrap justify-center mt-8 space-x-4">
        <div className="news-card bg-white shadow-md p-4 rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <div class="berita">
            <img src="public/berita.jpg" alt="berita" className="rounded-lg mb-4"/>
          </div>
          <h3 className="font-semibold text-[#1E1E1E]">Welcoming Day</h3>
          <p className="text-[#1E1E1E] mt-5">Pada 5 Oktober 2024, asrama menyelenggarakan Welcoming Day bagi penghuni baru. Acara ini meliputi tur asrama, perkenalan antar-penghuni, dan permainan kelompok untuk membangun kebersamaan. Semoga penghuni baru merasa nyaman dan cepat beradaptasi di lingkungan asrama!</p>
          <button
            className="btn bg-[#B41515] text-white mt-10"
            onClick={() => navigate("/asrama/berita/welcoming-day")}
          >
            Baca Selengkapnya
          </button>
        </div>
        <div className="news-card bg-white shadow-md p-4 rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <div class="berita">
            <img src="public/berita.jpg" alt="berita" className="rounded-lg mb-4"/>
          </div>
          <h3 className="font-semibold text-[#1E1E1E]">Lomba Kebersihan Antar-Kamar</h3>
          <p className="text-[#1E1E1E] mt-5">Dalam rangka menjaga kebersihan dan kenyamanan bersama, lomba kebersihan antar-kamar diselenggarakan pada 18 Oktober 2024. Setiap kamar dinilai berdasarkan kerapian, kebersihan, dan dekorasi kreatif. Pemenang akan mendapatkan hadiah menarik!</p>
          <button className="btn bg-[#B41515] text-white mt-16">Baca Selengkapnya</button>
        </div>
        <div className="news-card bg-white shadow-md p-4 rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <div class="berita">
            <img src="public/berita.jpg" alt="berita" className="rounded-lg mb-4" />
          </div>
          <h3 className="font-semibold text-[#1E1E1E]">Earth Hour</h3>
          <p className="text-[#1E1E1E] mt-5">Pada 25 Maret 2024, asrama turut serta dalam Earth Hour dengan mematikan lampu selama satu jam mulai pukul 20.30. Acara ini juga diisi diskusi singkat tentang lingkungan untuk meningkatkan kesadaran penghuni tentang pentingnya hemat energi. Terima kasih atas partisipasinya!</p>
          <button className="btn bg-[#B41515] text-white mt-10">Baca Selengkapnya</button>
        </div>
      </div>
    </section>


    <section className="activities py-12 px-4">
      <h2 className="text-2xl font-bold text-center text-[#B41515]">KEGIATAN ASRAMA</h2>
      <p className="text-4x1 mt-4 font-medium text-center text-[#444444]">Kegiatan asrama untuk meningkatkan kebersamaan, keterampilan, dan pengalaman berharga bagi seluruh penghuni.</p>
      <div className="activity-list flex flex-col items-center mt-8 space-y-4">
        <div className="activity bg-white p-4 rounded-lg shadow-md w-full max-w-lg">
          <h3 className="font-semibold text-[#B41515]">Dorm Sport and Fun Games</h3>
          <p className="font-medium text-[#444444]">Kerja tim dan penyegaran</p>
          <p className="text-[#B41515]">08:00 - 16:00</p>
        </div>
        <div className="activity bg-white p-4 rounded-lg shadow-md w-full max-w-lg">
          <h3 className="font-semibold text-[#B41515]">Dorm Percussion</h3>
          <p className="font-medium text-[#444444]">Belajar tentang harmonis dan kerja sama</p>
          <p className="text-[#B41515]">09:15</p>
        </div>
        <div className="activity bg-white p-4 rounded-lg shadow-md w-full max-w-lg">
          <h3 className="font-semibold text-[#B41515]">Dorm Academic Week</h3>
          <p className="font-medium text-[#444444]">Talk Show tentang akademik</p>
          <p className="text-[#B41515]">10:00 - 12:00</p>
        </div>
      </div>
    </section>

    <section className="map-section py-28 px-48 relative flex items-center justify-between">
      <div className="map-container">
        <img 
          src="https://hamsa.co.id/wp-content/uploads/2024/01/image_2024-02-07_213323604.png" 
          alt="Map" 
          className="map w-96 h-auto rounded-lg border-4 border-gray-300"
        />
      </div>
      
      <div className="text-container ml-10">
        <h2 className="text-2xl text-[#B41515] font-bold">DORMITORY TELKOM UNIVERSITY</h2>
        <p className="text-[#1E1E1E] mt-5 text-[#868686]">Alamat: </p>
        <p className="text-[#1E1E1E] mt-2 text-[#868686]">Bandung Technoplex</p>
        <p className="text-[#1E1E1E] mt-1 text-[#868686]">Jl. Telekomunikasi Terusan Buah Batu, Kabupaten Bandung, Provinsi Jawa Barat, Indonesia</p>
      </div>
    </section>


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
};

export default Landing;
