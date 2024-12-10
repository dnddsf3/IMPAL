import React, { useState } from 'react';
import "../../src/dinda.css";
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi input kosong
    if (!username || !password) {
      setErrorMessage('Username dan password harus diisi!');
      return;
    }

    try {
      // Kirim data login ke backend menggunakan fetch
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.status === 200) {
        // Login berhasil
        navigate('/');  // Redirect ke halaman utama setelah login sukses
      } else {
        setErrorMessage(data.message || 'Login failed');
      }
    } catch (error) {
      setErrorMessage('Error connecting to the server');
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h2>Log in to MyDorm</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              placeholder="Username / Email"
              className="input-field"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
          <button type="submit" className="login-button">Log In</button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
      <div className="login-right">
        <h2>Hello!</h2>
        <p>Kamu penghuni asrama tapi belum punya akun? Daftar akun disini!</p>
        <button className="signup-button" onClick={handleSignUpClick}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Login;
