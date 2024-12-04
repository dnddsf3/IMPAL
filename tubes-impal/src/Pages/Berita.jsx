import React from 'react';
import { Search, User } from 'lucide-react';

const DormitoryWebsite = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Welcoming Day',
      image: '/path-to-image.jpg',
      publisher: 'Publisher',
      date: '16/10/2024',
    },
    {
      id: 2,
      title: 'Lomba Kebersihan Antar-Kamar Asrama',
      image: '/path-to-image.jpg',
      publisher: 'Publisher',
      date: '16/10/2024',
    },
    {
      id: 3,
      title: 'Earth Hour',
      image: '/path-to-image.jpg',
      publisher: 'Publisher',
      date: '20/10/2024',
    },
    // Add more news items here
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-2">
          <nav className="flex items-center justify-between">
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
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-red-700 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-white text-4xl font-bold text-center">BERITA ASRAMA</h1>
        </div>
      </div>

      {/* News Grid */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="font-bold text-xl mb-2">{item.title}</h2>
                <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                  <span>By {item.publisher}</span>
                  <span>{item.date}</span>
                </div>
                <button className="w-full bg-red-700 text-white py-2 rounded-md hover:bg-red-800">
                  Baca Selengkapnya
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 space-x-2">
          <button className="px-3 py-1 border rounded">&laquo;</button>
          <button className="px-3 py-1 border rounded">&lt;</button>
          <button className="px-3 py-1 border rounded bg-red-700 text-white">1</button>
          <button className="px-3 py-1 border rounded">2</button>
          <button className="px-3 py-1 border rounded">3</button>
          <button className="px-3 py-1 border rounded">4</button>
          <button className="px-3 py-1 border rounded">5</button>
          <button className="px-3 py-1 border rounded">&gt;</button>
          <button className="px-3 py-1 border rounded">&raquo;</button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-red-700 text-white mt-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img src="/telkom-logo-white.png" alt="Telkom University" className="h-12 mb-4" />
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    {/* Instagram icon path */}
                  </svg>
                </a>
                <a href="#" className="hover:text-gray-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    {/* WhatsApp icon path */}
                  </svg>
                </a>
                <a href="#" className="hover:text-gray-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    {/* YouTube icon path */}
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">LINK</h3>
              {/* Add links here */}
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">KONTAK</h3>
              <div className="space-y-2">
                <p>Senin - Jumat: 08.00 - 16.00 WIB</p>
                <p>asrama@telkomuniversity.ac.id</p>
                <p className="mt-4">
                  Telkom University Students Dormitory Bandung Technoplex
                  <br />
                  Jl. Telekomunikasi Terusan Buah Batu,
                  <br />
                  Kabupaten Bandung, Provinsi Jawa Barat
                  <br />
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