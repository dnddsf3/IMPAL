import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('about');
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

  const userProfile = {
    firstName: 'DINDA',
    lastName: 'DESFIRA',
    email: 'dindes@student.telkomuniversity.ac.id',
    phone: '081238472538',
    building: 'Gedung A',
    room: 'Kamar 204',
    studyProgram: 'S1 Informatika',
    faculty: 'FIF'
  };

  return (
    <div className="profile-page">
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
          {/*<span className="search-icon text-2xl">🔍</span>*/}
          <img 
            src="/user.png" 
            alt="User Profile" 
            className="profile-icon w-8 h-8 cursor-pointer"
            onClick={() => navigate("/profile")} 
          />
        </div>

      </header>

      <main className="max-w-7xl mx-auto px-4 pt-24 pb-12">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-start space-x-4">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex-shrink-0"></div>
            <div>
              <h1 className="text-xl font-semibold">{userProfile.firstName} {userProfile.lastName}</h1>
              <p className="text-gray-600">{userProfile.building}</p>
              <p className="text-gray-600">{userProfile.room}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                className={`py-4 px-1 ${activeTab === 'about' ? 'border-b-2 border-[#B41515] text-[#B41515]' : 'text-gray-500'}`}
                onClick={() => setActiveTab('about')}
              >
                About Me
              </button>
              <button
                className={`py-4 px-1 ${activeTab === 'setting' ? 'border-b-2 border-[#B41515] text-[#B41515]' : 'text-gray-500'}`}
                onClick={() => setActiveTab('setting')}
              >
                Setting
              </button>
              <button
                className={`py-4 px-1 ${activeTab === 'notifications' ? 'border-b-2 border-[#B41515] text-[#B41515]' : 'text-gray-500'}`}
                onClick={() => setActiveTab('notifications')}
              >
                Notifications
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'about' && (
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm text-gray-500 mb-1">First name</h3>
                  <p className="text-gray-900">{userProfile.firstName}</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500 mb-1">Last name</h3>
                  <p className="text-gray-900">{userProfile.lastName}</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500 mb-1">Email address</h3>
                  <p className="text-gray-900">{userProfile.email}</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500 mb-1">Phone</h3>
                  <p className="text-gray-900">{userProfile.phone}</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500 mb-1">Study program</h3>
                  <p className="text-gray-900">{userProfile.studyProgram}</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500 mb-1">Faculty</h3>
                  <p className="text-gray-900">{userProfile.faculty}</p>
                </div>
              </div>
            )}

            {activeTab === 'setting' && (
              <div>
                <h2 className="text-lg font-medium mb-4">Settings</h2>
                <ul>
                  <li className="py-2 border-b border-gray-200">
                    <a href="#" className="text-[#1E1E1E] hover:text-[#B41515]">Edit profile</a>
                  </li>
                  <li className="py-2 border-b border-gray-200">
                    <a href="#" className="text-[#1E1E1E] hover:text-[#B41515]">Help</a>
                  </li>
                  <li className="py-2 border-b border-gray-200">
                    <a href="#" className="text-[#1E1E1E] hover:text-[#B41515]">Terms and conditions</a>
                  </li>
                  <li className="py-2 border-b border-gray-200">
                    <a href="#" className="text-[#1E1E1E] hover:text-[#B41515]">Privacy policy</a>
                  </li>
                  <li className="py-2 border-b border-gray-200">
                    <a href="#" className="text-[#1E1E1E] hover:text-[#B41515]">Change password</a>
                  </li>
                  <li className="py-2">
                    <a href="#" className="text-[#1E1E1E] hover:text-[#B41515]">Log out</a>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div>
                <h2 className="text-lg font-medium mb-4">Notifications</h2>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg shadow-sm p-4">
                    <div className="flex items-start space-x-4">
                      <div className="bg-[#FCD34D] rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">
                        <span>🤑</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">Token - Harga Hemat</h3>
                        <p className="text-gray-600">Rp 21.200</p>
                        <p className="text-gray-500 text-sm">11/11/2024</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-4">
                    <div className="flex items-start space-x-4">
                      <div className="bg-[#F87171] rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">
                        <span>❌</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">Laporan masalah</h3>
                        <p className="text-gray-600">Lemari rusak, ada yang patah</p>
                        <p className="text-gray-500 text-sm">08/10/2024</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-4">
                    <div className="flex items-start space-x-4">
                      <div className="bg-[#FCD34D] rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">
                        <span>🤑</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">Token - Harga Hemat</h3>
                        <p className="text-gray-600">Rp 105.200</p>
                        <p className="text-gray-500 text-sm">03/10/2024</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

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

export default Profile;