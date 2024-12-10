import React, { useState } from 'react';
import "../../src/index.css";

const Masalah = () => {
  const [fileName, setFileName] = useState('bukti_rusak.png');

  const handleFileChange = (event) => {
    setFileName(event.target.files[0].name);
  };

  return (
    <div className="container">
      <h1 className="title">Laporkan Masalah</h1>
      <form>
        <div className="form-group">
          <label>Nama Anda</label>
          <input type="text" name="nama" placeholder="Dinda D" />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" placeholder="dindes@student.telkomuniversity.ac.id" />
        </div>

        <div className="form-group">
          <label>Nomor Telepon</label>
          <input type="text" name="telepon" placeholder="081238472538" />
        </div>

        <div className="form-group">
          <label>Lokasi</label>
          <select name="lokasi">
            <option value="Gedung A kamar 204">Gedung A kamar 204</option>
          </select>
        </div>

        <div className="form-group">
          <label>Jenis Masalah</label>
          <select name="jenis_masalah">
            <option value="Fasilitas rusak atau tidak memadai">Fasilitas rusak atau tidak memadai</option>
          </select>
        </div>

        <div className="form-group">
          <label>Unggah Bukti</label>
          <div className="file-upload">
            <input type="file" onChange={handleFileChange} id="fileUpload" />
            <label htmlFor="fileUpload" className="file-edit">Edit File</label>
            <p className="file-name">{fileName}</p>
          </div>
        </div>

        <div className="form-group">
          <label>Deskripsi</label>
          <textarea name="deskripsi" placeholder="Lemari rusak, ada yang patah"></textarea>
        </div>

        <div className="form-submit">
          <button type="submit">Kirim</button>
        </div>
      </form>

      <footer className="footer">
        <img
          src="https://mf-chan.com/tel-u-logo/lib/Tel-U/primer-utama.png"
          alt="Telkom University"
          className="footer-logo"
        />
        <div className="footer-links">
          <a href="#link1">Link</a>
          <a href="#link2">Link</a>
        </div>
        <div className="contact-info">
          <p>Senin - Jumat: 08.00 - 16.00 WIB</p>
          <p>asrama@telkomuniversity.ac.id</p>
          <p>Telkom University Students Dormitory Bandung Technoplex</p>
          <p>Jl. Telekomunikasi Terusan Buah Batu, Kabupaten Bandung, Provinsi Jawa Barat, Indonesia</p>
        </div>
      </footer>
    </div>
  );
};

export default Masalah;