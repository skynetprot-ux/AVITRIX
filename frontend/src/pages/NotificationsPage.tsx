import React, { useState } from 'react';
import './NotificationsPage.css';

interface Notification {
  id: string;
  type: 'warning' | 'info' | 'critical' | 'success';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  relatedAd?: string;
}

const NotificationsPage: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'warning',
      title: 'CTR упал',
      message: 'CTR объявления "iPhone 13 Pro" упал на 45% за последние 3 дня',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
      read: false,
      relatedAd: 'iPhone 13 Pro'
    },
    {
      id: '2',
      type: 'critical',
      title: 'Новые конкуренты',
      message: 'В вашей категории появилось 5 новых конкурентов с более низкими ценами',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5),
      read: false
    },
    {
      id: '3',
      type: 'info',
      title: 'Цены изменились',
      message: 'Средняя цена на ваш товар упала на 12% на рынке',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
      read: true
    },
    {
      id: '4',
      type: 'success',
      title: 'Объявление оптимизировано',
      message: 'AVITRIX автоматически улучшил ваше объявление "Диван угловой"',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48),
      read: true,
      relatedAd: 'Диван угловой'
    }
  ]);

  const [filter, setFilter] = useState<'all' | 'unread' | 'critical'>('all');

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, read: true })));
  };

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };

  const filteredNotifications = notifications.filter(notif => {
    if (filter === 'unread') return !notif.read;
    if (filter === 'critical') return notif.type === 'critical';
    return true;
  });

  const unreadCount = notifications.filter(notif => !notif.read).length;

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'warning': return '▲';
      case 'critical': return '●';
      case 'info': return '■';
      case 'success': return '✓';
      default: return '●';
    }
  };

  const getTypeClass = (type: string) => {
    return `notification-card ${type}`;
  };

  return (
    <div className="notifications-page">
      <div className="notifications-header">
        <h1>Авито-сигналы</h1>
        <div className="header-actions">
          <span className="unread-badge">{unreadCount} непрочитанных</span>
          <button className="mark-all-btn" onClick={markAllAsRead}>
            Отметить все как прочитанные
          </button>
        </div>
      </div>

      <div className="notifications-controls">
        <div className="filter-buttons">
          <button 
            className={filter === 'all' ? 'active' : ''} 
            onClick={() => setFilter('all')}
          >
            Все уведомления
          </button>
          <button 
            className={filter === 'unread' ? 'active' : ''} 
            onClick={() => setFilter('unread')}
          >
            Непрочитанные
          </button>
          <button 
            className={filter === 'critical' ? 'active' : ''} 
            onClick={() => setFilter('critical')}
          >
            Критические
          </button>
        </div>
      </div>

      <div className="notifications-list">
        {filteredNotifications.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">—</div>
            <h3>Уведомлений нет</h3>
            <p>Все важные события будут отображаться здесь</p>
          </div>
        ) : (
          filteredNotifications.map(notification => (
            <div key={notification.id} className={getTypeClass(notification.type)}>
              <div className="notification-icon">
                {getTypeIcon(notification.type)}
              </div>
              <div className="notification-content">
                <div className="notification-header">
                  <h4>{notification.title}</h4>
                  <span className="notification-time">
                    {notification.timestamp.toLocaleDateString()} в{' '}
                    {notification.timestamp.toLocaleTimeString()}
                  </span>
                </div>
                <p>{notification.message}</p>
                {notification.relatedAd && (
                  <span className="related-ad">Объявление: {notification.relatedAd}</span>
                )}
              </div>
              <div className="notification-actions">
                {!notification.read && (
                  <button 
                    className="mark-read-btn"
                    onClick={() => markAsRead(notification.id)}
                    title="Отметить как прочитанное"
                  >
                    ✓
                  </button>
                )}
                <button 
                  className="delete-btn"
                  onClick={() => deleteNotification(notification.id)}
                  title="Удалить"
                >
                  ×
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NotificationsPage;