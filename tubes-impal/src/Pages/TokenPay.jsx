import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TokenPay = () => {
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

  const [meterNumber, setMeterNumber] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [promoCode, setPromoCode] = useState('');

  const denominations = [
    { amount: 20000, price: 'Rp 20.000' },
    { amount: 50000, price: 'Rp 50.000' },
    { amount: 100000, price: 'Rp 100.000' },
    { amount: 200000, price: 'Rp 200.000' }
  ];

  const eWallets = ['gopay', 'ovo', 'dana', 'shopeepay', 'linkaja'];
  const banks = ['bca', 'bni', 'bsi', 'bri', 'danamon', 'mandiri', 'ocbc'];

  return (
    <div className="min-h-screen bg-gray-50">
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
      <div className="relative h-64 bg-cover bg-center" style={{
        backgroundImage: "url('/api/placeholder/1200/400')"
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-40">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
            <h1 className="text-4xl font-bold text-white">TokenPay</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Token Listrik</h2>
            <p className="text-sm text-gray-600">
              Isi Token PLN
              Transaksi Produk Listrik PLN yang
              dapat diproses 24/7 00:00-23:59 WIB akan
              mulai diproses pada pukul 00.30 WIB
              sesuai kebijakan pihak PLN
            </p>
          </div>

          {/* Right Column */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6 space-y-8">
              {/* Step 1 */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center mr-3">1</div>
                  <h3 className="text-xl font-semibold">Masukkan Informasi Akun</h3>
                </div>
                <input
                  type="text"
                  placeholder="Masukkan No. Meter/ID Pel..."
                  className="w-full p-2 border rounded"
                  value={meterNumber}
                  onChange={(e) => setMeterNumber(e.target.value)}
                />
              </div>

              {/* Step 2 */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center mr-3">2</div>
                  <h3 className="text-xl font-semibold">Pilih Nominal</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {denominations.map((denom) => (
                    <div key={denom.amount} className="p-4 border rounded-lg text-center hover:border-blue-500 cursor-pointer">
                      <div className="text-yellow-500 mb-2">⚡</div>
                      <div className="font-semibold">{denom.price}</div>
                      <div className="text-sm text-gray-500">Harga Normal</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 3 */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center mr-3">3</div>
                  <h3 className="text-xl font-semibold">Pilih Metode Pembayaran</h3>
                </div>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">QRIS</h4>
                    <img src="/api/placeholder/120/40" alt="QRIS" className="h-8" />
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">eWallet</h4>
                    <div className="grid grid-cols-5 gap-2">
                      {eWallets.map(wallet => (
                        <img key={wallet} src="/api/placeholder/60/30" alt={wallet} className="h-8" />
                      ))}
                    </div>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">m-banking</h4>
                    <div className="grid grid-cols-7 gap-2">
                      {banks.map(bank => (
                        <img key={bank} src="/api/placeholder/60/30" alt={bank} className="h-6" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center mr-3">4</div>
                  <h3 className="text-xl font-semibold">Konfirmasi Pembelian</h3>
                </div>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Nomor WhatsApp"
                    className="w-full p-2 border rounded"
                    value={whatsappNumber}
                    onChange={(e) => setWhatsappNumber(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Kode Promo"
                    className="w-full p-2 border rounded"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  <div className="flex justify-between">
                    <span>Biaya Admin</span>
                    <span>Free</span>
                  </div>
                  <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600">
                    BELI SEKARANG
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

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

export default TokenPay;