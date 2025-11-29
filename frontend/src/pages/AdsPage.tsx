import React from 'react';
import "./AdsPage.css";

export default function AdsPage() {
  return (
    <div className="ads-page">
      <div className="page-header">
        <h1>Мои объявления</h1>
        <p>Управление всеми вашими объявлениями на Авито</p>
      </div>
      
      <div className="content-section">
        <h2>Активные объявления</h2>
        <div className="ads-grid">
          <div className="ad-card">
            <h3>iPhone 13 Pro Max 256GB</h3>
            <p>Отличное состояние, гарантия 2 месяца</p>
            <div className="ad-metrics">
              <span>Просмотры: 150</span>
              <span>CTR: 4.5%</span>
            </div>
            <button className="btn primary">Оптимизировать</button>
          </div>
          
          <div className="ad-card">
            <h3>Квартира 2-к в центре</h3>
            <p>Современный ремонт, вся техника</p>
            <div className="ad-metrics">
              <span>Просмотры: 89</span>
              <span>CTR: 3.2%</span>
            </div>
            <button className="btn primary">Оптимизировать</button>
          </div>
        </div>
      </div>
    </div>
  );
}