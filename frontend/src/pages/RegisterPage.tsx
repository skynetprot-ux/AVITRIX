import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './RegisterPage.css';

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleRegister = () => {
    // Здесь будет реальная логика регистрации
    login({ 
      name: 'Иван Иванов', 
      email: 'ivan@example.com' 
    });
    navigate('/profile');
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <h1>Регистрация в AVITRIX</h1>
        <div className="register-form">
          <div className="form-group">
            <label>Имя</label>
            <input type="text" placeholder="Введите ваше имя" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Введите ваш email" />
          </div>
          <div className="form-group">
            <label>Пароль</label>
            <input type="password" placeholder="Создайте пароль" />
          </div>
          <div className="form-group">
            <label>Подтвердите пароль</label>
            <input type="password" placeholder="Повторите пароль" />
          </div>
          <button className="register-button" onClick={handleRegister}>
            Зарегистрироваться
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;