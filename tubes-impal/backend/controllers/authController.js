const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModels');

const register = (req, res) => {
    const { email, name, phone_number, password, role } = req.body;

    // Hash password sebelum disimpan
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) return res.status(500).json({ error: err.message });

        // Memasukkan data pengguna
        User.create(email, name, phone_number, hashedPassword, role, (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ message: 'User created successfully!' });
        });
    });
};

const login = (req, res) => {
    const { email, password } = req.body;

    // Mencari pengguna berdasarkan email
    User.findByEmail(email, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(401).json({ message: 'Invalid credentials' });

        const user = results[0];

        // Membandingkan password yang diberikan dengan password yang ter-hash di database
        bcrypt.compare(password, user.kata_sandi, (err, isMatch) => {  // Gunakan 'kata_sandi' dari tabel Pengguna
            if (err) return res.status(500).json({ error: err.message });
            if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

            // Membuat JWT token dengan payload id dan role pengguna
            const token = jwt.sign({ id: user.id_pengguna, role: user.peran }, 'your_jwt_secret', { expiresIn: '1h' });
            res.json({ token });
        });
    });
};

module.exports = { register, login };
