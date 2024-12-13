const express = require('express');
const { register, login } = require('../controllers/authController');

const router = express.Router();

router.post('/signup', register);  // Rute untuk registrasi
router.post('/login', login);      // Rute untuk login

module.exports = router;
