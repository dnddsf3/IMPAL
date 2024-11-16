import React, { useState } from 'react';
import "../../src/index.css";
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  // Fungsi untuk menangani logout
  const handleLogout = () => {
    // Hapus token atau data pengguna yang tersimpan (contoh)
    localStorage.removeItem("userToken"); // Sesuaikan dengan nama item yang Anda gunakan
    navigate("/login"); // Arahkan ke halaman login setelah logout
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="profile-page">
      {/* Navbar */}
      <header className="header fixed top-0 left-0 right-0 flex items-center justify-between px-8 py-4 bg-white shadow-md z-50">
        <img src="https://mf-chan.com/tel-u-logo/lib/Tel-U/primer-utama.png" alt="Telkom University" className="logo h-12" />
        <nav className="navbar flex justify-center space-x-10 flex-grow">
          <button onClick={() => navigate("/")} className="text-black hover:text-[#B41515]">Beranda</button>
          <button onClick={() => navigate("/tentang")} className="text-black hover:text-[#B41515]">Tentang</button>

          {/* dropdown Asrama */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-black hover:text-[#B41515] flex items-center"
            >
              Asrama
              <span className="ml-2">▼</span>
            </button>

            {/* dropdown */}
            {isDropdownOpen && (
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

          <button onClick={() => navigate("/kontak")} className="text-black hover:text-[#B41515]">Kontak</button>
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

      {/* Profile Content */}
      <div className="profile-content pt-20 px-8">
        <h1 className="text-3xl font-bold mb-6">Profil Pengguna</h1>

        <div className="user-info mb-8">
          <p>Nama: John Doe</p>
          <p>Email: johndoe@example.com</p>
        </div>

        {/* Log Out Button */}
        <button
          onClick={handleLogout}
          className="bg-[#B41515] text-white py-2 px-4 rounded hover:bg-red-600"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
