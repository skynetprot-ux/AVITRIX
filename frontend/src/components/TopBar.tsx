import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './TopBar.css';

type TopBarProps = {
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
};

const TopBar: React.FC<TopBarProps> = ({ onToggleSidebar, isSidebarOpen }) => {
  const navigate = useNavigate();
  const { isLoggedIn, user, logout } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  
  const notificationsRef = useRef<HTMLDivElement>(null);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Search:', searchQuery);
    }
  };

  const notifications = [
    { id: 1, text: 'CTR объявления упал на 45%', read: false },
    { id: 2, text: 'Новые конкуренты в категории', read: false },
    { id: 3, text: 'Цены изменились на рынке', read: true }
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleProfileClick = () => {
    setShowProfileMenu(!showProfileMenu);
    setShowNotifications(false);
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  const handleLogout = () => {
    logout();
    setShowProfileMenu(false);
    navigate('/');
  };

  // Закрытие меню при клике вне его области
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <button className="mobile-menu-button" onClick={onToggleSidebar}>
          {isSidebarOpen ? 'Скрыть меню' : 'Меню'}
        </button>
        <div className="logo" onClick={() => navigate('/')} style={{cursor: 'pointer'}}>
          <span className="logo-text">AVITRIX</span>
          <span className="logo-subtitle">Профессиональная аналитика объявлений</span>
        </div>
      </div>

      <div className="top-bar-center">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Введите запрос... (дача, айфон...)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">
            Найти
          </button>
        </form>
      </div>

      <div className="top-bar-right">
        {isLoggedIn ? (
          // Залогиненное состояние
          <>
            <button className="nav-button" onClick={() => navigate('/ads')}>
              Мои объявления
            </button>
            <button className="nav-button primary" onClick={() => navigate('/create-ad')}>
              Создать
            </button>
            
            <div className="notifications-container" ref={notificationsRef}>
              <button 
                className="notifications-button"
                onClick={() => {
                  setShowNotifications(!showNotifications);
                  setShowProfileMenu(false);
                }}
              >
                Уведомления
                {unreadCount > 0 && <span className="notification-badge">{unreadCount}</span>}
              </button>
              
              {showNotifications && (
                <div className="notifications-dropdown">
                  <div className="notifications-header">
                    <h3>Уведомления</h3>
                    <button 
                      className="close-notifications"
                      onClick={() => setShowNotifications(false)}
                    >
                      ×
                    </button>
                  </div>
                  <div className="notifications-list">
                    {notifications.map(notification => (
                      <div 
                        key={notification.id} 
                        className={`notification-item ${!notification.read ? 'unread' : ''}`}
                        onClick={() => {
                          navigate('/notifications');
                          setShowNotifications(false);
                        }}
                      >
                        {notification.text}
                      </div>
                    ))}
                  </div>
                  <div className="notifications-footer">
                    <button 
                      className="view-all-button"
                      onClick={() => {
                        navigate('/notifications');
                        setShowNotifications(false);
                      }}
                    >
                      Все уведомления
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="user-profile-menu" ref={profileMenuRef}>
              <div 
                className={`user-profile-button ${showProfileMenu ? 'active' : ''}`}
                onClick={handleProfileClick}
              >
                <div className="user-avatar">
                  <span>{user?.name ? user.name.charAt(0).toUpperCase() : 'П'}</span>
                </div>
                <span className="user-name">{user?.name || 'Пользователь'}</span>
                <span className={`dropdown-arrow ${showProfileMenu ? 'open' : ''}`}>▼</span>
              </div>
              
              {showProfileMenu && (
                <div className="user-dropdown">
                  <button onClick={handleLogout} className="dropdown-item logout">
                    Выйти из профиля
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          // Незалогиненное состояние
          <>
            <button className="nav-button" onClick={handleLogin}>
              Вход
            </button>
            <button className="nav-button primary" onClick={handleRegister}>
              Регистрация
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TopBar;