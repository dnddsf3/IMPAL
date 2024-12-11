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

const InformasiAsrama = () => {
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
      <header className="header fixed top-0 left-0 right-0 flex items-center justify-between px-8 py-4 bg-white shadow-md z-50">
        <img
          src="https://mf-chan.com/tel-u-logo/lib/Tel-U/primer-utama.png"
          alt="Telkom University"
          className="logo h-12"
        />
        <nav className="navbar flex justify-center space-x-10 flex-grow">
          <button
            onClick={() => navigate("/")}
            className="text-[#1e1e1e] hover:text-[#B41515]"
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
              className="text-[#B41515] hover:text-[#B41515] border-b-2 border-[#B41515] pb-1"
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
          <img
            src="public/user2.png"
            alt="User Profile"
            className="profile-icon w-8 h-8 cursor-pointer"
            onClick={() => navigate("/profile")}
          />
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative h-[60vh]">
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
            <p className="text-gray-700">
              Asrama putra terdiri atas 10 gedung, total kamar di asrama Telkom University adalah 94 kamar per gedung asrama, dengan daya tampung sebesar 3.760 orang (kapasitas maksimal 4 orang per kamar).
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-red-800 mb-12">FASILITAS</h2>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-6 text-gray-900">
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
            <h3 className="text-xl font-bold mb-4 text-gray-900">DO'S</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-900">
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
                <li><a href="/asrama/asrama" className="hover:text-gray-200">Informasi Asrama</a></li>
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

export default InformasiAsrama;