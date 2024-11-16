import React, { useState } from 'react';
import "../../src/index.css";
import { useNavigate } from 'react-router-dom';

// isinya dari gpt karena butuh logoutnya dulu aja sementara

const Profile = () => {
  const navigate = useNavigate();

  // Fungsi untuk menangani logout
  const handleLogout = () => {
    // Hapus token atau data pengguna yang tersimpan (contoh)
    localStorage.removeItem("userToken"); // Sesuaikan dengan nama item yang Anda gunakan
    navigate("/login"); // Arahkan ke halaman login setelah logout
  };

  return (
    <div className="profile-page">
      <h1 className="text-3xl font-bold mb-6">Profil Pengguna</h1>
      
      {/* Informasi profil pengguna bisa ditambahkan di sini */}
      <div className="user-info mb-8">
        <p>Nama: John Doe</p>
        <p>Email: johndoe@example.com</p>
        {/* Tambahkan informasi lainnya jika diperlukan */}
      </div>
      
      {/* Tombol Log Out */}
      <button
        onClick={handleLogout}
        className="bg-[#B41515] text-white py-2 px-4 rounded hover:bg-red-600"
      >
        Log Out
      </button>
    </div>
  );
};

export default Profile;
