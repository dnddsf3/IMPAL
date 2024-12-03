import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import mysql from 'mysql2';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config(); // Load variabel lingkungan dari file .env

const app = express();
const port = 3001;

// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // Allow frontend to communicate with backend
  methods: ['GET', 'POST'],
  credentials: true, // Allow cookies if needed
}));
app.use(bodyParser.json());

// Koneksi database
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ', err);
    return;
  }
  console.log('Connected to the database');
});

// Endpoint untuk login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Periksa apakah username dan password diberikan
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  try {
    // Query database untuk menemukan pengguna
    const [results] = await db.promise().query('SELECT * FROM pengguna WHERE username = ?', [username]);

    if (results.length === 0) {
      return res.status(401).json({ message: 'User not found' });
    }

    const user = results[0];

    // Verifikasi password
    const isMatch = await bcrypt.compare(password, user.password);
    
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Buat JWT token
    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Kirim token ke frontend
    res.status(200).json({ message: 'Login successful', token });
  } catch (err) {
    console.error('Error processing login: ', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
