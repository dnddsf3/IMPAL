import React from 'react';
import { Search, User } from 'lucide-react';

const DormitoryInfo = () => {
  const facilities = [
    { 
      icon: <i className="bi bi-shield-check text-red-700 text-3xl"></i>,
      name: "Keamanan 24 Jam" 
    },
    { 
      icon: <i className="bi bi-house-door text-red-700 text-3xl"></i>,
      name: "Dapur Umum" 
    },
    { 
      icon: <i className="bi bi-people text-red-700 text-3xl"></i>,
      name: "4 Orang Dalam Satu Kamar" 
    },
    { 
      icon: <i className="bi bi-p-square text-red-700 text-3xl"></i>,
      name: "Tempat Parkir" 
    },
    { 
      icon: <i className="bi bi-tv text-red-700 text-3xl"></i>,
      name: "TV Mart" 
    },
    { 
      icon: <i className="bi bi-droplet text-red-700 text-3xl"></i>,
      name: "Kamar Mandi Dalam" 
    },
    { 
      icon: <i className="bi bi-hospital text-red-700 text-3xl"></i>,
      name: "Springbed & Bantal" 
    },
    { 
      icon: <i className="bi bi-wifi text-red-700 text-3xl"></i>,
      name: "Wifi" 
    },
    { 
      icon: <i className="bi bi-shop text-red-700 text-3xl"></i>,
      name: "Kantin" 
    },
    { 
      icon: <i className="bi bi-tools text-red-700 text-3xl"></i>,
      name: "Ruang Service" 
    },
    { 
      icon: <i className="bi bi-water text-red-700 text-3xl"></i>,
      name: "Laundry" 
    },
    { 
      icon: <i className="bi bi-lightning-charge text-red-700 text-3xl"></i>,
      name: "Listrik Menggunakan Sistem Token" 
    },
    { 
      icon: <i className="bi bi-door-closed text-red-700 text-3xl"></i>,
      name: "Lemari Pakaian" 
    },
    { 
      icon: <i className="bi bi-book text-red-700 text-3xl"></i>,
      name: "Rak Buku" 
    },
    { 
      icon: <i className="bi bi-building text-red-700 text-3xl"></i>,
      name: "Musholla" 
    },
  ];

  // ... rest of the component remains the same until the Facilities section

  const dos = [
    "Berpakaian sopan dan pantas",
    "Berada di asrama sebelum pukul 21.00 WIB",
    "Menjaga kebersihan",
    "Membatasi tamu hingga pukul 20:00 WIB",
    "Mematuhi peraturan asrama",
    "Bersikap sopan dan saling menghargai",
    "Menghormati waktu belajar",
  ];

  const donts = [
    "Dilarang merokok dan menggunakan vape",
    "Dilarang menggunakan kompor gas di asrama",
    "Dilarang membawa orang yang mengganggu ketertiban",
    "Dilarang memelihara hewan peliharaan",
    "Dilarang membawa dan menggelapkan barang terlarang",
    "Dilarang melakukan intimidasi atau ancaman",
    "Dilarang mencoreng dinding",
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-2 flex items-center justify-between">
          <img src="/telkom-logo.png" alt="Telkom University" className="h-10" />
          <div className="flex items-center space-x-8">
            <a href="#" className="text-gray-700">Beranda</a>
            <a href="#" className="text-gray-700">Tentang</a>
            <div className="relative group">
              <a href="#" className="text-red-600">Asrama</a>
              <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg mt-2 py-2">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Informasi Asrama</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Berita</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Galeri</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">TokenPay</a>
              </div>
            </div>
            <a href="#" className="text-gray-700">Kontak</a>
            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 text-gray-500" />
              <User className="w-5 h-5 text-gray-500" />
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div className="absolute inset-0">
          <img
            src="/dormitory-hero.jpg"
            alt="Asrama"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-white text-5xl font-bold mb-2">INFORMASI ASRAMA</h1>
          <p className="text-white text-xl">Asrama Mahasiswa ITelkom University</p>
        </div>
      </div>

      {/* Building and Rooms Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-red-700">GEDUNG DAN KAMAR</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <img src="/building-1.jpg" alt="Gedung Asrama" className="w-full rounded-lg border-4 border-red-700" />
            <p className="text-gray-700">
              Tahun 2015, Asrama universitas Telkom terdiri dari 8 gedung putri, total kamar di asrama Telkom University
              sebesar 94 kamar per gedung dengan daya tampung sebanyak 376 orang per gedung (diperhitungkan 4
              orang per kamar).
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-gray-700 mb-4">
              Asrama putra terdiri dari 10 gedung, total kamar di asrama Telkom University adalah 94 kamar per gedung putra,
              dengan daya tampung sebesar 3760 orang (diperhitungkan 4 orang per kamar).
            </p>
            <img src="/building-2.jpg" alt="Gedung Asrama" className="w-full rounded-lg border-4 border-red-700" />
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-red-700">FASILITAS</h2>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="mb-3 transform transition-transform duration-200 group-hover:scale-110">
                  {facility.icon}
                </div>
                <span className="text-sm text-gray-700">{facility.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Rules Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-red-700">TATA TERTIB</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-center">DO'S</h3>
            <ul className="space-y-2">
              {dos.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">{index + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-700 text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-center">DON'TS</h3>
            <ul className="space-y-2">
              {donts.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">{index + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-700 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img src="/telkom-logo-white.png" alt="Telkom University" className="h-12 mb-4" />
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-200">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    {/* Instagram icon path */}
                  </svg>
                </a>
                {/* Add other social media icons */}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">LINK</h3>
              {/* Add links */}
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">KONTAK</h3>
              <div className="space-y-2">
                <p>Senin - Jumat: 08:00 - 16:00 WIB</p>
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

export default DormitoryInfo;

     