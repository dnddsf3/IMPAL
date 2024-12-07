import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Clock, 
  Utensils, 
  Users, 
  ParkingSquare, 
  Tv, 
  Bath, 
  Bed, 
  Wifi,
  ShoppingBasket,
  Shirt,
  WashingMachine,
  Zap,
  Home,
  BookOpen,
  Building2
} from 'lucide-react';

const AsramaInfo = () => {
  const [isAsramaDropdownOpen, setIsAsramaDropdownOpen] = useState(false);
  const [isKontakDropdownOpen, setIsKontakDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleAsramaDropdown = () => {
    setIsAsramaDropdownOpen(!isAsramaDropdownOpen);
    setIsKontakDropdownOpen(false);
  };
  
  const toggleKontakDropdown = () => {
    setIsKontakDropdownOpen(!isKontakDropdownOpen);
    setIsAsramaDropdownOpen(false);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <img 
              src="https://mf-chan.com/tel-u-logo/lib/Tel-U/primer-utama.png" 
              alt="Telkom University" 
              className="h-8"
            />
            
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => navigate("/")} className="text-gray-800 hover:text-red-700">Beranda</button>
              <button onClick={() => navigate("/tentang")} className="text-gray-800 hover:text-red-700">Tentang</button>
              
              {/* Asrama Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleAsramaDropdown}
                  className="text-gray-800 hover:text-red-700 flex items-center"
                >
                  Asrama
                  <span className="ml-1">▼</span>
                </button>
                
                {isAsramaDropdownOpen && (
                  <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded mt-1">
                    <div className="py-1">
                      <button onClick={() => navigate("/asrama/informasi")} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
                        Informasi Asrama
                      </button>
                      <button onClick={() => navigate("/asrama/berita")} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
                        Berita
                      </button>
                      <button onClick={() => navigate("/asrama/galeri")} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
                        Galeri
                      </button>
                      <button onClick={() => navigate("/asrama/tokenpay")} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
                        TokenPay
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Kontak Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleKontakDropdown}
                  className="text-gray-800 hover:text-red-700 flex items-center"
                >
                  Kontak
                  <span className="ml-1">▼</span>
                </button>
                
                {isKontakDropdownOpen && (
                  <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded mt-1">
                    <div className="py-1">
                      <button onClick={() => navigate("/kontak/hubungi")} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
                        Hubungi
                      </button>
                      <button onClick={() => navigate("/kontak/masalah")} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
                        Laporan Masalah
                      </button>
                      <button onClick={() => navigate("/kontak/faq")} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
                        FAQ
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </nav>

            <div className="flex items-center space-x-4">
              <button onClick={() => navigate("/profile")} className="p-1">
                <img src="/user.png" alt="Profile" className="w-8 h-8 rounded-full" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative h-[60vh] mt-16">
        <img 
          src="/asrama-hero.jpg" 
          alt="Asrama Telkom University"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">INFORMASI ASRAMA</h1>
            <p className="text-xl text-white">Asrama Mahasiswa | Telkom University</p>
          </div>
        </div>
      </div>

      {/* Building and Room Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-red-800 mb-12">GEDUNG DAN KAMAR</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img 
              src="/gedung-asrama.jpg" 
              alt="Gedung Asrama"
              className="w-full rounded-lg shadow-lg mb-4"
            />
            <p className="text-gray-700">
              Tahun 2015, Asrama Universitas Telkom terdiri dari 8 gedung putri. 
              Total kamar di asrama Telkom University sebagai berikut: total kamar 
              per gedung sebesar 98 kamar per gedung dengan daya tampung sebesar 392 
              orang (kapasitas kamar 4 orang per kamar).
            </p>
          </div>
          <div>
            <img 
              src="/kamar-asrama.jpg" 
              alt="Kamar Asrama"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-red-800 mb-12">FASILITAS</h2>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
            <FacilityCard icon={<Clock className="text-red-800" />} title="Keamanan 24 Jam" />
            <FacilityCard icon={<Utensils className="text-red-800" />} title="Dapur Umum" />
            <FacilityCard icon={<Users className="text-red-800" />} title="4 Orang Dalam Satu Kamar" />
            <FacilityCard icon={<ParkingSquare className="text-red-800" />} title="Tempat Parkir" />
            <FacilityCard icon={<Tv className="text-red-800" />} title="TV Mini" />
            <FacilityCard icon={<Bath className="text-red-800" />} title="Kamar Mandi Dalam" />
            <FacilityCard icon={<Bed className="text-red-800" />} title="Springbed & Bantal" />
            <FacilityCard icon={<Wifi className="text-red-800" />} title="Wifi" />
            <FacilityCard icon={<ShoppingBasket className="text-red-800" />} title="Kantin" />
            <FacilityCard icon={<Shirt className="text-red-800" />} title="Ruang Setrika" />
            <FacilityCard icon={<WashingMachine className="text-red-800" />} title="Laundry" />
            <FacilityCard icon={<Zap className="text-red-800" />} title="Listrik Token" />
            <FacilityCard icon={<Home className="text-red-800" />} title="Lemari Pakaian" />
            <FacilityCard icon={<BookOpen className="text-red-800" />} title="Rak Buku" />
            <FacilityCard icon={<Building2 className="text-red-800" />} title="Musholla" />
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-red-800 mb-12">TATA TERTIB</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">DO'S</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>Berpakaian sopan dan rapi</li>
              <li>Berada di asrama sebelum pukul 21:00 WIB</li>
              <li>Menjaga kebersihan</li>
              <li>Membawa kartu hingga pukul 20:00 WIB</li>
              <li>Menaati peraturan asrama</li>
              <li>Bersikap sopan dan saling menghargai</li>
              <li>Menghormati waktu belajar</li>
            </ol>
          </div>
          <div className="bg-red-800 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">DON'TS</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>Dilarang merokok dan menggunakan vape</li>
              <li>Dilarang menggunakan/memindahkan barang yang ada di asrama</li>
              <li>Dilarang membawa barang yang mengganggu ketertiban</li>
              <li>Dilarang memelihara hewan peliharaan</li>
              <li>Dilarang membawa dan menggunakan barang terlarang</li>
              <li>Dilarang melakukan intimidasi atau ancaman</li>
              <li>Dilarang mencuri/melakukan tindakan kriminal</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-800 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img 
                src="https://mf-chan.com/tel-u-logo/lib/Tel-U/primer-utama.png" 
                alt="Telkom University" 
                className="h-12 mb-4 brightness-0 invert"
              />
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-300">Instagram</a>
                <a href="#" className="hover:text-gray-300">YouTube</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">KONTAK</h4>
              <p>Senin - Jumat: 08:00 - 16:00 WIB</p>
              <p>asrama@telkomuniversity.ac.id</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">ALAMAT</h4>
              <p>Telkom University Students Dormitory Bandung Technoplex</p>
              <p>Jl. Telekomunikasi Terusan Buah Batu Bandung, Indonesia</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FacilityCard = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
      <div className="mb-2">
        {icon}
      </div>
      <p className="text-center text-sm">{title}</p>
    </div>
  );
};

export default AsramaInfo;