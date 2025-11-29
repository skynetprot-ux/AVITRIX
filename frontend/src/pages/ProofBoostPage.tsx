import React, { useState } from 'react';
import './ProofBoostPage.css';

const ProofBoostPage: React.FC = () => {
  const [adData, setAdData] = useState({
    title: "Продам iPhone 13 в идеальном состоянии",
    description: "Телефон как новый, все работает, коробка и документы. Торг уместен.",
    price: 45000,
    category: "Телефоны"
  });

  const [currentMetrics, setCurrentMetrics] = useState({
    views: 150,
    ctr: 2.1,
    contacts: 8,
    favorites: 12
  });

  const [predictedMetrics, setPredictedMetrics] = useState({
    views: 420,
    ctr: 4.8,
    contacts: 25,
    favorites: 38
  });

  const [improvements, setImprovements] = useState([
    { id: 1, title: "SEO-заголовок", description: "Добавлены ключевые слова для поиска", impact: "high" },
    { id: 2, title: "Продающее описание", description: "Улучшена структура и добавлены триггеры", impact: "high" },
    { id: 3, title: "Оптимальная цена", description: "Цена снижена на 7% для лучшего CTR", impact: "medium" },
    { id: 4, title: "Фото рекомендации", description: "Предложены лучшие ракурсы для фото", impact: "medium" }
  ]);

  const applyImprovements = () => {
    alert("Улучшения применены! Объявление будет обновлено в течение 5 минут.");
  };

  return (
    <div className="proof-boost-page">
      <div className="page-header">
        <h1>ProofBoost</h1>
        <p>AI-прогноз эффективности ваших объявлений до и после улучшений</p>
      </div>

      {/* Текущее объявление */}
      <div className="ad-preview-section">
        <h3>Текущее объявление</h3>
        <div className="ad-preview">
          <div className="ad-title">{adData.title}</div>
          <div className="ad-description">{adData.description}</div>
          <div className="ad-price">{adData.price.toLocaleString()} ₽</div>
          <div className="ad-category">{adData.category}</div>
        </div>
      </div>

      {/* Сравнение метрик */}
      <div className="comparison-section">
        <h3>Сравнение эффективности</h3>
        <div className="metrics-comparison">
          <div className="metrics-column current-metrics">
            <h4>Текущие показатели</h4>
            <div className="metric">
              <span className="metric-value">{currentMetrics.views}</span>
              <span className="metric-label">Просмотров</span>
            </div>
            <div className="metric">
              <span className="metric-value">{currentMetrics.ctr}%</span>
              <span className="metric-label">CTR</span>
            </div>
            <div className="metric">
              <span className="metric-value">{currentMetrics.contacts}</span>
              <span className="metric-label">Контактов</span>
            </div>
            <div className="metric">
              <span className="metric-value">{currentMetrics.favorites}</span>
              <span className="metric-label">В избранное</span>
            </div>
          </div>

          <div className="prediction-arrow">
            <div className="arrow-icon">→</div>
            <div className="arrow-text">После AVITRIX</div>
          </div>

          <div className="metrics-column predicted-metrics">
            <h4>После улучшений</h4>
            <div className="metric">
              <span className="metric-value">{predictedMetrics.views}</span>
              <span className="metric-label">Просмотров</span>
              <span className="metric-change positive">+180%</span>
            </div>
            <div className="metric">
              <span className="metric-value">{predictedMetrics.ctr}%</span>
              <span className="metric-label">CTR</span>
              <span className="metric-change positive">+128%</span>
            </div>
            <div className="metric">
              <span className="metric-value">{predictedMetrics.contacts}</span>
              <span className="metric-label">Контактов</span>
              <span className="metric-change positive">+212%</span>
            </div>
            <div className="metric">
              <span className="metric-value">{predictedMetrics.favorites}</span>
              <span className="metric-label">В избранное</span>
              <span className="metric-change positive">+216%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Предлагаемые улучшения */}
      <div className="improvements-section">
        <h3>Предлагаемые улучшения</h3>
        <div className="improvements-grid">
          {improvements.map(improvement => (
            <div key={improvement.id} className={`improvement-card ${improvement.impact}`}>
              <div className="improvement-header">
                <h4>{improvement.title}</h4>
                <span className={`impact-badge ${improvement.impact}`}>
                  {improvement.impact === 'high' ? 'Высокий эффект' : 'Средний эффект'}
                </span>
              </div>
              <p>{improvement.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Уверенность системы */}
      <div className="confidence-section">
        <h3>Вероятность улучшений</h3>
        <div className="confidence-metrics">
          <div className="confidence-item">
            <div className="confidence-info">
              <span>Увеличение просмотров</span>
              <span>92%</span>
            </div>
            <div className="confidence-bar">
              <div className="confidence-fill" style={{width: '92%'}}></div>
            </div>
          </div>
          <div className="confidence-item">
            <div className="confidence-info">
              <span>Рост CTR</span>
              <span>87%</span>
            </div>
            <div className="confidence-bar">
              <div className="confidence-fill" style={{width: '87%'}}></div>
            </div>
          </div>
          <div className="confidence-item">
            <div className="confidence-info">
              <span>Больше контактов</span>
              <span>78%</span>
            </div>
            <div className="confidence-bar">
              <div className="confidence-fill" style={{width: '78%'}}></div>
            </div>
          </div>
          <div className="confidence-item">
            <div className="confidence-info">
              <span>Добавлений в избранное</span>
              <span>85%</span>
            </div>
            <div className="confidence-bar">
              <div className="confidence-fill" style={{width: '85%'}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Призыв к действию */}
      <div className="action-section">
        <div className="action-card">
          <h3>Готовы увеличить продажи?</h3>
          <p>Примените улучшения и получите результат уже через 24 часа</p>
          <button className="btn-primary large" onClick={applyImprovements}>
            🚀 Применить улучшения
          </button>
          <div className="action-stats">
            <div className="stat">
              <strong>15,247</strong>
              <span>улучшенных объявлений</span>
            </div>
            <div className="stat">
              <strong>94%</strong>
              <span>довольных клиентов</span>
            </div>
            <div className="stat">
              <strong>2.8×</strong>
              <span>средний рост просмотров</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProofBoostPage;