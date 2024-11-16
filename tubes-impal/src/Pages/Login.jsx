import React, { useState } from 'react';
import "../../src/index.css";
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === 'user' && password === 'password123') {
      navigate('/');
    } else {
      setErrorMessage('Pastikan masukan Anda benar!');
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
