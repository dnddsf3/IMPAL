import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotificationDetail = () => {
  const navigate = useNavigate();

  // Sample notification detail - this would typically come from props or state
  const notification = {
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
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center">
            <button 
              onClick={() => navigate('/profile')}
              className="mr-4 text-gray-600 hover:text-gray-900"
            >
              ← Kembali
            </button>
            <h1 className="text-2xl font-semibold text-gray-900">Detail Laporan Masalah</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          {/* Notification Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gray-100 rounded-lg">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">{notification.title}</h2>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    {notification.status}
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-500">{notification.date}</p>
              </div>
            </div>
          </div>

          {/* Problem Details */}
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Detail Masalah</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-500">Nama</p>
                <p className="mt-1 text-gray-900">{notification.details.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="mt-1 text-gray-900">{notification.details.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Nomor telepon</p>
                <p className="mt-1 text-gray-900">{notification.details.phone}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Lokasi</p>
                <p className="mt-1 text-gray-900">{notification.details.location}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm text-gray-500">Jenis masalah</p>
                <p className="mt-1 text-gray-900">{notification.details.problemType}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm text-gray-500">Bukti masalah</p>
                <div className="mt-2">
                  <img 
                    src="/api/placeholder/400/300"
                    alt="Bukti masalah" 
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Resolution Timeline */}
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Status penyelesaian</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Pelaporan masalah berhasil dikirimkan</p>
                  <p className="text-sm text-gray-500">{notification.details.resolution.submissionTime}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Laporan masalah diterima</p>
                  <p className="text-sm text-gray-500">{notification.details.resolution.receivedTime}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Perbaikan masalah selesai</p>
                  <p className="text-sm text-gray-500">{notification.details.resolution.completionTime}</p>
                  <div className="mt-4">
                    <img 
                      src="/api/placeholder/400/300"
                      alt="Bukti perbaikan" 
                      className="rounded-lg"
                    />
                    <p className="mt-2 text-sm text-gray-600">{notification.details.resolution.resolutionNote}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotificationDetail;