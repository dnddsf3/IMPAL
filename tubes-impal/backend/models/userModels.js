const db = require('../config/db');

const User = {
    // Method untuk membuat pengguna baru
    create: (email, name, phone_number, password, role, callback) => {
        const query = 'INSERT INTO Pengguna (email, nama, nomor_telp, kata_sandi, peran) VALUES (?, ?, ?, ?, ?)';
        db.query(query, [email, name, phone_number, password, role], callback);
    },

    // Method untuk mencari pengguna berdasarkan email
    findByEmail: (email, callback) => {
        const query = 'SELECT * FROM Pengguna WHERE email = ?';
        db.query(query, [email], callback);
    }
};

module.exports = User;
