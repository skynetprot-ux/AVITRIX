import React, { useState } from 'react';
import './MultiAccountPage.css';

interface Account {
  id: string;
  name: string;
  avatar?: string;
  adCount: number;
  ctr: number;
  views: number;
  status: 'active' | 'paused' | 'error';
  lastActive: string;
}

const MultiAccountPage: React.FC = () => {
  const [accounts, setAccounts] = useState<Account[]>([
    { 
      id: '1', 
      name: 'Основной аккаунт', 
      adCount: 24, 
      ctr: 4.2, 
      views: 1240, 
      status: 'active', 
      lastActive: '2024-01-15' 
    },
    { 
      id: '2', 
      name: 'Бизнес-аккаунт', 
      adCount: 156, 
      ctr: 3.8, 
      views: 8920, 
      status: 'active', 
      lastActive: '2024-01-15' 
    },
    { 
      id: '3', 
      name: 'Тестовый', 
      adCount: 5, 
      ctr: 1.2, 
      views: 45, 
      status: 'paused', 
      lastActive: '2024-01-10' 
    },
  ]);

  const [selectedAccounts, setSelectedAccounts] = useState<string[]>([]);

  const handleBulkAction = (action: string) => {
    console.log(`Выполняем действие ${action} для аккаунтов:`, selectedAccounts);
    // Здесь будет логика массовых действий
    alert(`Массовое действие: ${action} для выбранных аккаунтов`);
  };

  const toggleAccountSelection = (accountId: string) => {
    if (selectedAccounts.includes(accountId)) {
      setSelectedAccounts(selectedAccounts.filter(id => id !== accountId));
    } else {
      setSelectedAccounts([...selectedAccounts, accountId]);
    }
  };

  const selectAllAccounts = () => {
    if (selectedAccounts.length === accounts.length) {
      setSelectedAccounts([]);
    } else {
      setSelectedAccounts(accounts.map(account => account.id));
    }
  };

  const addNewAccount = () => {
    const newAccount: Account = {
      id: (accounts.length + 1).toString(),
      name: `Новый аккаунт ${accounts.length + 1}`,
      adCount: 0,
      ctr: 0,
      views: 0,
      status: 'active',
      lastActive: new Date().toISOString().split('T')[0]
    };
    setAccounts([...accounts, newAccount]);
  };

  return (
    <div className="multi-account-page">
      <div className="page-header">
        <div className="header-content">
          <h1>Управление аккаунтами</h1>
          <p>Массовое управление всеми вашими аккаунтами Авито</p>
        </div>
        <button className="btn-primary" onClick={addNewAccount}>
          <span className="btn-icon">+</span>
          Добавить аккаунт
        </button>
      </div>

      <div className="accounts-stats">
        <div className="stat-card">
          <div className="stat-icon">👥</div>
          <div className="stat-content">
            <h3>Всего аккаунтов</h3>
            <span className="stat-value">{accounts.length}</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">📈</div>
          <div className="stat-content">
            <h3>Активных</h3>
            <span className="stat-value">{accounts.filter(a => a.status === 'active').length}</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">⏸️</div>
          <div className="stat-content">
            <h3>На паузе</h3>
            <span className="stat-value">{accounts.filter(a => a.status === 'paused').length}</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">📊</div>
          <div className="stat-content">
            <h3>Объявлений</h3>
            <span className="stat-value">{accounts.reduce((sum, account) => sum + account.adCount, 0)}</span>
          </div>
        </div>
      </div>

      {selectedAccounts.length > 0 && (
        <div className="bulk-actions-panel">
          <div className="bulk-header">
            <h3>Выбрано аккаунтов: {selectedAccounts.length}</h3>
            <span className="clear-selection" onClick={() => setSelectedAccounts([])}>
              Очистить
            </span>
          </div>
          <div className="action-buttons">
            <button className="btn-action" onClick={() => handleBulkAction('analyze')}>
              <span>📊</span>
              Анализировать все
            </button>
            <button className="btn-action" onClick={() => handleBulkAction('improve')}>
              <span>✨</span>
              Улучшить все
            </button>
            <button className="btn-action" onClick={() => handleBulkAction('pause')}>
              <span>⏸️</span>
              Приостановить
            </button>
            <button className="btn-action" onClick={() => handleBulkAction('activate')}>
              <span>▶️</span>
              Активировать
            </button>
          </div>
        </div>
      )}

      <div className="accounts-section">
        <div className="section-header">
          <h2>Мои аккаунты</h2>
          <div className="select-all">
            <input 
              type="checkbox"
              checked={selectedAccounts.length === accounts.length && accounts.length > 0}
              onChange={selectAllAccounts}
            />
            <span>Выбрать все</span>
          </div>
        </div>

        <div className="accounts-grid">
          {accounts.map(account => (
            <div key={account.id} className={`account-card ${selectedAccounts.includes(account.id) ? 'selected' : ''}`}>
              <div className="account-header">
                <input 
                  type="checkbox"
                  checked={selectedAccounts.includes(account.id)}
                  onChange={() => toggleAccountSelection(account.id)}
                  className="account-checkbox"
                />
                <div className="account-avatar">
                  {account.avatar ? (
                    <img src={account.avatar} alt={account.name} />
                  ) : (
                    <div className="avatar-placeholder">
                      {account.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div className="account-info">
                  <h3>{account.name}</h3>
                  <div className="account-meta">
                    <span className={`status-badge ${account.status}`}>
                      {account.status === 'active' ? 'Активен' : 
                       account.status === 'paused' ? 'На паузе' : 'Ошибка'}
                    </span>
                    <span className="last-active">Активен: {account.lastActive}</span>
                  </div>
                </div>
              </div>
              
              <div className="account-stats">
                <div className="stat">
                  <span className="stat-value">{account.adCount}</span>
                  <span className="stat-label">Объявлений</span>
                </div>
                <div className="stat">
                  <span className="stat-value">{account.ctr}%</span>
                  <span className="stat-label">CTR</span>
                </div>
                <div className="stat">
                  <span className="stat-value">{account.views}</span>
                  <span className="stat-label">Просмотров</span>
                </div>
              </div>

              <div className="account-actions">
                <button className="btn-secondary">
                  <span>📊</span>
                  Анализ
                </button>
                <button className="btn-primary">
                  <span>✨</span>
                  Улучшить
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MultiAccountPage;