import React from 'react';
import "./SettingsPage.css";

export default function SettingsPage() {
  return (
    <div className="settings-page">
      <div className="page-header">
        <h1>Настройки</h1>
        <p>Управление вашим аккаунтом и настройками приложения</p>
      </div>
      
      <div className="content-section">
        <h2>Профиль</h2>
        <div className="settings-form">
          <div className="form-group">
            <label>Имя пользователя</label>
            <input type="text" placeholder="Введите ваше имя" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Введите ваш email" />
          </div>
          <button className="btn primary">Сохранить изменения</button>
        </div>
      </div>
    </div>
  );
}