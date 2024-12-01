import React, { useState } from 'react';
import "../../src/index.css";
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (name === '' || username === '' || email === '' || password === '') {
      setError('Semua field harus diisi!');
      return;
    }
    if (!email.includes('@') || !email.includes('student.telkomuniversity.ac.id') || !email.includes('@student.telkomuniversity.ac.id')) {
      setError('Email tidak valid!');
      return;
    }
    if (!validatePassword(password)) {
      setError('Password harus minimal 8 karakter dan mengandung huruf serta angka.');
      return;
    }

    setError('');
    alert('Akun berhasil dibuat!');
    navigate('/');
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <h2>Welcome Back!</h2>
        <p>Sudah punya akun? Log In disini!</p>
        <button className="login-button" onClick={() => navigate('/login')}>
          Log In
        </button>
      </div>
      <div className="signup-right">
        <h2>Create Account</h2>
        <form onSubmit={handleSignup}>
          <div className="input-container">
            <input
              type="text"
              placeholder="Full Name"
              className="input-field"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              placeholder="Username"
              className="input-field"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              type="email"
              placeholder="Email"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
