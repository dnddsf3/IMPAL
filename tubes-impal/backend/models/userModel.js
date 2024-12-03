const db = require('../config/db'); // Koneksi ke database (misalnya MySQL)

// Fungsi untuk menyimpan data akun baru (setter)
const createUser = (email, name, phone_number, password, role, callback) => {
  const query = 'INSERT INTO users (email, name, phone_number, password, role) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [email, name, phone_number, password, role], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, result);
  });
};

// Fungsi untuk mencari user berdasarkan email (getter)
const findUserByEmail = (email, callback) => {
  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    if (results.length > 0) {
      callback(null, results[0]); // Mengembalikan user pertama yang ditemukan
    } else {
      callback(null, null); // Jika tidak ada user ditemukan
    }
  });
};

// Fungsi untuk mencari user berdasarkan username (getter)
const findUserByUsername = (username, callback) => {
  const query = 'SELECT * FROM users WHERE username = ?';
  db.query(query, [username], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    if (results.length > 0) {
      callback(null, results[0]); // Mengembalikan user pertama yang ditemukan
    } else {
      callback(null, null); // Jika tidak ada user ditemukan
    }
  });
};

// Fungsi untuk memperbarui password pengguna (setter)
const updatePassword = (email, newPassword, callback) => {
  const query = 'UPDATE users SET password = ? WHERE email = ?';
  db.query(query, [newPassword, email], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, result);
  });
};

// Fungsi untuk memperbarui role pengguna (setter)
const updateUserRole = (email, newRole, callback) => {
  const query = 'UPDATE users SET role = ? WHERE email = ?';
  db.query(query, [newRole, email], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, result);
  });
};

module.exports = {
  createUser,
  findUserByEmail,
  findUserByUsername,
  updatePassword,
  updateUserRole,
};
