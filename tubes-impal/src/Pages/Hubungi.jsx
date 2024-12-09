import React, { useState } from "react";
import "../../src/index.css";
import { useNavigate } from "react-router-dom";

const Hubungi = () => {
  const navigate = useNavigate();
  const [isAsramaDropdownOpen, setAsramaDropdownOpen] = useState(false);
  const [isKontakDropdownOpen, setKontakDropdownOpen] = useState(false);

  const toggleAsramaDropdown = () => setAsramaDropdownOpen(!isAsramaDropdownOpen);
  const toggleKontakDropdown = () => setKontakDropdownOpen(!isKontakDropdownOpen);

  return (
    <div className="hubungi-page">
      {/* Header */}
      <header className="header fixed top-0 left-0 right-0 flex items-center justify-between px-8 py-4 bg-white shadow-md z-50">
        <img
          src="https://mf-chan.com/tel-u-logo/lib/Tel-U/primer-utama.png"
          alt="Telkom University"
          className="logo h-12"
        />
        <nav className="navbar flex justify-center space-x-10 flex-grow">
          <button
            onClick={() => navigate("/")}
            className="text-[#1E1E1E] hover:text-[#B41515]"
          >
            Beranda
          </button>
          <button
            onClick={() => navigate("/tentang")}
            className="text-[#1E1E1E] hover:text-[#B41515]"
          >
            Tentang
          </button>

          {/* Dropdown Asrama */}
          <div className="relative">
            <button
              onClick={toggleAsramaDropdown}
              className="text-[#1E1E1E] hover:text-[#B41515] flex items-center"
            >
              Asrama
              <span className="ml-2">▼</span>
            </button>
            {isAsramaDropdownOpen && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 w-48 z-10">
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

          {/* Dropdown Kontak */}
          <div className="relative">
            <button
              onClick={toggleKontakDropdown}
              className="text-[#B41515] hover:text-[#B41515] border-b-2 border-[#B41515] pb-1"
            >
              Kontak
              <span className="ml-2">▼</span>
            </button>
            {isKontakDropdownOpen && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2 w-48 z-10">
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
            src="/user.png"
            alt="User Profile"
            className="profile-icon w-8 h-8 cursor-pointer"
            onClick={() => navigate("/profile")}
          />
        </div>
      </header>

      {/* Main Content */}
      <div className="main-content flex flex-wrap justify-between items-start px-10 mt-18 mb-32">
        <div className="contact-info w-2/3">
          <h1 className="text-2xl font-bold mb-4">Kontak Kami</h1>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vivamus lacinia odio vitae vestibulum vestibulum.
          </p>
          <div className="flex items-center gap-4 mb-4">
            <img
            src="/phone.png"
            alt="phone"
            className="profile-icon w-8 h-8 cursor-pointer"
            />
            <p>081378424242</p>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <img
              src="/mail.png"
              alt="mail"
              className="profile-icon w-8 h-8 cursor-pointer"
            />
            <p>MyDorm2024@telkomuniversity.ac.id</p>
          </div>
          <div className="flex items-center gap-4">
            <img
              src="/location.png"
              alt="location"
              className="profile-icon w-8 h-8 cursor-pointer"
            />
            <p>
              Jl. Telekomunikasi Terusan Buah Batu, Kabupaten Bandung, Provinsi
              Jawa Barat, Indonesia
            </p>
          </div>
        </div>
        <div className="image-placeholder bg-gray-200 border-4 border-[#B41515] rounded-lg flex justify-center items-center w-1/3">
          <span className="text-gray-400">[Gambar Placeholder]</span>
        </div>
      </div>

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
};

export default Hubungi;
