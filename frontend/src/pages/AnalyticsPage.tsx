import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AICTRBoost from '../components/AICTRBoost';
import "./AnalyticsPage.css";

export default function AnalyticsPage() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('views');

  useEffect(() => {
    // Определяем активную вкладку на основе URL
    const path = location.pathname;
    if (path.includes('ctr')) setActiveTab('ctr');
    else if (path.includes('ai-forecast')) setActiveTab('ai-forecast');
    else setActiveTab('views');
  }, [location.pathname]);

  const getPageTitle = () => {
    switch (activeTab) {
      case 'views': return 'Статистика просмотров';
      case 'ctr': return 'Анализ CTR';
      case 'ai-forecast': return 'AI-Прогноз';
      default: return 'Аналитика';
    }
  };

  const getPageDescription = () => {
    switch (activeTab) {
      case 'views': return 'Детальная статистика просмотров ваших объявлений';
      case 'ctr': return 'Анализ и оптимизация кликабельности объявлений';
      case 'ai-forecast': return 'Прогнозирование эффективности на основе AI';
      default: return 'Аналитика объявлений';
    }
  };

  return (
    <div className="analytics-page">
      <div className="page-header">
        <h1>{getPageTitle()}</h1>
        <p>{getPageDescription()}</p>
      </div>

      {/* TAB CONTENT */}
      <div className="tab-content">
        {activeTab === 'views' && (
          <div className="views-content">
            <div className="content-section">
              <div className="stats-grid">
                <div className="stat-card">
                  <h3>Всего просмотров</h3>
                  <div className="stat-value">12,458</div>
                  <div className="stat-trend positive">+12%</div>
                </div>
                <div className="stat-card">
                  <h3>Уникальные посетители</h3>
                  <div className="stat-value">8,742</div>
                  <div className="stat-trend positive">+8%</div>
                </div>
                <div className="stat-card">
                  <h3>Среднее время</h3>
                  <div className="stat-value">2:18</div>
                  <div className="stat-trend positive">+15%</div>
                </div>
                <div className="stat-card">
                  <h3>Глубина просмотра</h3>
                  <div className="stat-value">3.2 стр.</div>
                  <div className="stat-trend positive">+5%</div>
                </div>
              </div>
            </div>

            <div className="content-section">
              <h2>График просмотров</h2>
              <div className="chart-placeholder">
                <p>График просмотров за последние 30 дней</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'ctr' && <AICTRBoost />}

        {activeTab === 'ai-forecast' && (
          <div className="forecast-content">
            <div className="content-section">
              <h2>AI-Прогноз эффективности</h2>
              <p>Прогнозирование результатов на основе анализа текущих данных</p>
              
              <div className="forecast-cards">
                <div className="forecast-card">
                  <h3>Прогноз CTR</h3>
                  <div className="forecast-value">6.2%</div>
                  <div className="forecast-period">через 7 дней</div>
                  <div className="confidence">Высокая точность</div>
                </div>
                
                <div className="forecast-card">
                  <h3>Прогноз просмотров</h3>
                  <div className="forecast-value">15,800</div>
                  <div className="forecast-period">через 30 дней</div>
                  <div className="confidence">Средняя точность</div>
                </div>
                
                <div className="forecast-card">
                  <h3>Прогноз дохода</h3>
                  <div className="forecast-value">145,000 ₽</div>
                  <div className="forecast-period">в этом месяце</div>
                  <div className="confidence">Высокая точность</div>
                </div>
              </div>
            </div>

            <div className="content-section">
              <h2>Рекомендации AI</h2>
              <div className="ai-recommendations">
                <div className="recommendation">
                  <div className="rec-content">
                    <h4>Оптимизируйте время публикации</h4>
                    <p>Публикуйте объявления с 19:00 до 21:00 для максимального охвата</p>
                  </div>
                </div>
                <div className="recommendation">
                  <div className="rec-content">
                    <h4>Улучшите заголовки</h4>
                    <p>Добавьте эмоциональные триггеры в 3 из 5 объявлений</p>
                  </div>
                </div>
                <div className="recommendation">
                  <div className="rec-content">
                    <h4>Обновите фотографии</h4>
                    <p>Замена главных фото увеличит CTR на 15-20%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}