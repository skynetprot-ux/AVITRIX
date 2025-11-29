import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './LoginPage.css';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    // Здесь будет реальная логика аутентификации
    login({ 
      name: 'Иван Иванов', 
      email: 'ivan@example.com' 
    });
    navigate('/profile');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Вход в AVITRIX</h1>
        <div className="login-form">
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Введите ваш email" />
          </div>
          <div className="form-group">
            <label>Пароль</label>
            <input type="password" placeholder="Введите ваш пароль" />
          </div>
          <button className="login-button" onClick={handleLogin}>
            Войти
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;