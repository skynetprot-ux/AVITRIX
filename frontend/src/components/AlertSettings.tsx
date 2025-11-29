import React, { useState } from 'react';
import './AlertSettings.css';

interface AlertSettings {
  ctrDrop: boolean;
  ctrThreshold: number;
  newCompetitors: boolean;
  priceChanges: boolean;
  priceChangeThreshold: number;
  contentAging: boolean;
  agingDays: number;
  pushNotifications: boolean;
  emailNotifications: boolean;
}

const AlertSettings: React.FC = () => {
  const [settings, setSettings] = useState<AlertSettings>({
    ctrDrop: true,
    ctrThreshold: 30,
    newCompetitors: true,
    priceChanges: true,
    priceChangeThreshold: 10,
    contentAging: true,
    agingDays: 14,
    pushNotifications: true,
    emailNotifications: false
  });

  const handleToggle = (key: keyof AlertSettings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSliderChange = (key: keyof AlertSettings, value: number) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const saveSettings = () => {
    // Здесь будет логика сохранения настроек
    alert('Настройки сохранены!');
  };

  return (
    <div className="alert-settings">
      <h3>Настройки мониторинга</h3>
      
      <div className="settings-group">
        <h4>Мониторинг CTR</h4>
        <div className="setting-item">
          <div className="setting-info">
            <label>Уведомлять о падении CTR</label>
            <span>Получать уведомления когда CTR падает ниже порога</span>
          </div>
          <div className="setting-control">
            <label className="switch">
              <input 
                type="checkbox" 
                checked={settings.ctrDrop}
                onChange={() => handleToggle('ctrDrop')}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>
        
        {settings.ctrDrop && (
          <div className="setting-item nested">
            <div className="setting-info">
              <label>Порог падения CTR</label>
              <span>Уведомлять при падении CTR на {settings.ctrThreshold}% или более</span>
            </div>
            <div className="setting-control">
              <input 
                type="range" 
                min="10" 
                max="50" 
                step="5"
                value={settings.ctrThreshold}
                onChange={(e) => handleSliderChange('ctrThreshold', parseInt(e.target.value))}
                className="slider-input"
              />
              <span className="slider-value">{settings.ctrThreshold}%</span>
            </div>
          </div>
        )}
      </div>

      <div className="settings-group">
        <h4>Конкурентный анализ</h4>
        
        <div className="setting-item">
          <div className="setting-info">
            <label>Новые конкуренты</label>
            <span>Уведомлять о появлении новых конкурентов в категории</span>
          </div>
          <div className="setting-control">
            <label className="switch">
              <input 
                type="checkbox" 
                checked={settings.newCompetitors}
                onChange={() => handleToggle('newCompetitors')}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        <div className="setting-item">
          <div className="setting-info">
            <label>Изменения цен</label>
            <span>Уведомлять о значительных изменениях рыночных цен</span>
          </div>
          <div className="setting-control">
            <label className="switch">
              <input 
                type="checkbox" 
                checked={settings.priceChanges}
                onChange={() => handleToggle('priceChanges')}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        {settings.priceChanges && (
          <div className="setting-item nested">
            <div className="setting-info">
              <label>Порог изменения цен</label>
              <span>Уведомлять при изменении цен на {settings.priceChangeThreshold}% или более</span>
            </div>
            <div className="setting-control">
              <input 
                type="range" 
                min="5" 
                max="30" 
                step="5"
                value={settings.priceChangeThreshold}
                onChange={(e) => handleSliderChange('priceChangeThreshold', parseInt(e.target.value))}
                className="slider-input"
              />
              <span className="slider-value">{settings.priceChangeThreshold}%</span>
            </div>
          </div>
        )}
      </div>

      <div className="settings-group">
        <h4>Контроль актуальности</h4>
        
        <div className="setting-item">
          <div className="setting-info">
            <label>Устаревание контента</label>
            <span>Уведомлять когда объявления становятся неактуальными</span>
          </div>
          <div className="setting-control">
            <label className="switch">
              <input 
                type="checkbox" 
                checked={settings.contentAging}
                onChange={() => handleToggle('contentAging')}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        {settings.contentAging && (
          <div className="setting-item nested">
            <div className="setting-info">
              <label>Срок актуальности</label>
              <span>Считать объявление устаревшим после {settings.agingDays} дней</span>
            </div>
            <div className="setting-control">
              <input 
                type="range" 
                min="7" 
                max="30" 
                step="7"
                value={settings.agingDays}
                onChange={(e) => handleSliderChange('agingDays', parseInt(e.target.value))}
                className="slider-input"
              />
              <span className="slider-value">{settings.agingDays} дней</span>
            </div>
          </div>
        )}
      </div>

      <div className="settings-group">
        <h4>Способы уведомлений</h4>
        
        <div className="setting-item">
          <div className="setting-info">
            <label>Push-уведомления</label>
            <span>Показывать уведомления в браузере</span>
          </div>
          <div className="setting-control">
            <label className="switch">
              <input 
                type="checkbox" 
                checked={settings.pushNotifications}
                onChange={() => handleToggle('pushNotifications')}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        <div className="setting-item">
          <div className="setting-info">
            <label>Email-уведомления</label>
            <span>Отправлять уведомления на email</span>
          </div>
          <div className="setting-control">
            <label className="switch">
              <input 
                type="checkbox" 
                checked={settings.emailNotifications}
                onChange={() => handleToggle('emailNotifications')}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </div>

      <div className="settings-actions">
        <button className="save-btn" onClick={saveSettings}>
          Сохранить настройки
        </button>
      </div>
    </div>
  );
};

export default AlertSettings;