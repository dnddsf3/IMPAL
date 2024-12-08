import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NotificationDetail from './DetailNotifikasi';


const Profile = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [isAsramaDropdownOpen, setIsAsramaDropdownOpen] = useState(false);
  const [isKontakDropdownOpen, setIsKontakDropdownOpen] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);
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
  const notifications = [
    {
      id: 1,
      date: '11/11/2024',
      type: 'token',
      title: 'Token - Harga Hemat',
      amount: 'Rp 21.200',
      status: 'Transaksi berhasil'
    },
    {
      id: 2,
      date: '08/10/2024',
      type: 'repair',
      title: 'Laporan masalah',
      description: 'Pesan: Lemari rusak, ada yang patah',
      status: 'Perbaikan selesai',
      details: {
        name: 'Dinda D',
        email: 'dindes@student.telkomuniversity.ac.id',
        phone: '081238472538',
        location: 'Gedung A kamar 204',
        problemType: 'Fasilitas rusak atau tidak memadai',
        evidence: 'bukti_rusak.png',
        resolution: {
          submissionTime: '08 October 2024 09:00',
          receivedTime: '08 October 2024 09:12',
          completionTime: '08 October 2024 13:05',
          resolutionImage: 'masalah_diperbaiki.png',
          resolutionNote: 'Lemari cukup diisi barang yang tidak terlalu berat ya teh...'
        }
      }
    },
    {
      id: 3,
      date: '03/10/2024',
      type: 'token',
      title: 'Token - Harga Hemat',
      amount: 'Rp 105.200',
      status: 'Transaksi berhasil'
    }
  ];

  const handleNotificationClick = (id) => {
    navigate(`/notifications/${id}`); // Mengarahkan ke URL dengan ID
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
          {/*<span className="search-icon text-2xl">🔍</span>*/}
          <img 
            src="/user.png" 
            alt="User Profile" 
            className="profile-icon w-8 h-8 cursor-pointer"
            onClick={() => navigate("/profile")} 
          />
        </div>

      </header>

      <main className="max-w-7xl mx-auto px-4 pt-12 pb-12">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-start space-x-4">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex-shrink-0"></div>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">{userProfile.firstName} {userProfile.lastName}</h1>
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
              <div className="space-y-4 text-gray-900">
              <button className="w-full text-left px-4 py-3 hover:bg-gray-50">Edit profile</button>
              <button className="w-full text-left px-4 py-3 hover:bg-gray-50">Help</button>
              <button className="w-full text-left px-4 py-3 hover:bg-gray-50">Terms and conditions</button>
              <button className="w-full text-left px-4 py-3 hover:bg-gray-50">Privacy policy</button>
              <button className="w-full text-left px-4 py-3 hover:bg-gray-50">Change password</button>
              <button className="w-full text-left px-4 py-3 hover:bg-gray-50">Log out</button>
            </div>

            )}

            {activeTab === 'notifications' && (
              <div className="space-y-4">
              {notifications.map((notification) => (
                <div key={notification.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex space-x-4">
                      <div className={`p-2 rounded-lg ${notification.type === 'token' ? 'bg-red-100' : 'bg-gray-100'}`}>
                        {notification.type === 'token' ? (
                          <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        ) : (
                          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <p className="text-sm text-gray-900">{notification.date}</p>
                        <h4 className="font-medium text-gray-900">{notification.title}</h4>
                        {notification.amount && <p>{notification.amount}</p>}
                        {notification.description && <p>{notification.description}</p>}
                      </div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">{notification.status}</span>
                      <button 
                        className="text-sm text-red-600 block mt-1"
                        onClick={() => handleNotificationClick(2)}
                      >
                        Lihat lebih lanjut
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            )}
          </div>
        </div>
      </main>

      {selectedNotification && (
        <NotificationDetail 
          notification={selectedNotification} 
          onClose={() => setSelectedNotification(null)} 
        />
      )}

      {/* Footer */}
      <footer className="bg-red-700 text-white mt-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img src="/telkom-logo-white.png" alt="Telkom University" className="h-12 mb-4" />
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

export default Profile;