const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

// Registrasi pengguna baru (signup)
const register = (req, res) => {
  const { email, name, phone_number, password, role } = req.body;

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) return res.status(500).json({ error: err.message });

    // Menggunakan setter untuk membuat user baru
    User.createUser(email, name, phone_number, hashedPassword, role, (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: 'User created successfully!' });
    });
  });
};

// Login pengguna (login)
const login = (req, res) => {
  const { username, password } = req.body;

  // Menggunakan getter untuk mencari user berdasarkan username
  User.findUserByUsername(username, (err, user) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

      // Membuat JWT token setelah login berhasil
      const token = jwt.sign({ id: user.id, role: user.role }, 'your_jwt_secret', { expiresIn: '1h' });
      res.json({ token });
    });
  });
};

module.exports = { register, login };
