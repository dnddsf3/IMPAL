import React, { useState } from 'react';

const Masalah = () => {
  const [fileName, setFileName] = useState('bukti_rusak.png');

  const handleFileChange = (event) => {
    setFileName(event.target.files[0].name);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center' }}>Laporkan Masalah</h1>
      <form>
        <div style={{ marginBottom: '20px' }}>
          <label>Nama Anda</label>
          <input type="text" name="nama" placeholder="Dinda D" style={{ width: '100%', padding: '10px', marginTop: '5px' }} />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label>Email</label>
          <input type="email" name="email" placeholder="dindes@student.telkomuniversity.ac.id" style={{ width: '100%', padding: '10px', marginTop: '5px' }} />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label>Nomor Telepon</label>
          <input type="text" name="telepon" placeholder="081238472538" style={{ width: '100%', padding: '10px', marginTop: '5px' }} />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label>Lokasi</label>
          <select name="lokasi" style={{ width: '100%', padding: '10px', marginTop: '5px' }}>
            <option value="Gedung A kamar 204">Gedung A kamar 204</option>
          </select>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label>Jenis Masalah</label>
          <select name="jenis_masalah" style={{ width: '100%', padding: '10px', marginTop: '5px' }}>
            <option value="Fasilitas rusak atau tidak memadai">Fasilitas rusak atau tidak memadai</option>
          </select>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label>Unggah Bukti</label>
          <div style={{ border: '1px solid #ddd', padding: '10px', marginTop: '5px', backgroundColor: '#f0f9f0', textAlign: 'center' }}>
            <input type="file" onChange={handleFileChange} style={{ display: 'none' }} id="fileUpload" />
            <label htmlFor="fileUpload" style={{ cursor: 'pointer', color: 'red', marginBottom: '10px' }}>Edit File</label>
            <p>{fileName}</p>
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label>Deskripsi</label>
          <textarea
            name="deskripsi"
            placeholder="Lemari rusak, ada yang patah"
            style={{ width: '100%', padding: '10px', marginTop: '5px', height: '100px' }}
          ></textarea>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button type="submit" style={{ backgroundColor: 'red', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>
            Kirim
          </button>
        </div>
      </form>

      <footer style={{ marginTop: '50px', textAlign: 'center', color: '#666' }}>
        <p>Telkom University Students Dormitory Bandung Technoplex</p>
        <p>Jl. Telekomunikasi Terusan Buah Batu, Kabupaten Bandung, Provinsi Jawa Barat, Indonesia</p>
      </footer>
    </div>
  );
};

export default Masalah;