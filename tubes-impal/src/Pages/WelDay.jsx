import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../src/index.css";

const WelDay = () => {
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
    <div className="welcoming-day bg-gray-100 min-h-screen flex flex-col items-center pt-24"> 
      <header className="header fixed top-0 left-0 right-0 flex items-center justify-between px-8 py-4 bg-white shadow-md z-50">
        <img
          src="https://mf-chan.com/tel-u-logo/lib/Tel-U/primer-utama.png"
          alt="Telkom University"
          className="logo h-12"
        />
        <nav className="navbar flex justify-center space-x-10 flex-grow">
          <button
            onClick={() => navigate("/")}
            className="text-[#B41515] hover:text-[#B41515] border-b-2 border-[#B41515] pb-1"
          >
            Beranda
          </button>
          <button
            onClick={() => navigate("/tentang")}
            className="text-[#1E1E1E] hover:text-[#B41515]"
          >
            Tentang
          </button>

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
                  onClick={() => navigate("/asrama/asrama")}
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
          <img
            src="public/user2.png"
            alt="User Profile"
            className="profile-icon w-8 h-8 rounded-full cursor-pointer"
            onClick={() => navigate("/profile")}
          />
        </div>
      </header>

      <div className="content bg-white shadow-md rounded-lg mt-8 w-11/12 max-w-4xl">
        <img
          src="https://via.placeholder.com/800x400"
          alt="Welcoming Day"
          className="rounded-t-lg w-full"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2 text-[#B41515]">Welcoming Day</h1>
          <p className="text-gray-500 mb-6">5 Oktober 2024</p>
          <p className="text-gray-700 leading-relaxed">
            Pada 5 Oktober 2024, asrama dengan penuh antusiasme mengadakan Welcoming Day untuk menyambut para penghuni baru. Acara ini dirancang khusus untuk membantu mereka merasa lebih nyaman dan cepat beradaptasi di lingkungan baru. Dimulai dengan tur keliling asrama, para penghuni diajak mengenal lebih dalam setiap fasilitas yang akan menunjang keseharian mereka, seperti ruang belajar, dapur bersama, ruang rekreasi, dan area olahraga. ...
          </p>
        </div>
      </div>

      <div className="comments-section bg-white shadow-md rounded-lg mt-8 mb-10 w-11/12 max-w-4xl p-6">
        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-500">Publisher | 6 Oktober 2024 | 0 Comment</p>
        </div>
        <textarea
          placeholder="Comment"
          className="w-full h-24 border rounded-lg p-4"
        ></textarea>
      </div>

      <footer className="footer bg-[#B41515] text-white py-12 px-4 text-center">
        <img
          src="https://mf-chan.com/tel-u-logo/lib/Tel-U/primer-utama.png"
          alt="Telkom University"
          className="footer-logo mx-auto mb-4 h-12"
        />
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

export default WelDay;
