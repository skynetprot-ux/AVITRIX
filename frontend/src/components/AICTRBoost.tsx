import React, { useState } from 'react';
import './AICTRBoost.css';

export default function AICTRBoost() {
  const [currentCTR, setCurrentCTR] = useState<number>(2.5);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [optimizationResults, setOptimizationResults] = useState<any>(null);
  const [adData, setAdData] = useState({
    title: '',
    price: '',
    category: '',
    description: ''
  });

  const analyzeCTR = async () => {
    if (!adData.title.trim()) return;
    
    setIsAnalyzing(true);
    
    // Имитация анализа CTR AI
    setTimeout(() => {
      const mockResults = {
        predictedCTR: Math.round((Math.random() * 5 + 5) * 10) / 10,
        improvements: [
          {
            factor: "Заголовок",
            current: adData.title,
            suggested: `🚀 ${adData.title.toUpperCase()} - ВЫГОДНО!`,
            impact: "+15%",
            reason: "Добавлены эмоциональные триггеры и символы"
          },
          {
            factor: "Цена",
            current: adData.price ? `${adData.price} ₽` : "Не указана",
            suggested: adData.price ? `${Math.round(parseInt(adData.price) * 0.95)} ₽` : "Рекомендуем указать",
            impact: "+8%",
            reason: "Психологически привлекательная цена (оканчивается на 9 или 5)"
          },
          {
            factor: "Время публикации",
            current: "Любое время",
            suggested: "19:00 - 21:00",
            impact: "+12%",
            reason: "Пиковая активность пользователей Авито"
          },
          {
            factor: "Длина описания",
            current: adData.description.length > 0 ? `${adData.description.length} символов` : "Нет описания",
            suggested: "250-400 символов",
            impact: "+10%",
            reason: "Оптимальная длина для вовлечения и SEO"
          }
        ],
        abTestSuggestions: [
          {
            title: `🔥 ГОРЯЧЕЕ ПРЕДЛОЖЕНИЕ! ${adData.title}`,
            description: "Только сегодня специальная цена! Успей купить выгодно!",
            expectedCTR: "5.8%"
          },
          {
            title: `⭐ ХИТ ПРОДАЖ ${adData.title} ⭐`,
            description: "Популярная модель! Высокий спрос! Отличное состояние!",
            expectedCTR: "6.2%"
          },
          {
            title: `🎯 ${adData.title} - ЦЕНА СНИЖЕНА!`,
            description: "Срочная продажа! Прекрасное состояние! Торг уместен!",
            expectedCTR: "5.5%"
          }
        ],
        heatmapData: [
          { time: "08:00", ctr: 2.1 },
          { time: "12:00", ctr: 3.2 },
          { time: "16:00", ctr: 4.1 },
          { time: "19:00", ctr: 5.8 },
          { time: "21:00", ctr: 6.2 },
          { time: "23:00", ctr: 4.5 }
        ]
      };
      
      setOptimizationResults(mockResults);
      setIsAnalyzing(false);
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setAdData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="ai-ctr-boost">
      <div className="ctr-header">
        <h2>📈 AI CTR Boost</h2>
        <p>Максимизируйте кликабельность ваших объявлений с помощью ИИ</p>
      </div>

      <div className="ctr-input-section">
        <div className="input-grid">
          <div className="input-group">
            <label>Заголовок объявления</label>
            <input
              type="text"
              placeholder="Например: iPhone 13 Pro 256GB"
              value={adData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
            />
          </div>
          
          <div className="input-group">
            <label>Цена (₽)</label>
            <input
              type="number"
              placeholder="Например: 45000"
              value={adData.price}
              onChange={(e) => handleInputChange('price', e.target.value)}
            />
          </div>
          
          <div className="input-group">
            <label>Категория</label>
            <select 
              value={adData.category}
              onChange={(e) => handleInputChange('category', e.target.value)}
            >
              <option value="">Выберите категорию</option>
              <option value="electronics">Электроника</option>
              <option value="realestate">Недвижимость</option>
              <option value="cars">Автомобили</option>
              <option value="clothes">Одежда</option>
              <option value="services">Услуги</option>
            </select>
          </div>
          
          <div className="input-group full-width">
            <label>Описание</label>
            <textarea
              placeholder="Опишите ваш товар или услугу..."
              rows={3}
              value={adData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
            />
          </div>
        </div>
        
        <button 
          className={`analyze-ctr-btn ${isAnalyzing ? 'loading' : ''}`}
          onClick={analyzeCTR}
          disabled={isAnalyzing || !adData.title.trim()}
        >
          {isAnalyzing ? 'Анализируем CTR...' : 'Оптимизировать CTR'}
        </button>
      </div>

      {isAnalyzing && (
        <div className="analysis-progress">
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
          <p>AI анализирует потенциал CTR...</p>
        </div>
      )}

      {optimizationResults && (
        <div className="ctr-results">
          {/* Прогноз CTR */}
          <div className="ctr-prediction-card">
            <div className="prediction-header">
              <h3>🎯 Прогноз CTR</h3>
              <div className="ctr-comparison">
                <div className="current-ctr">
                  <span className="label">Текущий CTR</span>
                  <span className="value">{currentCTR}%</span>
                </div>
                <div className="arrow">→</div>
                <div className="predicted-ctr">
                  <span className="label">Прогнозируемый CTR</span>
                  <span className="value highlight">{optimizationResults.predictedCTR}%</span>
                </div>
              </div>
            </div>
            <div className="improvement-badge">
              +{Math.round((optimizationResults.predictedCTR - currentCTR) / currentCTR * 100)}% улучшение
            </div>
          </div>

          {/* Рекомендации по улучшению */}
          <div className="improvements-section">
            <h3>💡 Рекомендации для увеличения CTR</h3>
            <div className="improvements-grid">
              {optimizationResults.improvements.map((improvement: any, index: number) => (
                <div key={index} className="improvement-card">
                  <div className="improvement-header">
                    <span className="factor">{improvement.factor}</span>
                    <span className="impact positive">{improvement.impact}</span>
                  </div>
                  <div className="comparison">
                    <div className="current">
                      <span className="label">Сейчас:</span>
                      <span className="value">{improvement.current}</span>
                    </div>
                    <div className="suggested">
                      <span className="label">Предлагаем:</span>
                      <span className="value">{improvement.suggested}</span>
                    </div>
                  </div>
                  <div className="reason">{improvement.reason}</div>
                </div>
              ))}
            </div>
          </div>

          {/* A/B тестирование */}
          <div className="ab-testing-section">
            <h3>🧪 A/B Тестирование заголовков</h3>
            <div className="ab-test-grid">
              {optimizationResults.abTestSuggestions.map((test: any, index: number) => (
                <div key={index} className="ab-test-card">
                  <div className="test-title">{test.title}</div>
                  <div className="test-description">{test.description}</div>
                  <div className="test-metrics">
                    <span className="expected-ctr">Ожидаемый CTR: {test.expectedCTR}</span>
                    <button className="use-btn">Использовать</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Heatmap времени */}
          <div className="time-heatmap-section">
            <h3>🕒 Лучшее время для публикации</h3>
            <div className="heatmap">
              {optimizationResults.heatmapData.map((data: any, index: number) => (
                <div key={index} className="heatmap-item">
                  <div className="time">{data.time}</div>
                  <div 
                    className="ctr-bar"
                    style={{ height: `${data.ctr * 15}px` }}
                    data-ctr={data.ctr}
                  ></div>
                  <div className="ctr-value">{data.ctr}%</div>
                </div>
              ))}
            </div>
            <div className="heatmap-legend">
              <span>Низкий CTR</span>
              <span>Высокий CTR</span>
            </div>
          </div>

          {/* Кнопки действий */}
          <div className="action-section">
            <button className="btn primary">Применить все улучшения</button>
            <button className="btn secondary">Экспорт отчета</button>
            <button className="btn outline">Настроить уведомления</button>
          </div>
        </div>
      )}
    </div>
  );
}