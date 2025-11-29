import React from 'react';
import "./DashboardPage.css";

export default function DashboardPage() {
  return (
    <div className="dashboard-page">
      {/* HERO BLOCK */}
      <div className="dashboard-hero fade-in">
        <h1 className="dashboard-title">
          ИИ для Авито, который делает ваши объявления продающими
        </h1>

        <div className="title-underline"></div>

        <p className="hero-text">
          Увеличивайте просмотры, поднимайте CTR, улучшайте SEO и обходите конкурентов.
          AVITRIX — ваш ИИ-авитолог 24/7.
        </p>

        <div className="hero-buttons">
          <button className="btn primary pulse" onClick={() => window.location.href = '/ai'}>
            🚀 Начать оптимизацию
          </button>
          <button className="btn secondary" onClick={() => window.location.href = '/analytics'}>
            📊 Смотреть аналитику
          </button>
        </div>

        <div className="stat-row">
          <div className="stat-item">
            <span className="stat-label">Активные объявления</span>
            <span className="stat-value">154</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Средний CTR</span>
            <span className="stat-value">4,9%</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Доход за месяц</span>
            <span className="stat-value">106 800 ₽</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Экономия времени</span>
            <span className="stat-value">87%</span>
          </div>
        </div>
      </div>

      {/* FEATURES GRID */}
      <div className="features-section">
        <h2>Возможности AVITRIX</h2>
        <div className="features-grid">
          <div className="feature-card fade-in delay-1">
            <div className="feature-icon">🚀</div>
            <h3>AI Autopilot</h3>
            <p>Мгновенно улучшайте объявления с помощью искусственного интеллекта</p>
            <button 
              className="btn outline"
              onClick={() => window.location.href = '/ai'}
            >
              Попробовать
            </button>
          </div>

          <div className="feature-card fade-in delay-2">
            <div className="feature-icon">🖼️</div>
            <h3>Photo Enhancer</h3>
            <p>Анализ и улучшение фотографий для максимального CTR</p>
            <button 
              className="btn outline"
              onClick={() => window.location.href = '/ai'}
            >
              Попробовать
            </button>
          </div>

          <div className="feature-card fade-in delay-3">
            <div className="feature-icon">📈</div>
            <h3>CTR Boost</h3>
            <p>Увеличивайте кликабельность объявлений на основе данных</p>
            <button 
              className="btn outline"
              onClick={() => window.location.href = '/analytics'}
            >
              Попробовать
            </button>
          </div>

          <div className="feature-card fade-in delay-4">
            <div className="feature-icon">🎯</div>
            <h3>Анализ конкурентов</h3>
            <p>Изучайте стратегии конкурентов и обходите их</p>
            <button 
              className="btn outline"
              onClick={() => window.location.href = '/competitors'}
            >
              Попробовать
            </button>
          </div>
        </div>
      </div>

      {/* RECENT ACTIVITY */}
      <div className="activity-section">
        <h2>Последняя активность</h2>
        <div className="activity-list">
          <div className="activity-item">
            <div className="activity-icon">✅</div>
            <div className="activity-content">
              <p>Объявление "iPhone 13 Pro" оптимизировано</p>
              <span className="activity-time">2 часа назад</span>
            </div>
            <div className="activity-ctr">+12% CTR</div>
          </div>
          <div className="activity-item">
            <div className="activity-icon">📸</div>
            <div className="activity-content">
              <p>Фотографии для "Квартира в центре" улучшены</p>
              <span className="activity-time">5 часов назад</span>
            </div>
            <div className="activity-ctr">+8% просмотров</div>
          </div>
          <div className="activity-item">
            <div className="activity-icon">🔍</div>
            <div className="activity-content">
              <p>Проанализированы 15 конкурентов в категории "Электроника"</p>
              <span className="activity-time">Вчера</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}