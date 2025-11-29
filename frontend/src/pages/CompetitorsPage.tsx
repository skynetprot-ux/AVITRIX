import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AICompetitorAnalyzer from '../components/AICompetitorAnalyzer';
import "./CompetitorsPage.css";

export default function CompetitorsPage() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('analysis');

  useEffect(() => {
    // Определяем активную вкладку на основе URL
    const path = location.pathname;
    if (path.includes('price-history')) setActiveTab('price-history');
    else if (path.includes('position-comparison')) setActiveTab('position-comparison');
    else if (path.includes('ai-report')) setActiveTab('ai-report');
    else setActiveTab('analysis');
  }, [location.pathname]);

  const getPageTitle = () => {
    switch (activeTab) {
      case 'analysis': return 'Анализ конкурентов';
      case 'price-history': return 'История цен';
      case 'position-comparison': return 'Сравнение позиций';
      case 'ai-report': return 'AI-отчёт';
      default: return 'Конкуренты';
    }
  };

  const getPageDescription = () => {
    switch (activeTab) {
      case 'analysis': return 'Глубокий анализ конкурентов и стратегия превосходства';
      case 'price-history': return 'Отслеживание изменения цен у конкурентов';
      case 'position-comparison': return 'Сравнение позиций в поисковой выдаче';
      case 'ai-report': return 'Комплексный анализ конкурентной среды';
      default: return 'Анализ конкурентов';
    }
  };

  return (
    <div className="competitors-page">
      <div className="page-header">
        <h1>{getPageTitle()}</h1>
        <p>{getPageDescription()}</p>
      </div>

      {/* TAB CONTENT */}
      <div className="tab-content">
        {activeTab === 'analysis' && <AICompetitorAnalyzer />}

        {activeTab === 'price-history' && (
          <div className="price-history-content">
            <div className="content-section">
              <h2>История цен конкурентов</h2>
              <div className="price-chart">
                <div className="chart-placeholder">
                  <p>График изменения цен за последние 30 дней</p>
                </div>
              </div>

              <div className="price-alerts">
                <h3>Ценовые алерты</h3>
                <div className="alert-list">
                  <div className="alert-item">
                    <span className="alert-text">Конкурент #1 снизил цену на 15%</span>
                    <span className="alert-time">2 часа назад</span>
                  </div>
                  <div className="alert-item">
                    <span className="alert-text">Конкурент #2 добавил акцию</span>
                    <span className="alert-time">5 часов назад</span>
                  </div>
                  <div className="alert-item">
                    <span className="alert-text">Новый конкурент в категории</span>
                    <span className="alert-time">Вчера</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'position-comparison' && (
          <div className="position-comparison-content">
            <div className="content-section">
              <h2>Сравнение позиций</h2>
              <div className="comparison-table">
                <table>
                  <thead>
                    <tr>
                      <th>Ключевое слово</th>
                      <th>Ваша позиция</th>
                      <th>Лучший конкурент</th>
                      <th>Разрыв</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>iPhone 13 Pro</td>
                      <td>3</td>
                      <td>1 (Конкурент #1)</td>
                      <td className="gap-high">-2 позиции</td>
                    </tr>
                    <tr>
                      <td>MacBook Air</td>
                      <td>1</td>
                      <td>2 (Конкурент #3)</td>
                      <td className="gap-positive">+1 позиция</td>
                    </tr>
                    <tr>
                      <td>Samsung Galaxy</td>
                      <td>5</td>
                      <td>2 (Конкурент #2)</td>
                      <td className="gap-high">-3 позиции</td>
                    </tr>
                    <tr>
                      <td>iPad Pro</td>
                      <td>2</td>
                      <td>4 (Конкурент #1)</td>
                      <td className="gap-positive">+2 позиции</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'ai-report' && (
          <div className="ai-report-content">
            <div className="content-section">
              <h2>AI-отчёт по конкурентам</h2>
              <div className="report-summary">
                <div className="summary-card">
                  <h3>Общая оценка</h3>
                  <div className="score">7.8/10</div>
                  <p>Ваша конкурентная позиция выше среднего</p>
                </div>
                
                <div className="summary-card">
                  <h3>Рекомендации</h3>
                  <ul className="recommendations-list">
                    <li>Снизить цены на 5-7% для конкуренции с #1</li>
                    <li>Улучшить SEO-заголовки для ключевых запросов</li>
                    <li>Добавить больше фотографий высокого качества</li>
                    <li>Оптимизировать время публикации</li>
                  </ul>
                </div>
              </div>

              <div className="threat-analysis">
                <h3>Анализ угроз</h3>
                <div className="threat-level medium">
                  <h4>Средний уровень угроз</h4>
                  <p>Конкурент #1 активно наращивает присутствие в вашей нише</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}