import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import './UserProfilePage.css';

const UserProfilePage: React.FC = () => {
  const { user, logout } = useAuth();
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    smsNotifications: false,
    twoFactorAuth: false
  });

  const stats = [
    { value: '154', label: 'Активных объявлений' },
    { value: '87%', label: 'Эффективность' },
    { value: '12', label: 'Дней с нами' },
    { value: '8.5K', label: 'Заработано' }
  ];

  const handleSettingChange = (setting: keyof typeof settings) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="user-profile-page">
      <div className="profile-header">
        <h1>Мой профиль</h1>
        <p>Управление вашими настройками и данными</p>
      </div>

      <div className="profile-layout">
        {/* Левая колонка - Информация о пользователе */}
        <div className="profile-sidebar">
          <div className="user-card">
            <div className="user-avatar-large">
              <span>{user?.name ? user.name.charAt(0).toUpperCase() : 'П'}</span>
            </div>
            <div className="user-info">
              <h2>{user?.name || 'Пользователь'}</h2>
              <p className="user-email">{user?.email || 'email@example.com'}</p>
              <div className="user-subscription premium">
                Премиум аккаунт
              </div>
              <p className="user-join-date">С нами с 12 января 2024</p>
            </div>
          </div>

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Правая колонка - Настройки */}
        <div className="profile-content">
          {/* Личная информация */}
          <div className="settings-section">
            <div className="section-header">
              <h2>Личная информация</h2>
              <p>Управление вашими персональными данными</p>
            </div>
            
            <div className="settings-fields">
              <div className="field-row">
                <label className="field-label">Имя</label>
                <div className="field-value">
                  <span>{user?.name || 'Пользователь'}</span>
                </div>
                <button className="edit-btn">Изменить</button>
              </div>

              <div className="field-row">
                <label className="field-label">Email</label>
                <div className="field-value">
                  <span>{user?.email || 'email@example.com'}</span>
                </div>
                <button className="edit-btn">Изменить</button>
              </div>

              <div className="field-row">
                <label className="field-label">Телефон</label>
                <div className="field-value">
                  <span>+7 (999) 123-45-67</span>
                </div>
                <button className="edit-btn">Изменить</button>
              </div>
            </div>

            <div className="section-actions">
              <button className="btn-secondary">Отменить</button>
              <button className="btn-primary">Сохранить изменения</button>
            </div>
          </div>

          {/* Безопасность */}
          <div className="settings-section">
            <div className="section-header">
              <h2>Безопасность</h2>
              <p>Настройки безопасности и доступа</p>
            </div>
            
            <div className="settings-fields">
              <div className="field-row">
                <label className="field-label">Пароль</label>
                <div className="field-value">
                  <span>••••••••</span>
                </div>
                <button className="edit-btn">Сменить</button>
              </div>

              <div className="field-row">
                <label className="field-label">Двухфакторная аутентификация</label>
                <div className="field-value">
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={settings.twoFactorAuth}
                      onChange={() => handleSettingChange('twoFactorAuth')}
                    />
                    <span className="slider"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Уведомления */}
          <div className="settings-section">
            <div className="section-header">
              <h2>Уведомления</h2>
              <p>Настройка уведомлений и оповещений</p>
            </div>
            
            <div className="settings-fields">
              <div className="field-row">
                <label className="field-label">Email уведомления</label>
                <div className="field-value">
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={settings.emailNotifications}
                      onChange={() => handleSettingChange('emailNotifications')}
                    />
                    <span className="slider"></span>
                  </label>
                </div>
              </div>

              <div className="field-row">
                <label className="field-label">Push уведомления</label>
                <div className="field-value">
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={settings.pushNotifications}
                      onChange={() => handleSettingChange('pushNotifications')}
                    />
                    <span className="slider"></span>
                  </label>
                </div>
              </div>

              <div className="field-row">
                <label className="field-label">SMS уведомления</label>
                <div className="field-value">
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={settings.smsNotifications}
                      onChange={() => handleSettingChange('smsNotifications')}
                    />
                    <span className="slider"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Подписка */}
          <div className="settings-section">
            <div className="section-header">
              <h2>Подписка</h2>
              <p>Управление вашим тарифным планом</p>
            </div>
            
            <div className="settings-fields">
              <div className="field-row">
                <label className="field-label">Текущий тариф</label>
                <div className="field-value">
                  <span className="subscription-badge premium">Премиум</span>
                </div>
                <button className="btn-primary">Обновить</button>
              </div>

              <div className="field-row">
                <label className="field-label">Следующее списание</label>
                <div className="field-value">
                  <span>15 марта 2024</span>
                </div>
              </div>

              <div className="field-row">
                <label className="field-label">История платежей</label>
                <div className="field-value">
                  <button className="link-button">Просмотреть</button>
                </div>
              </div>
            </div>
          </div>

          {/* Выход */}
          <div className="settings-section">
            <div className="section-header">
              <h2>Выход из системы</h2>
              <p>Завершите текущий сеанс работы</p>
            </div>
            
            <div className="settings-fields">
              <div className="field-row">
                <label className="field-label">Выйти из аккаунта</label>
                <div className="field-value">
                  <span>Завершит текущий сеанс работы</span>
                </div>
                <button className="btn-secondary" onClick={handleLogout}>
                  Выйти
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;