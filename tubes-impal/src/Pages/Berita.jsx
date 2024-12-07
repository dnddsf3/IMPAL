import React, { useState } from 'react';
import "../../src/styles.css";
import { useNavigate } from 'react-router-dom';

const DormitoryWebsite = () => {
  const navigate = useNavigate();
  const [isAsramaDropdownOpen, setIsAsramaDropdownOpen] = useState(false);
  const [isKontakDropdownOpen, setIsKontakDropdownOpen] = useState(false);

  const toggleAsramaDropdown = () => {
    setIsAsramaDropdownOpen(!isAsramaDropdownOpen);
    setIsKontakDropdownOpen(false);
  };
  
  const toggleKontakDropdown = () => {
    setIsKontakDropdownOpen(!isKontakDropdownOpen);
    setIsAsramaDropdownOpen(false);
  };

  const newsItems = [
    {
      id: 1,
      title: 'Welcoming Day',
      image: '/dormitory-image.jpg',
      publisher: 'Publisher',
      date: '16/10/2024',
    },
    {
      id: 2,
      title: 'Lomba Kebersihan Antar-Kamar Asrama',
      image: '/dormitory-image.jpg',
      publisher: 'Publisher',
      date: '16/10/2024',
    },
    {
      id: 3,
      title: 'Earth Hour',
      image: '/dormitory-image.jpg',
      publisher: 'Publisher',
      date: '20/10/2024',
    },
    // Lorem ipsum items
    ...Array(6).fill(null).map((_, index) => ({
      id: index + 4,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      image: '/placeholder.jpg',
      publisher: 'Publisher',
      date: '23/03/2024',
    })),
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="header fixed top-0 left-0 right-0 flex items-center justify-between px-8 py-4 bg-white shadow-md z-50">
        <img src="https://mf-chan.com/tel-u-logo/lib/Tel-U/primer-utama.png" alt="Telkom University" className="logo h-12" />
        <nav className="navbar flex justify-center space-x-10 flex-grow">
          <button onClick={() => navigate("/")} className="text-[#1E1E1E] hover:text-[#B41515]">Beranda</button>
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
            src="/user.png" 
            alt="User Profile" 
            className="profile-icon w-8 h-8 cursor-pointer"
            onClick={() => navigate("/profile")} 
          />
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-red-700 py-16 mt-20">
        <div className="container mx-auto px-4">
          <h1 className="text-white text-4xl font-bold text-center">BERITA ASRAMA</h1>
        </div>
      </div>

      {/* Rest of the component remains the same */}
      {/* News Grid */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map(item => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="font-medium text-lg mb-4">{item.title}</h2>
                <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                  <span>By {item.publisher}</span>
                  <span>{item.date}</span>
                </div>
                <button className="w-full bg-red-700 text-white py-2 rounded hover:bg-red-800">
                  Baca Selengkapnya
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 space-x-2">
          <button className="w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-100">&laquo;</button>
          <button className="w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-100">&lt;</button>
          <button className="w-8 h-8 flex items-center justify-center border rounded bg-red-700 text-white">1</button>
          <button className="w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-100">2</button>
          <button className="w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-100">3</button>
          <button className="w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-100">4</button>
          <button className="w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-100">5</button>
          <button className="w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-100">&gt;</button>
          <button className="w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-100">&raquo;</button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-red-700 text-white mt-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img src="/telkom-logo-white.png" alt="Telkom University" className="h-12 mb-4" />
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-200">
                  <img src="/instagram-icon.svg" alt="Instagram" className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-gray-200">
                  <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-gray-200">
                  <img src="/youtube-icon.svg" alt="YouTube" className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">LINK</h3>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">LINK</h3>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">KONTAK</h3>
              <div className="space-y-2">
                <p>Senin - Jumat: 08.00 - 16.00 WIB</p>
                <p>asrama@telkomuniversity.ac.id</p>
                <p className="mt-4">
                  Telkom University Students<br />
                  Dormitory Bandung Technoplex<br />
                  Jl. Telekomunikasi Terusan Buah Batu,<br />
                  Kabupaten Bandung, Provinsi Jawa Barat<br />
                  Indonesia
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DormitoryWebsite;