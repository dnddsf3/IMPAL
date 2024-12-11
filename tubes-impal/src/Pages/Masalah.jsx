import React, { useState } from 'react';
import "../../src/index.css";
import { useNavigate } from "react-router-dom";

const Masalah = () => {
  const [fileName, setFileName] = useState('bukti_rusak.png');
  
  const navigate = useNavigate();
    const [isAsramaDropdownOpen, setAsramaDropdownOpen] = useState(false);
    const [isKontakDropdownOpen, setKontakDropdownOpen] = useState(false);
  
    const toggleAsramaDropdown = () => setAsramaDropdownOpen(!isAsramaDropdownOpen);
    const toggleKontakDropdown = () => setKontakDropdownOpen(!isKontakDropdownOpen);

  const handleFileChange = (event) => {
    setFileName(event.target.files[0].name);
  };

  return (
    <div className="laporan-masalah">
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
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center' }}>Laporkan Masalah</h1>
      <form>
        <div style={{ marginBottom: '20px' }}>
          <label>Nama Anda</label>
          <input type="text" name="nama" placeholder="Dinda D" style={{ width: '100%', padding: '10px', marginTop: '5px' }} />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label>Email</label>
          <input type="email" name="email" placeholder="dindes@student.telkomuniversity.ac.id" style={{ width: '100%', padding: '10px', marginTop: '5px' }} />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label>Nomor Telepon</label>
          <input type="text" name="telepon" placeholder="081238472538" style={{ width: '100%', padding: '10px', marginTop: '5px' }} />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label>Lokasi</label>
          <select name="lokasi" style={{ width: '100%', padding: '10px', marginTop: '5px' }}>
            <option value="Gedung A kamar 204">Gedung A kamar 204</option>
          </select>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label>Jenis Masalah</label>
          <select name="jenis_masalah" style={{ width: '100%', padding: '10px', marginTop: '5px' }}>
            <option value="Fasilitas rusak atau tidak memadai">Fasilitas rusak atau tidak memadai</option>
          </select>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label>Unggah Bukti</label>
          <div style={{ border: '1px solid #ddd', padding: '10px', marginTop: '5px', backgroundColor: '#f0f9f0', textAlign: 'center' }}>
            <input type="file" onChange={handleFileChange} style={{ display: 'none' }} id="fileUpload" />
            <label htmlFor="fileUpload" style={{ cursor: 'pointer', color: 'red', marginBottom: '10px' }}>Edit File</label>
            <p>{fileName}</p>
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label>Deskripsi</label>
          <textarea
            name="deskripsi"
            placeholder="Lemari rusak, ada yang patah"
            style={{ width: '100%', padding: '10px', marginTop: '5px', height: '100px' }}
          ></textarea>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button type="submit" style={{ backgroundColor: 'red', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>
            Kirim
          </button>
        </div>
      </form>

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
    </div>
  );
};

export default Masalah;