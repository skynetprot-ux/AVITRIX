import React, { useState } from 'react';
import './AutoposterPage.css';

const AutoposterPage: React.FC = () => {
  const [settings, setSettings] = useState({
    autoPublish: false,
    autoUpdate: false,
    optimalTimes: true,
    maxAdsPerDay: 5,
    rotationEnabled: true,
    aTesting: false
  });

  const [templates, setTemplates] = useState([
    { id: 1, name: 'Шаблон электроники', category: 'Электроника', active: true, adsCount: 24 },
    { id: 2, name: 'Шаблон недвижимости', category: 'Недвижимость', active: false, adsCount: 15 }
  ]);

  const handleSettingChange = (setting: keyof typeof settings) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  return (
    <div className="autoposter-page">
      <div className="page-content-wrapper">
        <div className="autoposter-header">
          <h1>AI Autoposter</h1>
          <p>Автоматическое управление и публикация объявлений</p>
        </div>

        <div className="autoposter-content">
          {/* Настройки автоматизации */}
          <div className="settings-section">
            <h2>Настройки автоматизации</h2>
            
            <div className="settings-grid">
              <div className="setting-item">
                <label className="setting-checkbox">
                  <input 
                    type="checkbox" 
                    checked={settings.autoPublish}
                    onChange={(e) => setSettings({...settings, autoPublish: e.target.checked})}
                  />
                  <span className="checkmark"></span>
                  <div className="setting-content">
                    <strong>Автопубликация</strong>
                    <span>Автоматически публиковать новые объявления</span>
                  </div>
                </label>
              </div>

              <div className="setting-item">
                <label className="setting-checkbox">
                  <input 
                    type="checkbox" 
                    checked={settings.autoUpdate}
                    onChange={(e) => setSettings({...settings, autoUpdate: e.target.checked})}
                  />
                  <span className="checkmark"></span>
                  <div className="setting-content">
                    <strong>Автообновление</strong>
                    <span>Автоматически обновлять существующие объявления</span>
                  </div>
                </label>
              </div>

              <div className="setting-item">
                <label className="setting-checkbox">
                  <input 
                    type="checkbox" 
                    checked={settings.optimalTimes}
                    onChange={(e) => setSettings({...settings, optimalTimes: e.target.checked})}
                  />
                  <span className="checkmark"></span>
                  <div className="setting-content">
                    <strong>Оптимальное время</strong>
                    <span>Публиковать в лучшее время для просмотров</span>
                  </div>
                </label>
              </div>

              <div className="setting-item">
                <label className="setting-checkbox">
                  <input 
                    type="checkbox" 
                    checked={settings.rotationEnabled}
                    onChange={(e) => setSettings({...settings, rotationEnabled: e.target.checked})}
                  />
                  <span className="checkmark"></span>
                  <div className="setting-content">
                    <strong>Ротация контента</strong>
                    <span>Автоматически менять фото и заголовки</span>
                  </div>
                </label>
              </div>
            </div>

            <div className="setting-controls">
              <div className="form-group">
                <label>Максимум объявлений в день</label>
                <input 
                  type="number" 
                  value={settings.maxAdsPerDay}
                  onChange={(e) => setSettings({...settings, maxAdsPerDay: parseInt(e.target.value)})}
                  min="1"
                  max="50"
                  className="number-input"
                />
              </div>
            </div>
          </div>

          {/* Шаблоны кампаний */}
          <div className="templates-section">
            <div className="section-header">
              <h2>Шаблоны кампаний</h2>
              <button className="btn-primary">Создать новый шаблон</button>
            </div>
            
            <div className="templates-list">
              {templates.map(template => (
                <div key={template.id} className={`template-card ${template.active ? 'active' : ''}`}>
                  <div className="template-info">
                    <h3>{template.name}</h3>
                    <div className="template-details">
                      <span className="template-category">Категория: {template.category}</span>
                      <span className="template-ads">{template.adsCount} объявлений</span>
                    </div>
                  </div>
                  <div className="template-actions">
                    <button className="btn-secondary">Редактировать</button>
                    <button className="btn-secondary">Статистика</button>
                    <label className="toggle-switch">
                      <input 
                        type="checkbox" 
                        checked={template.active}
                        onChange={() => setTemplates(templates.map(t => 
                          t.id === template.id ? {...t, active: !t.active} : t
                        ))}
                      />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Статистика */}
          <div className="stats-section">
            <h2>Статистика Autoposter</h2>
            
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-value">24</div>
                <div className="stat-label">Опубликовано сегодня</div>
              </div>
              
              <div className="stat-card">
                <div className="stat-value">156</div>
                <div className="stat-label">Всего за неделю</div>
              </div>
              
              <div className="stat-card">
                <div className="stat-value">87%</div>
                <div className="stat-label">Эффективность</div>
              </div>
              
              <div className="stat-card">
                <div className="stat-value">12</div>
                <div className="stat-label">Автообновлений</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoposterPage;